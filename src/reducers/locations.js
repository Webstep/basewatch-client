import * as types from '../actions/types'

const locations = (state = {}, action) => {
  switch (action.type) {
    case types.SHOW_LOCATION:
      return Object.assign({}, state, {location: {lat: 59.123, long: 10.2345}})
    default:
      return state
  }
}

export default locations
