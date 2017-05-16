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
                {marker.base.sensors && (
                    <table>
                        <tbody>
                        {marker.base.sensors.map((sensor, i) => {
                            return <tr key={i}>
                                <td>{sensor.type}</td>
                                <td>{sensor.name}</td>
                                <td>{sensor.lastUpdated}</td>
                                <td>{sensor.sensorProperties.batteryPercentage} %</td>
                                <td>{sensor.sensorProperties.signalStrength}</td>
                                <td>{sensor.sensorProperties.temperature}</td>
                            </tr>
                        })}
                        </tbody>
                    </table>
                )}
                <div onClick={() => props.showRegisterSensor(marker.base)}>Attach Sensors</div>
              </div>
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
          showRegisterSensor={this.props.showRegisterSensor}
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
