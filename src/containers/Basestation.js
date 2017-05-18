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

  //  this.state = {
  //    name: '',
  //    location: props.location
  //  };
 }



    render(){
      return (
        <InfoWindow style={{backgroundColor: '#efefef'}} onCloseClick={() => this.props.hideMarkerInfo()} >
          <div key='info' style={{opacity: '1',overflow: 'auto', width: 400, height:400}}>
          <h3>Basestation {this.props.name}</h3>
          <Divider />
            <br />
            {this.props.base.sensors && (
              <div style={{paddingBottom:30}}>
                <table style={{width: '100%'}}>
                  <tr>
                    <th>Type</th>
                    <th>Name</th>
                    <th>Battery</th>
                    <th>RSSI</th>
                    <th>State</th>
                  </tr>
                    {this.props.base.sensors.map((sensor, i) => {
                        return <tr key={i}>
                            <td>
                              {sensor.type == 'PROXIMITY' && <i className="material-icons">compare_arrows</i>}
                              {sensor.type == 'TOUCH' && <i className="material-icons">layers</i>}
                              {sensor.type == 'TEMPERATURE' && <i className="material-icons">whatshot</i>}
                            </td>
                            <td>{sensor.name}</td>
                            <td>{sensor.sensorProperties.batteryPercentage} %</td>
                            <td>{sensor.sensorProperties.signalStrength}</td>
                            <td>{sensor.sensorProperties.temperature}</td>
                        </tr>
                    })}
                </table>
              </div>
            )}
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
