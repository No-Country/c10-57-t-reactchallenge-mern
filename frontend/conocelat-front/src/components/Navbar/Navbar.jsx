import logo from "../../assets/logo.svg"
import { BiMenu } from "react-icons/bi"
import { RiCloseFill } from "react-icons/ri"
import './Navbar.css'
import { useState } from "react"

export const Navbar = () => {
    const [menu, setMenu] = useState(false)

    const handleClick = () => {
        setMenu(!menu)
    }

    return (
        <nav className="shadow w-full top-0 left-0">
            <div className="md:flex items-center justify-between bg-black px-4 py-4 md:px-8">
                <div className="flex items-center justify-between px-4 md:px-0">
                    <a to="/" className="flex items-center">
                        <img src={logo} alt="logo" />
                        <span className="hidden navbar-link md:block md:ml-2 md:text-xl">ConoceLat</span>
                    </a>
                    <button onClick={handleClick} className="menu md:hidden">
                        {
                            menu
                                ? <RiCloseFill />
                                : <BiMenu />
                        }
                    </button>
                </div>
                <ul className="md:flex items-center">
                    <li className="ml-8 "><a className="navbar-link" href="#">Inicio</a></li>
                    <li className="ml-8"><a className="navbar-link" href="#">Category 1</a></li>
                    <li className="ml-8"><a className="navbar-link" href="#">Category 2</a></li>
                    <li className="ml-8"><a className="navbar-link" href="#">Category 3</a></li>
                </ul>
            </div>
        </nav>
    )
}