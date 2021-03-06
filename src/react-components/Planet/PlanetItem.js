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
  renderPlanetInfo() {
    return(
      <header>
        <section className="header-shadow">
          <h1 className="planet-pop-title">{this.props.name}</h1>
          <section>
          <ul>
          <li className="planet-list">Length Of The Day<hr/><br/>{this.props.lengthOfTheDay}</li>
          <li className="planet-list"> Distance From Sun<hr/><br/>{this.props.distanceFromSun}</li>
          <li className="planet-list"> Average Temp<hr/><br/>{this.props.averageTemp}</li>
          <li className="planet-list">Water<hr/><br/>{this.props.water}</li>
          <li className="planet-list">Surface Area<hr/><br/>{this.props.surfaceArea}</li>
          <li className="planet-list">MadeOf<hr/><br/>{this.props.madeOf}</li>
          <li className="planet-list">Price<hr/><br/>{this.props.price}</li>

          </ul>
          <button className="buy">Buy</button>
          </section>
        </section>

      </header>

    );
  }

  render(){
    return(
      <div className="planet">
        <img className="img" src={this.props.media}/>
        <a href="#" onClick={this.showPlanetPopup}>
          <h2>{this.props.name}</h2>
        </a>
        <PlanetPopup status={this.state.planetPopupStatus} hidePopup={this.hidePlanetPopup}>
        {this.renderPlanetInfo()}
        </PlanetPopup>
      </div>
    );
  }
}
