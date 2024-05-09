import { useState } from "react"

export default function Team() {

    const [teamCount, setTeamCount] = useState(11)

    const addPlayers=()=>{
        const newTeamCount=teamCount+1;
        setTeamCount(newTeamCount)
    }
    const removePlayers=()=>{
        const newTeamCount=teamCount-1;
        setTeamCount(newTeamCount)
    }

    const teamStyle = {
        border: '2px solid purple',
        margin: '15px',
        padding: '15px',
        borderRadius: '15px'
    }
    return (
        <div style={teamStyle}>
            <h3>Players : {teamCount}</h3>
            <button onClick={addPlayers}>Add</button>
            <button onClick={removePlayers}>Remove</button>
        </div>
    )
}