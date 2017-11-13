import React, { Component } from 'react';

export default class PopupPlanet extends Component {
   renderPopup() {
     return(
       <section className="popup-planet">
         <section className="popup-wrap-planet">
           <img src="/img/close1.png" onClick={this.props.hidePopup}/>
         </section>
         <section className={"popup-content-planet " + this.props.style}>
           <section>{this.props.children}</section>
         </section>


       </section>

     );
   }

  render(){
    return(
      <section>
        {
          this.props.status? this.renderPopup() : null
        }
      </section>
    );
  }
}
