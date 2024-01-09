import React, { useReducer, useState } from 'react'
import ReducerFunc from './Reducer/ReducerFunc'

const UseReducer = ()=>{

   // const [count, setCount] = useState(0)

    const[state,dispatch] = useReducer(ReducerFunc,0)

    return(
        <>
            <p>{state}</p>
            <div>
                <button onClick={()=>dispatch({type:"INCREMENT"})}>Inc</button>
                <button onClick={()=>dispatch({type:"DECREMENT"})}>Dec</button>
            </div>
        </>
    )

}

export default UseReducer