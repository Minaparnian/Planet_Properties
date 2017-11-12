import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import HomePage from './HomePage';
import Navbar from './Navbar';
import Form from './Form';



class App extends React.Component {
  constructor() {
    super();
  }


  render(){
    return(
      <section>
        <Navbar />
        <Form />
  		  <HomePage />
      </section>

    );
  }
}




ReactDOM.render(<App/>, document.getElementById('root'));
