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
          media: '/img/Planet_Mercury.jpg'
        },
        {
          id: 2,
          name: 'Venus',
          media: '/img/venus.png'
        },
        {
          id: 3,
          name: 'Earth',
          media: '/img/4-earth.jpg'
        },
        {
          id: 4,
          name: 'Mars',
          media: '/img/mars8small.gif'
        },
        {
          id: 5,
          name: 'Jupitar',
          media: '/img/Jupiter.jpg'
        },
        {
          id: 6,
          name: 'Saturn',
          media: '/img/Saturn.JPG'
        },
        {
          id: 7,
          name: 'Uranus',
          media: '/img/Uranus.png'
        },
        {
          id: 8,
          name: 'Neptune',
          media: '/img/neptune.jpg'
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
