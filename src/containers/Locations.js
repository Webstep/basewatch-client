import React from 'react'
import {connect} from 'react-redux'
import * as mapActions from '../actions/map'

const Locations = ({state, displayLocation}) => {
    return (
      <div>
        <div>
        Locations here {state.location && state.location.lat}
        </div>
        <div onClick={() => displayLocation(123)}>Click me!</div>
        <div onClick={() => displayLocation(123)}>List me!</div>
      </div>
    )
}

const mapStateToProps = (state) => {
  return {
    state: state.locations
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    displayLocation: (id) => {
      dispatch(mapActions.showLocation(id))
    },
    listNodes: () => {
      dispatch(mapActions.showThings())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Locations)
