import React, { Component } from 'react';
import Popup from './Popup';

export default class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      popupStatus: false
    }
  }

  showPopup = () => {
    this.setState({popupStatus: true})
  }

  hidePopup = () => {
    this.setState({popupStatus: false})
  }
  render() {
    return(
      <section>
        <ul className="navigation">
          <li className="left"><a href="#">Planet Properties</a></li>
          <li className="right"><a href="#">SignUp</a></li>
          <li className="right"><a href="#" onClick={this.showPopup}>SignIn</a></li>
        </ul>
        <Popup status={this.state.popupStatus} hidePopup={this.hidePopup}/>
      </section>
    );
  }
}
