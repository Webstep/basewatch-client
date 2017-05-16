import * as types from './types'

export const showLocation = (pos) => {
  return {
    type: types.SHOW_LOCATION,
    pos
  }
}
