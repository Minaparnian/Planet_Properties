import React, { Component } from 'react';
import PlanetItem from './PlanetItem';


export default class PlanetList extends Component {
  render(){
    return(
      <section className="planet-all">

        {
          this.props.PlanetList.map(function(item, idx) {
              return <PlanetItem key={idx} {...item}/>
          })
        }
      </section>
    );

  }

}
