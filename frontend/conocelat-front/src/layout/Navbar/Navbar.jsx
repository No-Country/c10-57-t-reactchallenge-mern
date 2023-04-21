import logo from "../../assets/logo.svg";
import { BiMenu } from "react-icons/bi";
import { RiCloseFill } from "react-icons/ri";
import "./Navbar.css";
import { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import { menuHome } from "../../helpers/menuHome";
import categories from "../../data/categories.json";
import { useDispatch, useSelector } from "react-redux";
import { startLogout } from "../../store/auth/thunk";

export const Navbar = () => {
  const dispatch = useDispatch();
  const {
    setRegister,
    setLoginUser,
    userExists,
    setFormData,
    setErrors,
    setIsSubmitted,
    setFormDataLogin,
    setErrorsLogin,
    setIsSubmittedLogin,
  } = useContext(UserContext);
  const [menu, setMenu] = useState(false);
  const [userData, setUserDataChange] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const clearData={
    userName:"",
    userLastName:"",
    userEmail: "", 
    userPassword: "", 
    confirmPassword: ""
  }
  const dataUser = useSelector((state) => state.auth);
  
  const handleClick = () => {
    setMenu(!menu);
  };

  const handleCloseMenu = () => {
    setMenu(false);
  };

  const handleRegister = (event) => {
    event.preventDefault();
    console.log("ccamaxx");
    setRegister(true);
    setLoginUser(false);

    setFormDataLogin({ emailLogin: "", passwordsLogin: "" });
    setErrorsLogin({});
    setIsSubmittedLogin(false);
  };
  const handleLogin = (event) => {
    event.preventDefault();
    console.log("cruxxx");
    setRegister(false);
    setLoginUser(true);

    setFormData(clearData);
    setErrors({});
    setIsSubmitted(false);
  };
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const onLogout = () => {
    //console.log("logout");
    dispatch(startLogout());
    const navigate = useNavigate();
    navigate('/', { replace: true });
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
      <div className="data__container-option md:px-8">
        <div className="data__container-logo  flex items-center ml-4 justify-between px-2 md:px-0 md:ml-0">
          <NavLink
            to="/"
            className="flex items-center"
            onClick={handleCloseMenu}
          >
            <img src={logo} alt="logo" />
            <span className="hidden navbar-link md:block md:ml-2 md:text-xl text-black">
              ConoceLat
            </span>
          </NavLink>
          <button onClick={handleClick} className="menu md:hidden">
            {menu ? <RiCloseFill /> : <BiMenu />}
          </button>
        </div>

        <ul
          className={`absolute mt-64 md:mt-0 bg-white md:bg-transparent w-full z-[-1] py-8 space-y-4 duration-500 ease-in
                                md:space-y-0 md:py-0 md:z-0 md:w-fit md:static md:flex md:items-center md:transition-none
                                ${menu ? "left-0" : "left-[-768px]"}`}
        >
          <li className="ml-8">
            <NavLink
              onClick={handleCloseMenu}
              to="/"
              className={({ isActive }) =>
                isActive ? "link-active" : "link-inactive"
              }
            >
              Inicio
            </NavLink>
          </li>
          {categories.map((data) => (
            <li className="ml-8" key={data.idCategory}>
              <NavLink
                onClick={handleCloseMenu}
                className={({ isActive }) =>
                  isActive ? "link-active" : "link-inactive"
                }
                to={`/category/${data.idCategory}`}
              >
                {data.categoryTitle}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="data__container-buttom mr-4 md:mr-0">
          <button
            className="buttom-register"
            style={{ display: dataUser.status === "not-authenticated" ? "block" : "none" }}
            onClick={handleRegister}
          >
            Registrar
          </button>
          <button
            className="butoom-login"
            style={{ display: dataUser.status === "not-authenticated" ? "block" : "none" }}
            onClick={handleLogin}
          >
            Login
          </button>
          <div
            className="relative"
            style={{ display: dataUser.status === "not-authenticated" ? "none" : "block" }}
          >
            {
              dataUser.roleName==="admin" ?(
                <div>
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
                    {dataUser.userEmail}
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
                        <div className="truncate">{dataUser.userEmail}</div>
                      </div>
                      <div
                        className="py-2 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="dropdownAvatarNameButton"
                      >
                        <NavLink
                          to="/Dashboard"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          aria-labelledby="dropdownAvatarNameButton"
                          end
                        >
                          Dashboard
                        </NavLink>
                      </div>

                      <div
                        className="py-2 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="dropdownAvatarNameButton"
                      >
                          <NavLink
                            to="/Booking"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            aria-labelledby="dropdownAvatarNameButton"
                            end
                          >
                            Reservas
                          </NavLink>
                      </div>

                      <div className="py-2 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="dropdownAvatarNameButton">
                          <a
                            href='/'
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            aria-labelledby="dropdownAvatarNameButton"
                            onClick={onLogout}
                          >
                            Cerrar sesión
                          </a>
                      </div>
                    </div>
                  )}
                </div>
              ):(
                <div>
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
                    {dataUser.userEmail}
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
                        <div className="truncate">{dataUser.userEmail}</div>
                      </div>
                      <div
                        className="py-2 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="dropdownAvatarNameButton"
                      >
                        <NavLink
                          to="/Booking"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          aria-labelledby="dropdownAvatarNameButton"
                          end
                        >
                          Reservas
                        </NavLink>
                      </div>
                      <div className="py-2 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="dropdownAvatarNameButton">
                          <a
                            href='/'
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            aria-labelledby="dropdownAvatarNameButton"
                            onClick={onLogout}
                          >
                            Cerrar sesión
                          </a>
                      </div>
                    </div>
                  )}                 
                </div>
              )
            }
          </div>

        </div>
      </div>
    </nav>
  );
};
