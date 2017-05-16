import React, {Component} from 'react'

class RegisterSensor extends Component  {
  constructor(props) {
   super(props);
   this.state = {
     sensors: []
   };

   this.handleChange = this.handleChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
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
              Attach sensors to basestation this.props.base.name <br/><br/>
              <br/><br/>
              Incoming....
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
