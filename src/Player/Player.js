
import { useState } from 'react';
import * as _ from 'lodash';

import './Player.css'

function Player(props) {

    const [shuffleCount, setShuffleCount] = useState(0)
    const [playerColor, setPlayerColor] = useState(getNewColor())
    
    function getNewColor() {
        const pallette = _.range(3).map(i =>(Math.random()*255).toFixed(0))
        return "rgb(" + pallette.join(',') + ")"
    }

    function handleNewPlayerColor() {
        setPlayerColor(getNewColor())
    }

    return (
        <div className="Player">
            <h1>My name is <span style={{color: playerColor}}>{props.name}</span></h1>
            <button
                className="cardButton"
                onClick={handleNewPlayerColor}>
                Change my name color
            </button>
            <p>I play {props.position} for the {props.team}</p>
            <p>I hit {props.batting_avg} last season.</p>
            <button
                className="cardButton"
                onClick={() => props.click([props.id], setShuffleCount(shuffleCount + 1))}>
                Shuffle My Average
            </button>
            <p>My average has been shuffled {shuffleCount} time{shuffleCount === 1 ? '' : 's'}.</p>
            <p><i>{props.children}</i></p>
            {/* TODO button for blurb */}
            {/* <span>
                Add blurb:
                <input type="text" style={{margin: "5px"}}/>
            </span> */}
        </div>
    )
}

export default Player;