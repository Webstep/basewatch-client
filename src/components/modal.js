import React, {Component} from 'react'

class Modal extends Component  {
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
        <div style={{ position: 'relative', zIndex: 10, width: '25%', height: '50%', padding: 10, fontWeight: 'bold', backgroundColor: '#fff'}}>
          <div style={{float:'right'}} onClick={() => this.props.onCloseClick()}>X</div>
          <form onSubmit={this.handleSubmit}>
              <label>
              Folder Name
              </label><br/>
              <div>
                <input type="text" value={this.state.name} onChange={this.handleChange} /><br/>
              </div>
              <div style={{position: 'absolute', bottom: 10, right: 10, float: 'right'}}>
                <input type="submit" value="Submit" />
              </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Modal
