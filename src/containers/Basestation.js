import React, {Component} from 'react'
import * as actions from '../actions/sensors'
import { InfoWindow } from 'react-google-maps'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import RegisterSensor from '../components/registerSensor'
import Button from 'muicss/lib/react/button';
import Divider from 'muicss/lib/react/divider';

class Basestation extends Component {
  constructor(props) {
   super(props);

   this.state = {sensors: this.getSensorsInBase(props.base.sensors)};
 }

 getSensorsInBase(sensors){
   return sensors.reduce((acc, sensor) => {
          acc[sensor.id] = {
            state: this.getSensorState(sensor),
            ...sensor
          };
          return acc;
        }, {})
 }

 getSensorState(sensor){
   switch (sensor.type) {
     case 'TEMPERATURE':
       return sensor.sensorProperties.temperature;
       break;
     case 'PROXIMITY':
       return sensor.sensorProperties.objectPresent ? 'closed' : 'open';
       break;
     case 'TOUCH':
       return '-';
       break;
     default:

   }
   return ;
 }

 componentWillReceiveProps(nextProps){
   if(Object.keys(this.state.sensors).length != this.props.base.sensors.length){
      this.setState(Object.assign({}, this.state, {sensors: this.getSensorsInBase(this.props.base.sensors)}))
   }
 }

 componentDidMount(){
   let that = this;
   console.log('mount', );
   this.setupWatch();
  //  this.connection = new WebSocket('wss://basewatch.herokuapp.com/registersensor/ws');
  //  this.connection.onmessage = event => {
  //    let data = JSON.parse(event.data);
  //     if(!that.state.sensorMap.hasOwnProperty(data.sensorId) && !that.baseStationHasSensor(data.sensorId)){
  //       let map = Object.assign({}, that.state.sensorMap);
  //       map[data.sensorId] = []
  //       that.setState(Object.assign({}, that.state, {sensorMap: map}));
  //     }
  //   };
  //  this.connection.onerror = function (e) {
  //     console.log("An error occurred: ", e);
  //   }
 }

 componentWillUnmount(){
      console.log('unmount')
//   this.connection.close();
 }

 buildEventSourceParams(sensors){
   let ids = sensors.reduce((acc, sensor) => {
     acc.push(sensor.id)
     return acc
   }, [])
   return ids.join('&thing_ids=');
 }

 setupWatch(){
   let url = "https://api.disruptive-technologies.com/v1/subscribe?apikey=d45a7c14c88f48f5937a8fc3254378ad";
   this.es = new EventSource(url);
   this.es.onmessage = this.onEventMessage;
   this.es.onerror = function (e) {
     console.log("An error occurred: ", e);
   }
 }

 closeWatch(){
   this.es.close();
 }

 onEventMessage(event){
  //  let sensors = Object.assign({}, state.sensors);
  //  sensors[event.data]
   console.log('on message: ' + event)
 }

    render(){
      return (
        <InfoWindow style={{backgroundColor: '#efefef'}} onCloseClick={() => this.props.hideMarkerInfo()} >
          <div key='info' style={{opacity: '1',overflow: 'auto', width: 400, height:400}}>
          <h3>Basestation {this.props.name}</h3>
          <Divider />
            <br />
              <div style={{paddingBottom:30}}>
                <table style={{width: '100%'}}>
                  <tr>
                    <th>Type</th>
                    <th>Name</th>
                    <th>Battery</th>
                    <th>RSSI</th>
                    <th>State</th>
                  </tr>
                    {Object.keys(this.state.sensors).map((key, i) => {
                      let sensor = this.state.sensors[key];
                        return <tr key={i}>
                            <td>
                              {sensor.type == 'PROXIMITY' && <i className="material-icons">compare_arrows</i>}
                              {sensor.type == 'TOUCH' && <i className="material-icons">layers</i>}
                              {sensor.type == 'TEMPERATURE' && <i className="material-icons">whatshot</i>}
                            </td>
                            <td>{sensor.name}</td>
                            <td>{sensor.sensorProperties.batteryPercentage} %</td>
                            <td>{sensor.sensorProperties.signalStrength}</td>
                            <td>{sensor.state}</td>
                        </tr>
                    })}
                </table>
              </div>
            <Divider />
            {!this.props.showSensorFeed &&
              <Button style={{position: 'absolute', bottom: 0, right:0}} color='primary' onClick={() => this.props.showRegisterSensor()}>Attach Sensors</Button>
            }
            {this.props.showSensorFeed &&
              <div key='registerSensor' style={{overflow: 'auto', height: 200}}>
                <RegisterSensor
                attachSensor={this.props.attachSensorToBase}
                base={this.props.base}
                isActive={this.props.showInfo}/>
              </div>
            }
          </div>
        </InfoWindow>
      )
    }
}

const mapStateToProps = (state) => {
  return {
    ...state.sensors
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(actions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Basestation)
