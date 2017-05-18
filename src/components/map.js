import React, {Component} from 'react'
import {
  withGoogleMap,
  GoogleMap,
  Marker
} from 'react-google-maps'
import Basestation from '../containers/Basestation'

const BaseMap = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={12}
    defaultCenter={props.centerPos}
    onClick={props.onMapClick}
    >
    {props.markers && props.markers.map((marker, index) => {
      return (
        <Marker
          key={index}
          position={marker.position}
          title={(index + 1).toString()}
          onClick={() => props.onMarkerClick(marker)}
        >
          {marker.showInfo &&
            <Basestation name={marker.key} base={marker.base}/>
          }
        </Marker>
      );
    })}
  </GoogleMap>
));

export default class Map extends Component {

  render() {
    return (
      <div style={{height:'100%', width: '100%', float: 'left'}}>
        <BaseMap
          centerPos={this.props.centerPos}
          markers={this.props.markers}
          onMapClick={this.props.onMapClick}
          onMarkerClick={this.props.onMarkerClick}
          showRegisterSensor={this.props.showRegisterSensor}
          showSensorFeed={this.props.showSensorFeed}
          attachSensor={this.props.attachSensor}
          closeMarker={this.props.closeMarker}
          containerElement={
            <div style={{ height: `100%`}} />
          }
          mapElement={
            <div style={{ height: `100%` }} />
          }
        />
      </div>
    );
  }
}
