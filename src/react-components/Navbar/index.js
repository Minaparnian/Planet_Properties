import React, { Component } from 'react';
import LoginPopup from './LoginPopup';
import SignupPopup from './SignupPopup';

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
          <li className="left"><h1><a href="#">Planet Properties</a></h1></li>
          <li className="right"><a href="#" onClick={this.showPopup}>SignUp</a></li>
          <li className="right"><a href="#" onClick={this.showPopup}>SignIn</a></li>
        </ul>
        <LoginPopup status={this.state.popupStatus} hidePopup={this.hidePopup}/>
        <SignupPopup status={this.state.popupStatus} hidePopup={this.hidePopup}/>
      </section>
    );
  }
}
