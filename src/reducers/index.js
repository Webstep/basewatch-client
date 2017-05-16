import { combineReducers } from 'redux'
import sensors from './sensors'
import locations from './locations'

const basewatch = combineReducers({
  locations, sensors
})

export default basewatch
