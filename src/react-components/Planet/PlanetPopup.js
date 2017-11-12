import React, { Component } from 'react';
import Popup from '../Navbar/Popup';

export default class PlanetPopup extends Component {
  render() {
    return(
      <Popup {...this.props}>
      <h1>Planet info here</h1>
      </Popup>
    );
  }
}
