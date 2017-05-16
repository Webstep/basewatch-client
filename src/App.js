/* global google */
import _ from "lodash";

import {
  default as React,
  Component,
} from "react";

import Helmet from "react-helmet";

import {
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

import {BrowserRouter, Route} from 'react-router-dom';

import Locations from './containers/Locations'
import Application from './containers/Application'

export default class App extends Component {

  render() {
    return (
      <BrowserRouter>
          <Route path="/" component={Application} />
      </BrowserRouter>
    );
  }
}
