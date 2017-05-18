import * as types from '../actions/types'

export const sensors = (state = {markers: []}, action) => {
  switch (action.type) {
    case types.ATTACHED_SENSOR:
      return Object.assign({}, state, {attachedMarkerId: action.sensor.substr(15, action.sensor.indexOf(' added')-15)})
    case types.ATTACHED_SENSOR_FAILED:
      return Object.assign({}, state, {})
    case types.OPENING_WEBSOCKET:
      return Object.assign({}, state, {})
    case types.CLOSING_WEBSOCKET:
      return Object.assign({}, state, {})
    case types.CURRENT_POSITION:
      return Object.assign({}, state, {position: action.pos})
    case types.FETCHING_THINGS:
      return Object.assign({}, state, {fetchingSensors: true})
    case types.FETCHED_THINGS:
      let thingsWithLocation = action.things.reduce((acc, thing) => {
        if(thing.location){
          acc.push({
                position: {
                  lat: thing.location.latitude,
                  lng: thing.location.longitude,
                },
                showInfo: false,
                key: thing.name,
                defaultAnimation: 2,
                thing: thing
              })
        }
        return acc
      }, [])
      return Object.assign({}, state, {markers: thingsWithLocation})
    case types.FETCH_THINGS_FAILED:
        return Object.assign({}, state, {fetchingSensorsError: action.error})
    case types.FETCHING_FOLDERS:
      return Object.assign({}, state, {fetchingFolders: true})
    case types.FETCHED_FOLDERS:
      let baseStations = action.basestations.reduce((acc, base) => {
        if(base.location){
          acc.push(constructBasestation(base))
        }
        return acc
      }, [])
      return Object.assign({}, state, {markers: baseStations})
    case types.REGISTER_FOLDER_DONE:
        return Object.assign({}, state, {markers: state.markers.concat(constructBasestation(action.base))})
    case types.FETCH_FOLDERS_FAILED:
        return Object.assign({}, state, {fetchingFoldersError: action.error})
    case types.SHOW_REGISTER_BASE:
        return Object.assign({}, state, {showRegisterBase: true, mapClickLocation: action.location, modalPosition: action.pixel})
    case types.HIDE_REGISTER_BASE:
        return Object.assign({}, state, {showRegisterBase: false})
    case types.SHOW_REGISTER_SENSOR:
        return Object.assign({}, state, {showSensorFeed: true})
    case types.HIDE_REGISTER_SENSOR:
        return Object.assign({}, state, {showSensorFeed: false})
    case types.SHOW_MARKER_INFO:
        let markers = state.markers.map(marker => {
          marker.showInfo = marker.base.id === action.basestation.id
          if (marker.base.id === action.basestation.id) {
              marker.base.sensors = action.basestation.sensors
          }
          return marker
        })
        return Object.assign({}, state, {markers: markers, showSensorFeed: action.showRegisterSensor ? true : false})
    case types.HIDE_MARKER_INFO:
        return Object.assign({}, state, {markers: state.markers.map(marker => {
          marker.showInfo = false
          return marker
        })})
    default:
      return state
  }
}

export default sensors;

const constructBasestation = (base) => {
  return {
    position: {
      lat: base.location.latitude,
      lng: base.location.longitude,
    },
    showInfo: false,
    key: base.name,
    defaultAnimation: 2,
    base: {
      id: base.id,
      sensors: base.sensors,
      name: base.name
    }
  }
}
