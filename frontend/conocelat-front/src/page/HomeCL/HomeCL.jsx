import React, { useContext, useState } from "react";
import "./HomeCL.css";
import { UserContext } from "../../context/userContext";
// import { UserContext } from '../../context/userContext';
import banner from "../../assets/bannerStart.svg";
import Grilla from "../../components/Home/Grilla";
import { FilterData } from "../../components/Home/FilterData/FilterData";
import { Search } from "../../components/Search/Search";

export const HomeCL = () => {
  const {
    register,
    setRegister,
    loginUser,
    setLoginUser,
    userExists,
    setUserExists,
  } = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [passwords, setPasswords] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setloginPassword] = useState("");

  // const [isOpen, setIsOpen] = useState(true);
  // const [isOpen2, setIsOpen2] = useState(true);
  const handleButtom = () => {
    setRegister(false);
    console.log("gracias");
  };
  const handleButtomLogin = () => {
    setLoginUser(false);
    console.log("login");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const userDate = { id: email, email, passwords };
    fetch("http://localhost:5173/users", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(userDate),
    })
      .then((resp) => {
        alert("Guardado satisfactoriamente");
      })
      .catch((err) => {
        console.log(err.message);
      });
    console.log({ email, passwords });
  };
  const handleLogin = (e) => {
    e.preventDefault();
    if (validate()) {
      fetch("http://localhost:5173/users/" + loginEmail)
        .then((resp) => {
          return resp.json();
        })
        .then((resp) => {
          console.log(resp);
          if (Object.keys(resp).length === 0) {
            console.log("Please ingrse un usuario valido");
          } else {
            if (resp.passwords === loginPassword) {
              // setUserExists(id)
              console.log("Ingrese correctamente", resp);
              setUserExists(resp.id);
            } else {
              console.log("Porfavor ingrese crendenciales validas");
            }
          }
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };
  const validate = () => {
    let result = true;
    if (loginEmail === "" || loginEmail === null) {
      result = false;
    }
    if (loginPassword === "" || loginPassword === null) {
      result = false;
    }
    return result;
  };

  return (
    <div className="start-container">
      <div className="start__container-data">
        <div className="data__start">
          <img className="data__image" src={banner} alt="banner vacio" />
        </div>
        <div>
          <div className="container mx-auto p-4 md:flex md:justify-center md:p-8">
            <Search />
          </div>
          <FilterData />
        </div>
        <h3 className="titulo-home">Nuestros recomendados</h3>
        <Grilla />
        <h2 className="lema-home">Latinoamérica, un mundo por descubrir</h2>
      </div>

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
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-password"
                    type="email"
                    placeholder="conocelat@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
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
                    value={passwords}
                    onChange={(e) => setPasswords(e.target.value)}
                  />
                </div>
                <div className="px-3 -mx-3 mb-6">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Confirmar Contrasena:
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-password"
                    type="password"
                    placeholder="******************"
                  />
                </div>
                <div>
                  <div className="md:w-1/3"></div>
                  <div className="md:w-2/3 register-butoom">
                    <button
                      className="w-full shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
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
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                  />
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
                    value={loginPassword}
                    onChange={(e) => setloginPassword(e.target.value)}
                  />
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
