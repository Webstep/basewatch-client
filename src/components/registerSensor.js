import React, {Component} from 'react'
import Button from 'muicss/lib/react/button';
import Container from 'muicss/lib/react/container';
import Divider from 'muicss/lib/react/divider';

class RegisterSensor extends Component  {
  constructor(props) {
   super(props);
   this.state = {
     base: this.props.base,
     sensorMap: {}
   };
 }

 componentDidMount(){
   let that = this;
   this.connection = new WebSocket('wss://basewatch.herokuapp.com/registersensor/ws');
   this.connection.onmessage = event => {
     let data = JSON.parse(event.data);
      if(!that.state.sensorMap.hasOwnProperty(data.sensorId) && !that.baseStationHasSensor(data.sensorId)){
        let map = Object.assign({}, that.state.sensorMap);
        map[data.sensorId] = []
        that.setState(Object.assign({}, that.state, {sensorMap: map}));
      }
    };
   this.connection.onerror = function (e) {
      console.log("An error occurred: ", e);
    }
 }

 componentWillUnmount(){
   this.connection.close();
 }

 baseStationHasSensor(id){
   return this.state.base.sensors.some(sensor => {
     if(sensor.id === id) return true;
   })
 }

  render() {
    return (
      <Container fluid={true}>
      <h3>Add Sensors</h3>
      <Divider />
              Attach sensors to basestation {this.props.base.name} <br/><br/>
              <br/><br/>
              <ul style={{listStyle: 'none', paddingLeft:0}}>
              {Object.keys(this.state.sensorMap).map(key => {
                return <li key={key}><Button color='primary' onClick={() => this.props.attachSensor(this.state.base.id, key)}>Add sensor {key}</Button></li>
              })
              }
              </ul>
      </Container>
    )
  }
}

export default RegisterSensor
