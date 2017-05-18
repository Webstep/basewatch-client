import React, {Component} from 'react'
import {
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} from 'react-google-maps'
import RegisterSensor from '../components/registerSensor'
import Button from 'muicss/lib/react/button';
import Divider from 'muicss/lib/react/divider';

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
          {marker.showInfo && (
            <InfoWindow style={{backgroundColor: '#efefef'}} onCloseClick={() => props.closeMarker()} >
              <div key='info' style={{opacity: '1',overflow: 'auto', width: 400, height:400}}>
              <h3>Basestation {marker.key}</h3>
              <Divider />
                <br />
                {marker.base.sensors && (
                  <div style={{paddingBottom:30}}>
                    <table style={{width: '100%'}}>
                      <tr>
                        <th>Type</th>
                        <th>Name</th>
                        <th>Battery</th>
                        <th>RSSI</th>
                        <th>State</th>
                      </tr>
                        {marker.base.sensors.map((sensor, i) => {
                            return <tr key={i}>
                                <td>
                                  {sensor.type == 'PROXIMITY' && <i className="material-icons">compare_arrows</i>}
                                  {sensor.type == 'TOUCH' && <i className="material-icons">layers</i>}
                                  {sensor.type == 'TEMPERATURE' && <i className="material-icons">whatshot</i>}
                                </td>
                                <td>{sensor.name}</td>
                                <td>{sensor.sensorProperties.batteryPercentage} %</td>
                                <td>{sensor.sensorProperties.signalStrength}</td>
                                <td>{sensor.sensorProperties.temperature}</td>
                            </tr>
                        })}
                    </table>
                  </div>
                )}
                <Divider />
                {!props.showSensorFeed &&
                  <Button style={{position: 'absolute', bottom: 0, right:0}} color='primary' onClick={() => props.showRegisterSensor()}>Attach Sensors</Button>
                }
                {props.showSensorFeed &&
                  <div key='registerSensor' style={{overflow: 'auto', height: 200}}>
                    <RegisterSensor
                    attachSensor={props.attachSensor}
                    base={marker.base}
                    isActive={props.showInfo}/>
                  </div>
                }
              </div>
            </InfoWindow>
          )}
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
