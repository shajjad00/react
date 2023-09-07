import { useState } from "react"

export default function Counter(){
    const [playerCount, setPlayerCCount]=useState(11)

    const handleAdd =()=>{
        const newPlayer = playerCount+1;
        setPlayerCCount(newPlayer);
    }
    const handleRemove =()=>{
        const removePlayer = playerCount-1;
        setPlayerCCount(removePlayer)
    }
    const style ={
        border: '2px solid purple',
        margin: '25px',
        padding: '15px',
        borderRadius: '10px'
    }
    return(
        <div style={style}>
            <h3>Players: {playerCount}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleRemove}>Remove</button>
        </div>
    )
}