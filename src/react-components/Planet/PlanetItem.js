import React, { Component } from 'react';


export default class PlanetItem extends Componet {
  render(){
    return(
      <div className="planet">
        <img className="img" src={this.props.media} />
      </div>
    );
  }
}