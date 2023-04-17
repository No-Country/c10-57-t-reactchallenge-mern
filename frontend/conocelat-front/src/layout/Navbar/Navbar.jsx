import logo from "../../assets/logo.svg";
import { BiMenu } from "react-icons/bi";
import { RiCloseFill } from "react-icons/ri";
import "./Navbar.css";
import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import { menuHome } from "../../helpers/menuHome";

export const Navbar = () => {
  const {
    setRegister,
    setLoginUser,
    userExists,
    setFormData,
    setErrors,
    setIsSubmitted,
    setFormDataLogin,
    setErrorsLogin,
    setIsSubmittedLogin
  } = useContext(UserContext);
  const [menu, setMenu] = useState(false);
  const [userData, setUserDataChange] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleClick = () => {
    setMenu(!menu);
  };
  const handleRegister = (event) => {
    event.preventDefault();
    console.log("ccamaxx")
    setRegister(true);
    setLoginUser(false);

    setFormDataLogin({ emailLogin: "", passwordsLogin: ""});
    setErrorsLogin({});
    setIsSubmittedLogin(false);
  };
  const handleLogin = (event) => {
    event.preventDefault();
    console.log("cruxxx")
    setRegister(false);
    setLoginUser(true);

    setFormData({ email: "", passwords: "", confirmPassword: "" });
    setErrors({});
    setIsSubmitted(false);
  };
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    fetch("http://localhost:5173/users")
      .then((resp) => {
        return resp.json();
      })
      .then((resp) => {
        setUserDataChange(resp);
      })
      .catch((err) => {
        console.log("errorss", err.message);
      });
  });

  return (
    <nav className="data-container navbar-container shadow w-full top-0 left-0">
      <div className="data__container-option  md:flex items-center justify-between  px-4 py-4 md:px-8">
        <div className="data__container-logo  flex items-center justify-between px-2 md:px-0">
          <a to="/" className="flex items-center">
            <img src={logo} alt="logo" />
            <span className="hidden navbar-link md:block md:ml-2 md:text-xl text-black">
              ConoceLat
            </span>
          </a>
          <button onClick={handleClick} className="menu md:hidden">
            {menu ? <RiCloseFill /> : <BiMenu />}
          </button>
        </div>

        <ul className="data__container-menu">
          {
            // menu de header
            menuHome.map((item,index)=>(
              <NavLink
                to={item.path}
                key={index}
                className="ml-8 navbar-link text-black"
                end
              >
                <div>{item.name}</div>
              </NavLink>
            ))
          }
        </ul>
        <div className="data__container-buttom">
          <button className="buttom-register" style={{ display: userExists === "" ? "block" : "none" }} onClick={handleRegister}>
            Registrar
          </button>
          <button
            className="butoom-login"
            style={{ display: userExists === "" ? "block" : "none" }}
            onClick={handleLogin}
          >
            Login
          </button>
          <div
            className="relative"
            style={{ display: userExists === "" ? "none" : "block" }}
          >
            <button
              id="dropdownAvatarNameButton"
              data-dropdown-toggle="dropdownAvatarName"
              className="flex items-center text-sm font-medium text-gray-900 rounded-full hover:text-blue-600 dark:hover:text-blue-500 md:mr-0 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-blsck"
              type="button"
              onClick={toggleDropdown}
            >
              <span className="sr-only">Open user menu</span>
              <img
                className="w-8 h-8 mr-2 rounded-full"
                src={logo}
                alt="user photo"
              />
              {userExists}
              <svg
                className="w-4 h-4 mx-1.5"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
            {isDropdownOpen && (
              <div
                id="dropdownAvatarName"
                className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 absolute right-0 top-full mt-3"
              >
                <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                  <div className="font-medium ">Correo</div>
                  <div className="truncate">{userExists}</div>
                </div>
                <div className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownAvatarNameButton">
                    <NavLink
                      to='/Dashboard'
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      aria-labelledby="dropdownAvatarNameButton"
                      end
                    >
                      Dashboard
                    </NavLink>
                </div>
                <div className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownAvatarNameButton">
                    <NavLink
                      to='/login'
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      aria-labelledby="dropdownAvatarNameButton"
                      end
                    >
                      Settings
                    </NavLink>
                </div>
                <div className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownAvatarNameButton">
                    <NavLink
                      to='/login'
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      aria-labelledby="dropdownAvatarNameButton"
                      end
                    >
                      Cerrar session
                    </NavLink>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
