import React from 'react'
import Child from './Child'
import UserContextProvider from './Context/UserContextProvider'
import Login from './Components/Login'
import Profile from './Components/Profile'
import UseReducer from './UseReducer/UseReducer'





export default function App() {
  return (
    <UserContextProvider>
       <Login/>
       <Profile/>
       <h2>reducer</h2>
       <UseReducer/>
    </UserContextProvider>
  )
}

// create context api step 3
