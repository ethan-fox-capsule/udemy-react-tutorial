
import { useState } from 'react';
import * as _ from 'lodash';

import './Player.css'

function Player(props) {

    const [shuffleCount, setShuffleCount] = useState(0)
    
    function getNewColor() {
        const pallette = _.range(3).map(i =>(Math.random()*255).toFixed(0))
        return "rgb(" + pallette.join(', ') + ")"
    }

    return (
        <div className="Player">
            <span><h1>My name is</h1><h1 style={{color: getNewColor()}}>{props.name}</h1></span>
            <p>I play {props.position} for the {props.team}</p>
            <p>I hit {props.batting_avg} last season.</p>
            <p><i>{props.children}</i></p>
            <button onClick={() => props.click([props.id], setShuffleCount(shuffleCount + 1))}>Shuffle My Average</button>
            <p>My button has been clicked {shuffleCount} time{shuffleCount === 1 ? '' : 's'}.</p>
            {/* TODO button for blurb */}
            {/* <span>
                Add blurb:
                <input type="text" style={{margin: "5px"}}/>
            </span> */}
        </div>
    )
}

export default Player;