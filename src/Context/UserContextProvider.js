import React, { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children})=>{
    const [user,setUser] = useState(null)

    // const data = {
    //     user :user,
    //     setUser :setUser
    // }
    return(
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;

// create context api step 2
