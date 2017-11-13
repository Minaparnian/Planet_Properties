import React, { Component } from 'react';
import PopupPlanet from './PopupPlanet';

export default class PlanetPopup extends Component {
  constructor() {
    super();
    this.state = {
      Planet: [
      {
        id: 1,
        name: 'Mercury',
        lengthOfTheDay: '58d 15h 30m',
        distanceFromSun: '57.91 million km',
        averageTemp: '176C',
        water: 'No',
        madeOf: 'Rock',
        surfaceArea: '74.8 million km²',
        media: '/img/Mercury-big.jpg',
        price: '$1,234,000'
      },
      {
        id: 2,
        name: 'Venus',
        lengthOfTheDay: '116d 18h 0m',
        distanceFromSun: '108.2 million km',
        averageTemp: '462C',
        water: 'No',
        madeOf: 'Rock',
        surfaceArea: '460.2 million km²',
        media: '/img/venus.png',
        price: '$3,534,000'
      },


     ]
    }
  }





  render() {
    return(
      <PopupPlanet {...this.props} style="planet-popup">
       
      </PopupPlanet>
    );
  }
}
