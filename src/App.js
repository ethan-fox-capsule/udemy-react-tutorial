import { useState } from 'react';

import './App.css';
import Player from './Player/Player';


function App() {

  const [players, setPlayers] = useState([{
    id: 0,
    name: "Aaron Judge",
    team: "New York Yankees",
    position: "RF",
    bavg: getBAvg(),
    blurb: "I love Pepsi!"
  }, {
    id: 1,
    name: "Jared Wexler",
    team: "Staten Island Pizza Rats",
    position: "Bat Boy",
    bavg: getBAvg()
  }, {
    id: 2,
    name: "Tito Francona",
    team: "Cleveland Spiders",
    position: "Shortstop",
    bavg: getBAvg(),
    blurb: "I enjoy long walks in the park."
  }])

  function getBAvg() {
    return Math.random().toFixed(3)
  }

  function shuffleBAvgHandler(playerIdsToUpdate) {
    setPlayers(players.map(p => {
      return playerIdsToUpdate.includes(p.id) ? {
        ...p,
        bavg: getBAvg()
      } : p
    }))
  }

  return (
    <div className="App">
      <h1>Some random player statistics</h1>
      <button onClick={() => {shuffleBAvgHandler(players.map(p => p.id))}}>Shuffle All Averages</button>
      <>
        {players.map(p =>
          <Player
            key={p.id}
            id={p.id}
            name={p.name}
            team={p.team}
            position={p.position}
            batting_avg={p.bavg}
            click={shuffleBAvgHandler}>
            {p.blurb}
          </Player>
        )}
      </>
    </div>
  );
}

export default App;
