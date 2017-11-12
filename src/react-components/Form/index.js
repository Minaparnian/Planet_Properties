import React, { Component } from 'react';

export default class Form extends Component {

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
      <section>
        <div className="cover">
          <div className="main-title-container">
             <h1 className="main-title">We are specialist to sell the planets</h1>
          </div>
          <div className="form-box">
             <form onSubmit={this._handleSubmit} className="flex-form">

                <input type="search" placeholder="Search by name of planet" value={this.state.query} onChange={this._handleChange} />
                <input type="submit" value="Search" />
             </form>
           </div>
         </div>
      </section>
    );
  }
}
