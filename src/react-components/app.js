import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import HomePage from './HomePage';


class App extends React.Component {
  constructor() {
    super();
  }


  render(){
    return(
      <div className="content">
				<img src="http://d2ouvy59p0dg6k.cloudfront.net/img/bjorn_holland_getty__567596.jpg" className="content"/>
				<div className="wrapper">
					<HomePage />
				</div>
			</div>
    );
  }
}




ReactDOM.render(<App/>, document.getElementById('root'));
