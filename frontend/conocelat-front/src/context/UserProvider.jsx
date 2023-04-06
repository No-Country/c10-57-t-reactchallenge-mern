import { useState } from "react"
import { UserContext } from "./userContext";

export const UserProvider = ({children}) => {
  const [register,setRegister]=useState(false);
  const [loginUser,setLoginUser]=useState(false)
  const [userExists,setUserExists]=useState("")
  return (
    <UserContext.Provider value={{register,setRegister,loginUser,setLoginUser,userExists,setUserExists}}>
        {children}
    </UserContext.Provider>
  )
}
