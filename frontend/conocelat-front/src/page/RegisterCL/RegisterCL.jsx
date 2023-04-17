import React, { useContext, useEffect } from 'react'
import "./RegisterCL.css"
import { UserContext } from '../../context/userContext';
import { userRegister } from '../../helpers/userRegister';
export const RegisterCL = () => {
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

  )
}
