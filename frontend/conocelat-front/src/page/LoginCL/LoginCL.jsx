import React, { useContext } from 'react'
import { UserContext } from '../../context/userContext';
import { useDispatch } from 'react-redux';
import { startLoginWithEmailPassword } from '../../store/auth/thunk';

export const LoginCL = () => {
  const {
    setUserExists,
    setLoginUser,
    formDataLogin,
    setFormDataLogin,
    errorsLogin,
    setErrorsLogin,
    isSubmittedLogin,
    setIsSubmittedLogin,
    loginUser,
  } = useContext(UserContext);
  const dispatch = useDispatch();

  const handleButtomLogin = () => {
    setFormDataLogin({ emailLogin: "", passwordsLogin: "" });
    setErrorsLogin({});
    setIsSubmittedLogin(false);
    setLoginUser(false);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setIsSubmittedLogin(true);
    const newErrorLogin = {};
    dispatch(startLoginWithEmailPassword({formDataLogin,setLoginUser,newErrorLogin,setErrorsLogin}));
  };

  return (
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
  );
};
