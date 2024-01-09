import React from 'react'
import Child from './Child'
import UserContextProvider from './Context/UserContextProvider'
import Login from './Components/Login'
import Profile from './Components/Profile'





export default function App() {
  return (
    <UserContextProvider>
       <Login/>
       <Profile/>
    </UserContextProvider>
  )
}

// create context api step 3
