import * as types from '../actions/types'

export const sensors = (state = {markers: []}, action) => {
  switch (action.type) {
    case types.CURRENT_POSITION:
      return Object.assign({}, state, {position: action.pos})
    case types.FETCHING_THINGS:
      return Object.assign({}, state, {fetchingThings: true})
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
        return Object.assign({}, state, {fetchingThingsError: action.error})
    case types.FETCHING_FOLDERS:
      return Object.assign({}, state, {fetchingFolders: true})
    case types.FETCHED_FOLDERS:
      let foldersWithLocation = action.folders.reduce((acc, folder) => {
        if(folder.location){
          acc.push({
            position: {
              lat: folder.location.latitude,
              lng: folder.location.longitude,
            },
            showInfo: false,
            key: folder.name,
            defaultAnimation: 2,
            sensors: folder.sensors
          })
        }
        return acc
      }, [])
      return Object.assign({}, state, {markers: foldersWithLocation})
    case types.FETCH_FOLDERS_FAILED:
        return Object.assign({}, state, {fetchingFoldersError: action.error})
    case types.REGISTER_BASE_STATION:
        return Object.assign({}, state, {})
    case types.SHOW_REGISTER_FORM:
        return Object.assign({}, state, {showRegisterForm: true, mapClickLocation: action.location})
    case types.HIDE_REGISTER_FORM:
        return Object.assign({}, state, {showRegisterForm: false})
    case types.SHOW_MARKER_INFO:
        let markers = state.markers.map(marker => {
          marker.showInfo = marker === action.marker ? true : false
          return marker
        })
        return Object.assign({}, state, {markers: markers})
    default:
      return state
  }
}

export default sensors;
