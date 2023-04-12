import { useState } from "react";
import { UserContext } from "./userContext";

export const UserProvider = ({ children }) => {
  const [register, setRegister] = useState(false);
  const [loginUser, setLoginUser] = useState(false);
  const [userExists, setUserExists] = useState("");

  // form data y validation
  const [formData, setFormData] = useState({
    email: "",
    passwords: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // form data login y validation
  const [formDataLogin, setFormDataLogin] = useState({
    emailLogin: "",
    passwordsLogin: "",
  });
  const [errorsLogin, setErrorsLogin] = useState({});
  const [isSubmittedLogin, setIsSubmittedLogin] = useState(false);

  return (
    <UserContext.Provider
      value={{
        register,
        setRegister,
        loginUser,
        setLoginUser,
        userExists,
        setUserExists,
        formData,
        setFormData,
        errors,
        setErrors,
        isSubmitted,
        setIsSubmitted,
        formDataLogin, 
        setFormDataLogin,
        errorsLogin, 
        setErrorsLogin,
        isSubmittedLogin, 
        setIsSubmittedLogin
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
