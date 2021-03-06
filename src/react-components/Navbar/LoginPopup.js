import React, { Component } from 'react';
import Popup from './Popup';

export default class LoginPopup extends Component {
  constructor( props ) {
    super( props );
    this.state = {query: ''}
    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleChange(e) {
    this.setState({
      query: e.target.value
    })
  }

  _handleSubmit(e) {
    e.preventDefault();
    const query = this.state.query;
  }
  render() {
    return(
      <Popup {...this.props} classname="login-popup">



         <form action="/action_page.php" onSubmit={this._handleSubmit}>
         <section>
           <h1 className="signin-title">Sign into Planet Properties</h1>
           <button className="login-facebook">Login with facebook</button>
           <button className="login-Google">Login with Google</button>
         </section>


            <div className="container">
              <label><b>Username</b></label>
              <input type="text" placeholder="Enter Username" value={this.state.query} onChange={this._handleChange}/>

              <label><b>Password</b></label>
              <input type="password" placeholder="Enter Password" value={this.state.query} onChange={this._handleChange}/>

              <button type="submit">Login</button>
              <input type="checkbox" checked="checked" value={this.state.query} onChange={this._handleChange}/>
            </div>

            <div className="container">
              <button type="button" className="cancelbtn">Cancel</button>
              <span className="psw">Forgot <a href="#">password?</a></span>
            </div>
          </form>


      </Popup>
    );

  }

}
