import React, {Component} from 'react'

class RegisterSensor extends Component  {
  constructor(props) {
   super(props);
   this.state = {
     base: this.props.base,
     sensorMap: {}
   };

   this.handleChange = this.handleChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
 }

 componentWillReceiveProps(nextProps){
   if(this.props.sensors){
     console.log('have sensors');
   }
 }

 componentDidMount(){
   console.log('mount');
   let that = this;
   this.es = new EventSource("https://api.disruptive-technologies.com/v1/subscribe?apikey=d45a7c14c88f48f5937a8fc3254378ad");
   this.es.onmessage = event => {
     let sensor = JSON.parse(event.data).result;
      if(!that.state.sensorMap.hasOwnProperty(sensor.thing_id)){
        let map = Object.assign({}, that.state.sensorMap);
        map[sensor.thing_id] = []
        that.setState(Object.assign({}, that.state, {sensorMap: map}));
      }
      console.log(Object.keys(that.state.sensorMap));
      console.log("Response: ", event.data);

    };
   this.es.onerror = function (e) {
      console.log("An error occurred: ", e);
    }
/*
    this.connection = new WebSocket('wss://basewatch.herokuapp.com/registersensor/ws');
    this.connection.onmessage = event => {
      console.log('got data' + event.data);
    }
    */
 }

 componentWillUnmount(){
   console.log('unmount');
   this.es.close();
//   this.connection.close();
//    this.connection = new WebSocket('wss://basewatch.herokuapp.com/registersensor/ws');
 }

 handleChange(event) {
   console.log('RegisterSensor::handleChange');
//   this.setState({name: event.target.value});
 }

 handleSubmit(event) {
   console.log('RegisterSensor::handleSubmit');
  //  this.props.onSubmit(this.state);
    event.preventDefault();
  }

  render() {
    return (
      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}>
        <div style={{ position: 'relative', zIndex: 10, width: '450', height: '350', padding: 10, fontWeight: 'bold', backgroundColor: '#fff'}}>
          <div style={{float:'right'}} onClick={() => this.props.onCloseClick()}>X</div>
          <form onSubmit={this.handleSubmit}>
              Attach sensors to basestation {this.props.base.name} <br/><br/>
              <br/><br/>
              <ul>
              {Object.keys(this.state.sensorMap).map(key => {
                return <li><button onClick={() => this.props.attachSensor(this.state.base.id, key)}>Add sensor {key}</button></li>
              })
              }
              </ul>
              <div style={{position: 'absolute', bottom: 10, right: 10, float: 'right'}}>
                <input type="submit" value="Submit" />
              </div>
          </form>
        </div>
      </div>
    )
  }
}

export default RegisterSensor
