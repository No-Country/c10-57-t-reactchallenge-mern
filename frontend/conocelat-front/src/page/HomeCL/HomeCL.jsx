import React, { useContext, useEffect, useState } from "react";
import "./HomeCL.css";
import { UserContext } from "../../context/userContext";
// import { UserContext } from '../../context/userContext';
import banner from "../../assets/bannerStart.svg";
import Grilla from "../../components/Home/Grilla";
import { Search } from "../../components/Home/Search";
import { userRegister } from "../../helpers/userRegister";

export const HomeCL = () => {
  const {
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

  } = useContext(UserContext);

  // const [formData, setFormData] = useState({
  //   email: "",
  //   passwords: "",
  //   confirmPassword: "",
  // });
  // const [errors, setErrors] = useState({});
  // const [isSubmitted, setIsSubmitted] = useState(false);

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setloginPassword] = useState("");

  useEffect(() => {
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = "El correo electrónico es requerido";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Correo electrónico inválido";
    }
    if (!formData.passwords) {
      newErrors.passwords = "La contraseña es requerida";
    } else if (formData.passwords.length < 6) {
      newErrors.passwords = "La contraseña debe tener al menos 6 caracteres";
    }
    if (formData.confirmPassword !== formData.passwords) {
      newErrors.confirmPassword = "Las contraseñas no coinciden";
    }
    setErrors(newErrors);
  }, [formData]);

  const handleButtom = () => {
    setRegister(false);
    setFormData({ email: "", passwords: "", confirmPassword: "" });
    setErrors({});
    setIsSubmitted(false);
    console.log("gracias");
  };

  const handleButtomLogin = () => {
    setFormDataLogin({ emailLogin: "", passwordsLogin: ""});
    setErrorsLogin({});
    setIsSubmittedLogin(false);
    setLoginUser(false);
    console.log("login");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    if (Object.keys(errors).every((key) => !errors[key])) {
      const userDate = {
        id: formData.email,
        email: formData.email,
        passwords: formData.passwords,
      };
      userRegister(userDate)
        .then((resp) => {
          setFormData({ email: "", passwords: "", confirmPassword: "" });
          setErrors({});
          setIsSubmitted(false);
          alert("Guardado satisfactoriamente");
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };
  const handleLogin = (e) => {
    console.log("ccamaaa")
    e.preventDefault();
    setIsSubmittedLogin(true);
    const newErrorLogin = {};
    if (validate()) {
      fetch("http://localhost:5173/users/" + formDataLogin.emailLogin)
        .then((resp) => {
          return resp.json();
        })
        .then((resp) => {
          console.log(resp);
          if (Object.keys(resp).length === 0) {
            newErrorLogin.emailLogin="Ingrese un email valido"
            console.log("Please ingrese un usuario valido");
          } else {
            if (resp.passwords === formDataLogin.passwordsLogin) {
              console.log("Ingresocorrectamente", resp);
              setUserExists(resp.id);
              // cerrar ventana de login
              setLoginUser(false);
            } else {
              newErrorLogin.passwordsLogin="Ingrese credenciales validas"
              console.log("Porfavor ingrese crendenciales validas");
            }
          }
          setErrorsLogin(newErrorLogin);
          console.log("ccamacccc")
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };
  const validate = () => {
    const newErrorLogin = {};
    let result = true;
    if (formDataLogin.emailLogin === "" || formDataLogin.emailLogin === null) {
      result = false;
      newErrorLogin.emailLogin="No ingreso el email"
    }
    if (formDataLogin.passwordsLogin === "" || formDataLogin.passwordsLogin === null) {
      result = false;
      newErrorLogin.passwordsLogin="No ingreso el password"
    }
    setErrorsLogin(newErrorLogin);
    return result;
  };

  return (
    <div className="start-container">
      <div className="start__container-data">
        <div className="data__start">
          <img className="data__image" src={banner} alt="banner vacio" />
        </div>
        <Search/>
        <h3 className="titulo-home">Nuestros recomendados</h3>
        <Grilla />
        <h2 className="lema-home">Latinoamérica, un mundo por descubrir</h2>
      </div>

      <div
        style={{ display: register ? "block" : "none" }}
        className="form-container"
      >
        <div className="form-data-container">
          <div className={`form-data`}>
            <div className="form_data-title">
              <p className="data-title">Registro de usuario</p>
              <button
                className="top-0 right-0 close text-gray-500 hover:text-gray-600"
                onClick={handleButtom}
              >
                X
              </button>
            </div>
            <div className="form_data-body">
              <form className="w-full max-w-lg" onSubmit={handleSubmit}>
                <div className="px-3 -mx-3 mb-6">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Email:
                  </label>
                  <input
                    className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${
                      isSubmitted && errors.email
                        ? "border-red-500"
                        : "border-gray-200"
                    } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                    id="grid-password"
                    type="email"
                    placeholder="conocelat@gmail.com"
                    name="email"
                    value={formData.email}
                    onChange={(event) =>
                      setFormData((prevData) => ({
                        ...prevData,
                        email: event.target.value,
                      }))
                    }
                  />
                  {isSubmitted && errors.email && (
                    <p className="data-errors">{errors.email}</p>
                  )}
                </div>
                <div className="px-3 -mx-3 mb-6">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Contrasena:
                  </label>
                  <input
                    className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${
                      isSubmitted && errors.passwords
                        ? "border-red-500"
                        : "border-gray-200"
                    } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                    id="grid-password"
                    type="password"
                    placeholder="******************"
                    name="passwords"
                    value={formData.passwords}
                    onChange={(event) =>
                      setFormData((prevData) => ({
                        ...prevData,
                        passwords: event.target.value,
                      }))
                    }
                  />
                  {isSubmitted && errors.passwords && (
                    <p className="data-errors">{errors.passwords}</p>
                  )}
                </div>
                <div className="px-3 -mx-3 mb-6">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Confirmar Contrasena:
                  </label>
                  <input
                    className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${
                      isSubmitted && errors.confirmPassword
                        ? "border-red-500"
                        : "border-gray-200"
                    } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                    id="grid-password"
                    type="password"
                    placeholder="******************"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={(event) =>
                      setFormData((prevData) => ({
                        ...prevData,
                        confirmPassword: event.target.value,
                      }))
                    }
                  />
                  {isSubmitted && errors.confirmPassword && (
                    <p className="data-errors">{errors.confirmPassword}</p>
                  )}
                </div>
                <div>
                  <div className="md:w-1/3"></div>
                  <div className="md:w-2/3 register-butoom">
                    <button
                      className="w-full shadow button-data"
                      type="submit"
                    >
                      Registrar
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{ display: loginUser ? "block" : "none" }}
        className="form-container"
      >
        <div className="form-data-container">
          <div className="form-data-login">
            <div className="form_data-title-login">
              <p className="data-title">Inicio de seccion</p>
              <button
                className="top-0 right-0 close text-gray-500 hover:text-gray-600"
                onClick={handleButtomLogin}
              >
                X
              </button>
            </div>
            <div className="form_data-body-login">
              <form className="w-full max-w-lg" onSubmit={handleLogin}>
                <div className="px-3 -mx-3 mb-6">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Email:
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-password"
                    type="email"
                    placeholder="conocelat@gmail.com"
                    name="emailLogin"
                    value={formDataLogin.emailLogin}
                    onChange={(event) =>
                      setFormDataLogin((prevData) => ({
                        ...prevData,
                        emailLogin: event.target.value,
                      }))
                    }
                  />
                  {isSubmittedLogin && errorsLogin.emailLogin && (
                    <p className="data-errors">{errorsLogin.emailLogin}</p>
                  )}
                </div>
                <div className="px-3 -mx-3 mb-6">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Contrasena:
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-password"
                    type="password"
                    placeholder="******************"
                    name="passwordsLogin"
                    value={formDataLogin.passwordsLogin}
                    onChange={(event) =>
                      setFormDataLogin((prevData) => ({
                        ...prevData,
                        passwordsLogin: event.target.value,
                      }))
                    }
                  />
                  {isSubmittedLogin && errorsLogin.passwordsLogin && (
                    <p className="data-errors">{errorsLogin.passwordsLogin}</p>
                  )}
                </div>
                <div>
                  <div className="md:w-1/3"></div>
                  <div className="md:w-2/3 register-butoom">
                    <button
                      className="w-full shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                      type="submit"
                    >
                      Ingresar
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
