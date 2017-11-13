import React, { Component } from 'react';
import PlanetList from '../Planet/PlanetList';



export default class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      PlanetList: [
        {
          id: 1,
          name: 'Mercury',
          lengthOfTheDay: '58d 15h 30m',
          distanceFromSun: '57.91 million km',
          averageTemp: '176C',
          water: 'No',
          madeOf: 'Rock',
          surfaceArea: '74.8 million km²',
          media: '/img/Planet_Mercury.jpg',
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
        {
          id: 3,
          name: 'Earth',
          lengthOfTheDay: '24h',
          distanceFromSun: '149.6 million km',
          averageTemp: '16C',
          water: 'Yes',
          madeOf: 'Rock',
          surfaceArea: '510.1 million km²',
          media: '/img/4-earth.jpg',
          price: '$5,895,000'
        },
        {
          id: 4,
          name: 'Mars',
          lengthOfTheDay: '1d 0h 40m',
          distanceFromSun: '227.9 million km',
          averageTemp: '-60C',
          water: 'Yes',
          madeOf: 'Rock',
          surfaceArea: '144.8 million km²',
          media: '/img/mars8small.gif',
          price: '$1,234,000'
        },
        {
          id: 5,
          name: 'Jupitar',
          lengthOfTheDay: '0d 9h 56m',
          distanceFromSun: '778.5 million km',
          averageTemp: '-145C',
          water: 'Yes',
          madeOf: 'Gas',
          surfaceArea: '61.42 billion km²',
          media: '/img/Jupiter.jpg',
          price: '$4,000'
        },
        {
          id: 6,
          name: 'Saturn',
          lengthOfTheDay: '0d 10h 42m',
          distanceFromSun: '1.429 billion km',
          averageTemp: '-178C',
          water: 'Yes',
          madeOf: 'Gas',
          surfaceArea: '42.7 billion km²',
          media: '/img/Saturn.JPG',
          price: '$3s,000'
        },
        {
          id: 7,
          name: 'Uranus',
          lengthOfTheDay: '0d 17h 14m',
          distanceFromSun: '2.871 billion km',
          averageTemp: '-216C',
          water: 'Yes',
          madeOf: 'Gas',
          surfaceArea: '8.083 billion km²',
          media: '/img/Uranus.png',
          price: '$2,000'
        },
        {
          id: 8,
          name: 'Neptune',
          lengthOfTheDay: '0d 16h 6m',
          distanceFromSun: '4.498 billion km',
          averageTemp: '-214C',
          water: 'Yes',
          madeOf: 'Gas',
          surfaceArea: '7.618 billion km²',
          media: '/img/neptune.jpg',
          price: '$1,000'
        },
      ]
    }
  }
  render() {
    return(
      <section>

        <section>
          <section className="container">
            <PlanetList PlanetList={this.state.PlanetList}/>
          </section>
          
        </section>

      </section>

    );
  }
}
