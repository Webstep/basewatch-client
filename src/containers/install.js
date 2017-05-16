import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Map from '../components/map'
import * as actions from '../actions/sensors'

let position = {}

class Install extends Component {

  componentDidMount(){
    navigator.geolocation.getCurrentPosition((pos) => {
      this.setState({position: pos})
    }, (err) => {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    },
    {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    }
  )
}
  render() {
    return (
        <div style={{height:'100%'}}>
          {this.state &&
            <Map
            centerPos={{lat: this.state.position.coords.latitude, lng: this.state.position.coords.longitude }}
            markers={[]} />
          }
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    state: state.sensors
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(actions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Install)
