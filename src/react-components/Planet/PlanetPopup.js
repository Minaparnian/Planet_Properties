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



renderPlanetInfo() {
  return(
    <header>
      <section className="header-shadow">
        <h1 className="planet-pop-title">{this.state.Planet[0].name}</h1>
        <section>
        <ul>
        <li className="planet-list">Length Of The Day:{this.state.Planet[0].lengthOfTheDay}</li>
        <li className="planet-list"> Distance From Sun:{this.state.Planet[0].distanceFromSun}</li>
        <li className="planet-list"> Average Temp:{this.state.Planet[0].averageTemp}</li>
        <li className="planet-list">Water:{this.state.Planet[0].water}</li>
        <li className="planet-list">Surface Area:{this.state.Planet[0].surfaceArea}</li>
        <li className="planet-list">MadeOf:{this.state.Planet[0].madeOf}</li>
        <li className="planet-list">Price:{this.state.Planet[0].price}</li>

        </ul>
        <button className="buy">Buy</button>
        </section>
      </section>

    </header>

  );
}

  render() {
    return(
      <PopupPlanet {...this.props} style="planet-popup">
       {this.renderPlanetInfo()}
      </PopupPlanet>
    );
  }
}
