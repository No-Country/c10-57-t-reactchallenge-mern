import { useState } from "react"
import { UserContext } from "./userContext";

export const UserProvider = ({children}) => {
  const [register,setRegister]=useState(false);
  const [start,setStart]=useState(true);
  return (
    <UserContext.Provider value={{register,setRegister,start,setStart}}>
        {children}
    </UserContext.Provider>
  )
}
