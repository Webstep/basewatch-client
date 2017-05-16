import React, {Component} from 'react'
import {
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} from 'react-google-maps';

const BaseMap = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={12}
    defaultCenter={props.centerPos}
    onClick={props.onMapClick}
    >
    {props.markers && props.markers.map((marker, index) => {
      const onCloseClick = () => props.onCloseClick(marker);

      return (
        <Marker
          key={index}
          position={marker.position}
          title={(index + 1).toString()}
          onClick={() => props.onMarkerClick(marker)}
        >
          {marker.showInfo && (
            <InfoWindow onCloseClick={onCloseClick} >
              <div style={{height: 400, width: 300, backgroundColor: '#fff', opacity: '1'}}>
                <strong>{marker.key}</strong>
                <br />
                {marker.sensors && marker.sensors.map(sensor => {
                  return <span>sensor.name</span>
                })}
              </div>
              <div>OPEN WS</div>
            </InfoWindow>
          )}
        </Marker>
      );
    })}
  </GoogleMap>
));

export default class Map extends Component {

  handleCloseClick = this.handleCloseClick.bind(this);

 handleCloseClick(targetMarker) {
   this.setState({
     markers: this.props.markers.map(marker => {
       if (marker === targetMarker) {
         return {
           ...marker,
           showInfo: false,
         };
       }
       return marker;
     }),
   });
 }

  render() {
    return (
      <div style={{height:'100%', width: '100%', float: 'left'}}>
        <BaseMap
          centerPos={this.props.centerPos}
          markers={this.props.markers}
          onMapClick={this.props.onMapClick}
          onMarkerClick={this.props.onMarkerClick}
          onCloseClick={this.handleCloseClick}

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
