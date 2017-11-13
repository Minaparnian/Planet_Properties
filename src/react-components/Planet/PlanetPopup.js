import React, { Component } from 'react';
import PopupPlanet from '../Navbar/PopupPlanet';

export default class PlanetPopup extends Component {
  constructor() {
    super();
    this.state = {
      Planet: {
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

      }
    }
  }



renderPlanetInfo() {
  return(
    <header>
      <section className="header-shadow">
        <h1 className="planet-pop-title">{this.state.Planet.name}</h1>
        <section>
          <ul>
          <li className="planet-list">length Of The Day:{this.state.Planet.lengthOfTheDay}</li>
          <li className="planet-list"> distance From Sun:{this.state.Planet.distanceFromSun}</li>
          <li className="planet-list"> average Temp:{this.state.Planet.averageTemp}</li>
          <li className="planet-list">water:{this.state.Planet.water}</li>
          <li className="planet-list">surface Area:{this.state.Planet.surfaceArea}</li>
          <li className="planet-list">madeOf:{this.state.Planet.madeOf}</li>
          <li className="planet-list">Price:{this.state.Planet.price}</li>

          </ul>
          <button className="buy">BUY</button>
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
