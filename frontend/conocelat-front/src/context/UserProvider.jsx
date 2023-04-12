import { useState } from "react";
import { UserContext } from "./userContext";

export const UserProvider = ({ children }) => {
  const [register, setRegister] = useState(false);
  const [loginUser, setLoginUser] = useState(false);
  const [userExists, setUserExists] = useState("");
  const [state, setState] = useState(undefined);
  const [userChoice, setUserChoice] = useState("");
  const [filter, setFilter] = useState(undefined);

  return (
    <UserContext.Provider
      value={{
        register,
        setRegister,
        loginUser,
        setLoginUser,
        userExists,
        setUserExists,
        state,
        setState,
        userChoice,
        setUserChoice,
        filter,
        setFilter,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
