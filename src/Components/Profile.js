import React,{useContext} from 'react'
import userContext from '../Context/UserContext'


export default function Profile() {
    const {user} = useContext(userContext )

    if(!user) return <h2>please login</h2>
    
    return <h1>welcome{user.username}</h1>
}
