import React, { Component } from 'react';
import PlanetPopup from './PlanetPopup';


export default class PlanetItem extends Component {
  constructor() {
    super();
    this.state = {
     planetPopupStatus: false
    }
  }

  showPlanetPopup = () => {
     this.setState({planetPopupStatus: true});
  };


  hidePlanetPopup = () => {
     this.setState({planetPopupStatus: false});
  };

  render(){
    return(
      <div className="planet">
        <img className="img" src={this.props.media} onClick={this.showPlanetPopup()}/>
        <PlanetPopup status={this.state.PlanetPopupStatus} hidePopup={this.hidePlanetPopup}/>
      </div>
    );
  }
}
