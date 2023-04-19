import { loginUser } from "../../api/loginUser";
import { registerUser } from "../../api/registerUser";
import { login, logout } from "./authSlice";

export const startCreatingUserWithEmailPassword = (dataForm) => {
    return async (dispatch) => {
      const {formData,clearData,setFormData,setErrors,setIsSubmitted,setRegister}=dataForm;
      const {confirmPassword,...formularData}= formData;
      const data=await registerUser(formularData);
      setFormData(clearData);
      setErrors({});
      setIsSubmitted(false);
      setRegister(false);
      alert("Guardado satisfactoriamente");
      console.log("ccama formulario",data)
    };
};
export const startLoginWithEmailPassword = (data) => {
    return async (dispatch) => {
      try {
        const {formDataLogin,setLoginUser,newErrorLogin,setErrorsLogin} =data;
        console.log("charo",data)
        const datasLogin={email:formDataLogin.emailLogin,password:formDataLogin.passwordsLogin};
        const respData = await loginUser(datasLogin);
        console.log("tonto+",datasLogin)
        if(formDataLogin.emailLogin===""||formDataLogin.passwordsLogin==="" ){
          newErrorLogin.passwordsLogin="Ingrese porfavor ceredenciales";
          setErrorsLogin(newErrorLogin)
        }
        else if(respData===undefined){
          console.log("tonto")
          newErrorLogin.passwordsLogin="Ingrese credenciales validas";
          setErrorsLogin(newErrorLogin)
        }
        const {token,dataUser}=respData;
        const {name,last_name,sub,user_id}=dataUser;
        const reponseUser={
          status:"authenticated",
          userId:user_id,
          roleName:dataUser.authorities[0].authority,
          userName:name,
          userLastName:last_name,
          userEmail:sub,
        }
        dispatch(login(reponseUser));
        setLoginUser(false)
        console.log("token",dataUser)
      } catch (error) {
        console.log(error)
      }
    }
}

export const startLogout = () => {
  return async (dispatch) => {
    // await logoutFirebase();
    // dispatch(clearNotesLogout());
    dispatch(logout({}));
    localStorage.removeItem("token");
  };
};