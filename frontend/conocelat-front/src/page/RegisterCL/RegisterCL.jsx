import React, { useContext, useEffect } from 'react'
import "./RegisterCL.css"
import { UserContext } from '../../context/userContext';
import { userRegister } from '../../helpers/userRegister';
import { startCreatingUserWithEmailPassword } from '../../store/auth/thunk';

import { useDispatch} from "react-redux";

export const RegisterCL = () => {
  const dispatch = useDispatch();
  const {
    setRegister,
    errors, 
    setErrors,
    setIsSubmitted,
    formData, 
    setFormData,
    isSubmitted,
    register
  } = useContext(UserContext);

  const clearData={
    userName:"",
    userLastName:"",
    userEmail: "", 
    userPassword: "", 
    confirmPassword: ""
  }

  useEffect(() => {
    const newErrors = {};
    if(!formData.userName){
      newErrors.userName = "El nombre es requerido";
    }
    if(!formData.userLastName){
      newErrors.userLastName = "El apellido es requerido";
    }
    if (!formData.userEmail) {
      newErrors.userEmail = "El correo electrónico es requerido";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.userEmail)) {
      newErrors.userEmail = "Correo electrónico inválido";
    }
    if (!formData.userPassword) {
      newErrors.userPassword = "La contraseña es requerida";
    } else if (formData.userPassword.length < 6) {
      newErrors.userPassword = "La contraseña debe tener al menos 6 caracteres";
    }
    if (formData.confirmPassword !== formData.userPassword) {
      newErrors.confirmPassword = "Las contraseñas no coinciden";
    }
    setErrors(newErrors);
  }, [formData]);

  const handleButtom = () => {
    setRegister(false);
    setFormData(clearData);
    setErrors({});
    setIsSubmitted(false);
    console.log("gracias");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    if (Object.keys(errors).every((key) => !errors[key])) {
      // const userDate = {
      //   id: formData.email,
      //   email: formData.email,
      //   passwords: formData.passwords,
      // };
      dispatch(startCreatingUserWithEmailPassword({formData,clearData,setFormData,setErrors,setIsSubmitted,setRegister}));
      // userRegister(userDate)
      //   .then((resp) => {
      //     setFormData(clearData);
      //     setErrors({});
      //     setIsSubmitted(false);
      //     alert("Guardado satisfactoriamente");
      //   })
      //   .catch((err) => {
      //     console.log(err.message);
      //   });
    }
  };

  return (
    <div
    style={{ display: register ? "block" : "none" }}
    className="form-container"
    >
      <div className="form-data-container">
        <div className="form-data">
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
                    Nombre:
                  </label>
                  <input
                    className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${
                            isSubmitted && errors.userName
                                ? "border-red-500"
                                : "border-gray-200"
                    } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}

                    id="grid-password"
                    type="text"
                    placeholder="Nombre de usuario"
                    name="userName"
                    value={formData.userName}
                    onChange={(event) =>
                      setFormData((prevData) => ({
                        ...prevData,
                        userName: event.target.value,
                      }))
                    }
                  />
                  {
                    isSubmitted && errors.userName && (
                      <p className="data-errors">{errors.userName}</p>
                    )
                  }
              </div>

              <div className="px-3 -mx-3 mb-6">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Apellido:
                  </label>
                  <input
                    className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${
                            isSubmitted && errors.userLastName
                                ? "border-red-500"
                                : "border-gray-200"
                    } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                    id="grid-password"
                    type="text"
                    placeholder="Apellido de usuario"
                    name="userLastName"
                    value={formData.userLastName}
                    onChange={(event) =>
                      setFormData((prevData) => ({
                        ...prevData,
                        userLastName: event.target.value,
                      }))
                    }
                  />
                  {
                    isSubmitted && errors.userLastName && (
                      <p className="data-errors">{errors.userLastName}</p>
                    )
                  }
              </div>

              <div className="px-3 -mx-3 mb-6">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Email:
                </label>
                <input
                  className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${
                    isSubmitted && errors.userEmail
                      ? "border-red-500"
                      : "border-gray-200"
                  } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                  id="grid-password"
                  type="email"
                  placeholder="conocelat@gmail.com"
                  name="userEmail"
                  value={formData.userEmail}
                  onChange={(event) =>
                    setFormData((prevData) => ({
                      ...prevData,
                      userEmail: event.target.value,
                    }))
                  }
                />
                {isSubmitted && errors.userEmail && (
                  <p className="data-errors">{errors.userEmail}</p>
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
                    isSubmitted && errors.userPassword
                      ? "border-red-500"
                      : "border-gray-200"
                  } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                  id="grid-password"
                  type="password"
                  placeholder="******************"
                  name="userPassword"
                  value={formData.userPassword}
                  onChange={(event) =>
                    setFormData((prevData) => ({
                      ...prevData,
                      userPassword: event.target.value,
                    }))
                  }
                />
                {isSubmitted && errors.userPassword && (
                  <p className="data-errors">{errors.userPassword}</p>
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

  )
}
