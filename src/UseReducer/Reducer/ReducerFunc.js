import React from 'react'



const ReducerFunc = (state, action)=>{
   if(action.type === "INCREMENT"){
    return state+1
   }
   if(action.type === "DECREMENT"){
    return state-1
   }
}

export default ReducerFunc