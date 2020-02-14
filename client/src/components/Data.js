import React from 'react';
import axios from 'axios';
import Input from './Input';

class Data extends React.Component {
  state = {
    players: []
  };

  componentDidMount() {
    axios.get('http://localhost:5000/api/players')
          .then( res => {
            this.setState({
              players: res.data
            });
            console.log(this.state.players);
          });
  }

  render(){
    return(
      <section>
        <h2>Top 100 Searched For</h2>
        <Input />
        <div>
          {this.state.players.map( player => {
            return(
              <h3 key={player.id}>{player.name}</h3>
            );
          })}
        </div>
      </section>
    );
  }
}

export default Data;
