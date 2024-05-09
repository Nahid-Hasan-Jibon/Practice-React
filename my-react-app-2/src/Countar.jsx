import { useState } from "react"

export default function Counter(){

    const [count,setCont]=useState(0)

    const handleAdd=()=>{
        const newCount=count+1;
        setCont(newCount)
        
    }

    const handleReduce=()=>{
        const reduceCount=count-1;
        setCont(reduceCount)
    }
    return (
        <div>
            <h3>Counter : {count}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleReduce}>Reduce</button>
        </div>
    )
}