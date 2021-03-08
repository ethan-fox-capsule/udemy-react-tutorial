
import { useState } from 'react';

function Player(props) {

    const [shuffleCount, setShuffleCount] = useState(0)

    return (
        <div>
            <h1>My name is {props.name}</h1>
            <p>I play {props.position} for the {props.team}</p>
            <p>I hit {props.batting_avg} last season.</p>
            <p><i>{props.children}</i></p>
            <button onClick={() => props.click([props.id], setShuffleCount(shuffleCount + 1))}>Shuffle My Average</button>
            <p>My average has been individually shuffled {shuffleCount} time{shuffleCount === 1 ? '' : 's'}.</p>
        </div>
    )
}

export default Player;