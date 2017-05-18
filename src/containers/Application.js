import React, {Component} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import RegisterBase from '../components/registerBase'
import Map from '../components/map'
import Install from '../containers/install'
import * as actions from '../actions/sensors'

class Application extends Component {
  constructor(props){
    super(props);
    this.props = props;
  }

  componentDidMount(){
    this.props.fetchBaseStations();
    this.props.getCurrentPosition();
  }

  render() {
    return (
      <div style={{height:'100%', width:'100%'}}>
      {this.props.state.showRegisterBase &&
        <RegisterBase
          onCloseClick={this.props.hideRegisterBase}
          onSubmit={this.props.registerFolder}
          location={this.props.state.mapClickLocation}
          position={this.props.state.modalPosition}/>
      }
        {this.props.state && this.props.state.position &&
          <Map
            centerPos={{lat: this.props.state.position.coords.latitude, lng: this.props.state.position.coords.longitude }}
            markers={this.props.state.markers}
            onMarkerClick={this.props.fetchBasestationData}
            onMapClick={this.props.showRegisterBase}
            showRegisterSensor={this.props.showRegisterSensor}
            showSensorFeed={this.props.state.showSensorFeed}
            attachSensor={this.props.attachSensorToBase}
            closeMarker={this.props.hideMarkerInfo}
            />
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
)(Application)

/*
        <BrowserRouter>
          <Switch>
            <Route path="/things" component={() => <Map markers={this.props.state.things} />} />
            <Route path="/install" component={() => <Install/>} />
          </Switch>
        </BrowserRouter>
*/
