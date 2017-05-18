import React, {Component} from 'react'
import Form from 'muicss/lib/react/form'
import Input from 'muicss/lib/react/input'
import Textarea from 'muicss/lib/react/textarea'
import Button from 'muicss/lib/react/button'

class RegisterBase extends Component  {
  constructor(props) {
   super(props);
   this.state = {
     name: '',
     location: props.location
   };

   this.handleChange = this.handleChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
 }

 handleChange(event) {
   this.setState({name: event.target.value});
 }

 handleSubmit(event) {
    this.props.onSubmit(this.state);
    event.preventDefault();
  }

  render() {
    return (
      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}>
        <div style={{ position: 'absolute', top: this.props.position.y, left: this.props.position.x, zIndex: 10, width: 350, padding: 10, fontWeight: 'bold', backgroundColor: '#efefef'}}>
          <div style={{float:'right'}} onClick={() => this.props.onCloseClick()}>X</div>
          <Form>
                  <legend>Register Basestation</legend>
                  <Input hint="Name" value={this.state.name} onChange={this.handleChange}/>
                  <Button variant="raised" style={{float:'right'}} onClick={this.handleSubmit}>Submit</Button>
          </Form>
        </div>
      </div>
    )
  }
}

export default RegisterBase
