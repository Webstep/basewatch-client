import * as types from './types'

const API_KEY = 'd45a7c14c88f48f5937a8fc3254378ad';

export const hideMarkerInfo = () => {
  return {
    type: types.HIDE_MARKER_INFO
  }
}

export const showRegisterBase = (event) => {
  return function(dispatch){
    dispatch(hideMarkerInfo());
    dispatch({
        type: types.SHOW_REGISTER_BASE,
        pixel: {x: event.pixel.x, y: event.pixel.y},
        location: {
          latitude: event.latLng.lat(),
          longitude: event.latLng.lng()
        }
    });
  }
}

export const hideRegisterBase = () => {
      return {
        type: types.HIDE_REGISTER_BASE
      }
}

export const showRegisterSensor = (base) => {
    return function(dispatch){
      dispatch({
        type: types.SHOW_REGISTER_SENSOR,
        base
      })
    }
}

export const hideRegisterSensor = () => {
      return {
        type: types.HIDE_REGISTER_SENSOR
      }
}

export const openBasestationSocket = () => {
    return function(dispatch){
      dispatch({
        type: types.OPENING_WEBSOCKET
      })
    }
}

export const closeBasestationSocket = () => {
    return function(dispatch){
      dispatch({
        type: types.CLOSING_WEBSOCKET
      })
    }
}

export const showMarkerInfo = (marker) => {
    return function (dispatch) {
        dispatch(hideRegisterBase());
        dispatch(hideRegisterSensor());
        let headers = new Headers();

        let init = { method: 'GET',
            headers: headers,
            cache: 'default' };

        fetch(new Request('https://basewatch.herokuapp.com/basestation/' + marker.base.id, init))
            .then(response => {
                if(response.ok){
                    return response.json()
                } else {
                    // TODO: Add error handling
                    dispatch(fetchedFoldersFailed(response))
                }
            })
            .then(json => {
                dispatch(fetchedMarkerInfo(json.body))
            })
            .catch(error => {
                dispatch(fetchedFoldersFailed(error))
            })
    }
}

export const fetchedMarkerInfo = (basestation) => {
    return {
        type: types.SHOW_MARKER_INFO,
        basestation
    }
}

export const attachSensorToBase = (baseId, sensorId) => {
  console.log('attachSensorToBase base: ' + baseId + '  sensorId: ' + sensorId);
  return function(dispatch){
    let headers = new Headers();
    let init = { method: 'PUT',
    headers: headers,
    cache: 'default' };

   fetch(new Request('https://basewatch.herokuapp.com/basestation/' + baseId + '/sensor/' + sensorId, init)).then(
      response => {
        if(response.ok){
          return response.json()
        } else {
          dispatch(attachSensorFailed(response))
        }
      }).then(
        json =>{
          dispatch(attachedSensor(baseId, json.body))
      }).catch(error => {
          dispatch(attachSensorFailed(error))
      })
  }
}

export const attachedSensor = (baseId, sensor) => {
  return {
    type: types.ATTACHED_SENSOR,
    baseId,
    sensor
  }
}

export const attachSensorFailed = (error) => {
  return {
    type: types.ATTACH_SENSOR_FAILED,
    error
  }
}

export const getCurrentPosition = () => {
  return function(dispatch){
    navigator.geolocation.getCurrentPosition((pos) => {
          dispatch( {
            type: types.CURRENT_POSITION,
            pos
          })
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
  }

export const fetchBaseStations = () => {
  return function(dispatch){
    dispatch(fetchingFolders())
    let headers = new Headers();

    let init = { method: 'GET',
    headers: headers,
    cache: 'default' };

   fetch(new Request('https://basewatch.herokuapp.com/basestations', init)).then(
      response => {
        if(response.ok){
          return response.json()
        } else {
          dispatch(fetchedFoldersFailed(response))
        }
      }).then(
        json =>{
          dispatch(fetchedFolders(json.body))
      }).catch(error => {
          dispatch(fetchedFoldersFailed(error))
      })
  }
}

export const fetchingFolders = () => {
  return {
    type: types.FETCHING_FOLDERS
  }
}

export const fetchedFolders = (basestations) => {
  return {
    type: types.FETCHED_FOLDERS,
    basestations
  }
}

export const fetchedFoldersFailed = (error) => {
  return {
    type: types.FETCH_FOLDERS_FAILED,
    error
  }
}

export const fetchSensors = () => {
  return function(dispatch){
    dispatch(fetchingSensors())
    let headers = new Headers();

    let init = { method: 'GET',
    headers: headers,
    cache: 'default' };

   fetch(new Request('https://basewatch.herokuapp.com/sensors', init)).then(
      response => {
        if(response.ok){
          return response.json()
        } else {
          dispatch(fetchedSensorsFailed(response))
        }
      }).then(
        json =>{
          dispatch(fetchedSensors(json.things))
      }).catch(error => {
          dispatch(fetchedSensorsFailed(error))
      })
  }
}

export const fetchingSensors = () => {
  return {
    type: types.FETCHING_SENSORS
  }
}

export const fetchedSensors = (things) => {
  return {
    type: types.FETCHED_SENSORS,
    things
  }
}

export const fetchedSensorsFailed = (error) => {
  return {
    type: types.FETCHED_SENSORS,
    error
  }
}

export const registeringFolder = () => {
  return {
    type: types.REGISTERING_FOLDER
  }
}

export const registerFolderFailed = (response) => {
  return {
    type: types.REGISTER_FOLDER_FAILED,
    response
  }
}

export const registeredFolder = (base) => {
    return function(dispatch){
      dispatch(hideRegisterBase());
      dispatch({
        type: types.REGISTER_FOLDER_DONE,
        base
      })
    }
}

export const registerFolder = (formData) => {
  return function(dispatch){
    dispatch(registeringFolder())
    let headers = new Headers();
    headers.set('X-Requested-With', 'XMLHttpRequest');
    headers.set('X-CSRF-TOKEN', 'nocheck');
    headers.set('Content-Type', 'application/json');
    /*
    */
    //
    let latitude = formData.location.latitude + "";
    let longitude = formData.location.longitude + "";

    let body = JSON.stringify({
      name: formData.name,
      location: {
        latitude: formData.location.latitude,
        longitude: formData.location.longitude
      }
    });
    let init = { method: 'POST',
    credentials: 'same-origin',
    headers: headers,
    body: body,
    cache: 'default' };

   fetch(new Request('https://basewatch.herokuapp.com/basestation', init)).then(
      response => {
        if(response.ok){
          return response.json()
        } else {
          dispatch(registerFolderFailed(response))
        }
      }).then(
        response =>{
          dispatch(registeredFolder(response.body))
      }).catch(error => {
          dispatch(registerFolderFailed(error))
      })
  }
}

export const updateFolderLocation = (id, _location) => {
  return function(dispatch){
    let location = {location: {latitude: _location.latitude, longitude: _location.longitude, address: ""}}
    dispatch(updateFolder({
      folder_id: id,
      description: JSON.stringify(location)
    }))
  }
}

export const updatingFolder = () => {
  return {
    type: types.UPDATING_FOLDER
  }
}

export const updateFolderFailed = (response) => {
  return {
    type: types.UPDATE_FOLDER_FAILED,
    response
  }
}

export const updatedFolder = (response) => {
  return function(dispatch){
    dispatch({
      type: types.UPDATE_FOLDER_DONE,
      response
    });
    dispatch(fetchBaseStations());
  }
}

export const updateFolder = (update) => {
  return function(dispatch){
    dispatch(updatingFolder())
    let headers = new Headers();
    headers.set('Authorization', 'ApiKey ' + API_KEY);
    headers.set('Content-Type', 'application/json');

    let body = {}

    if(update.name){
      body.name = update.name;
    }

    if(update.description){
      body.description = update.description;
    }

    if(update.parent_id){
      body.parent_id = update.parent_id;
    }

    let init = { method: 'PATCH',
    headers: headers,
    body: JSON.stringify(body),
    cache: 'default' };

   fetch(new Request('https://api.disruptive-technologies.com/v1/folders/' + update.folder_id, init)).then(
      response => {
        if(response.ok){
          return response.json()
        } else {
          dispatch(updateFolderFailed(response))
        }
      }).then(
        json =>{
          dispatch(updatedFolder(json.folder))
      }).catch(error => {
          dispatch(updateFolderFailed(error))
      })
  }
}
