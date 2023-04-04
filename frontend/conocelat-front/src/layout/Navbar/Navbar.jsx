import logo from "../../assets/logo.svg"
import { BiMenu } from "react-icons/bi"
import { RiCloseFill } from "react-icons/ri"
import './Navbar.css'
import { useContext, useState } from "react"
import { NavLink } from "react-router-dom"
import { UserContext } from "../../context/userContext"


export const Navbar = () => {
    const {register,setRegister} = useContext(UserContext);
    const {start,setStart}= useContext(UserContext);

    const [menu, setMenu] = useState(false)

    const handleClick = () => {
        setMenu(!menu)
    }
    const handleRegister=(event)=>{
        event.preventDefault();
        setStart(false)
        setRegister(true)
    }
    const handleStart=(event)=>{
        event.preventDefault();
        setStart(true)
        setRegister(false)
    }

    return (
        <nav className="data-container navbar-container shadow w-full top-0 left-0">
            <div className="data__container-option  md:flex items-center justify-between  px-4 py-4 md:px-8">
                <div className="data__container-logo  flex items-center justify-between px-4 md:px-0">
                    <a to="/" className="flex items-center">
                        <img src={logo} alt="logo" />
                        <span className="hidden navbar-link md:block md:ml-2 md:text-xl text-black">ConoceLat</span>
                    </a>
                    <button onClick={handleClick} className="menu md:hidden">
                        {
                            menu
                                ? <RiCloseFill />
                                : <BiMenu />
                        }
                    </button>
                </div>

                <ul className="data__container-menu md:flex items-center">
                    <li  className="ml-8">
                        <a className="navbar-link text-black" href="#register">
                            Descubrir
                        </a>
                    </li>
                    <li  className="ml-8">
                        <a className="navbar-link text-black" href="#register">
                            Actividades
                        </a>
                    </li>
                    <li  className="ml-8">
                        <a className="navbar-link text-black" href="#register">
                            Acerca
                        </a>
                    </li>
                    <li  className="ml-8">
                        <a className="navbar-link text-black" href="#register">
                            Contactos
                        </a>
                    </li>
                    {/* <li  className="ml-8">
                        <a className="navbar-link text-black" href="" onClick={handleStart}>
                            Inicio
                        </a>
                    </li>
                    <li  className="ml-8">
                        <a className="navbar-link text-black" href="#register" onClick={handleRegister}>
                            Registros
                        </a>
                    </li> */}
                    {/* <NavLink to="/login" className="ml-8 "><a className="navbar-link" href="#">Inicio de seccion</a></NavLink> */}
                    {/* <NavLink to="/register" className="ml-8"><a className="navbar-link" href="#">Registro</a></NavLink> */}
                </ul>
                <div className="data__container-buttom">
                    <button className="buttom-register" onClick={handleRegister}>Registrar</button>
                    <button className="butoom-login" onClick={handleStart}>Iniciar seccion</button>
                </div>
            </div>
        </nav>
    )
}