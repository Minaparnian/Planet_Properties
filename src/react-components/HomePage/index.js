import React, { Component } from 'react';


export default class HomePage extends Component {
  render() {
    return(
      <section>
        <header>
        <ul className="navigation">
           <li className="left"><a href="#">Planet Repositories</a></li>
           <li className="right"><a href="#">SignUp</a></li>
           <li className="right"><a href="#">SignIn</a></li>
        </ul>
        </header>
        <section className="main">

         <h1 className="title">We are specialist to sell the Planets</h1>
         <div className="search-box-container">
           <div className="search-box-content">
            <form method="post">
             <input placeholder="Search by name"/>
             <button>Search</button>
            </form>
           </div>
         </div>

        </section>
      </section>

    );
  }
}
