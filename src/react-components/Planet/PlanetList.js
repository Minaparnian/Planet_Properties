import React, { Componet } from 'react';
import PlanetItem from './PlanetItem';


export default class PlanetList extends Component {
  render(){
    return(
      <section className="planet-all">
      /**
        <PlanetItem
          id = {this.props.PlanetList[0].id}
          name = {this.props.PlanetList[0].name}
          media = {this.props.PlanetList[0].media}
        />
        <PlanetItem
          id = {this.props.PlanetList[1].id}
          name = {this.props.PlanetList[1].name}
          media = {this.props.PlanetList[1].media}
        />
        <PlanetItem
          id = {this.props.PlanetList[2].id}
          name = {this.props.PlanetList[2].name}
          media = {this.props.PlanetList[2].media}
        />
        <PlanetItem
          id = {this.props.PlanetList[3].id}
          name = {this.props.PlanetList[3].name}
          media = {this.props.PlanetList[3].media}
        />
        <PlanetItem
          id = {this.props.PlanetList[4].id}
          name = {this.props.PlanetList[4].name}
          media = {this.props.PlanetList[4].media}
        />
        <PlanetItem
          id = {this.props.PlanetList[5].id}
          name = {this.props.PlanetList[5].name}
          media = {this.props.PlanetList[5].media}
        />
        <PlanetItem
          id = {this.props.PlanetList[6].id}
          name = {this.props.PlanetList[6].name}
          media = {this.props.PlanetList[6].media}
        />
        <PlanetItem
          id = {this.props.PlanetList[7].id}
          name = {this.props.PlanetList[7].name}
          media = {this.props.PlanetList[7].media}
        />
        They are the same but below code much clear*/

        {
          this.props.PlanetList.map(function(item, idx) {
              return <PlanetItem key={idx} {...item}/>
          })
        }
      </section>
    );

  }

}
