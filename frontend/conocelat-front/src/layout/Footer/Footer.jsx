import logo from "../../assets/logo.svg"
import { FiFacebook, FiInstagram, FiYoutube } from "react-icons/fi"
import './Footer.css'

export const Footer = () => {
    return (
        <footer className="footer-container bg-slate-500 px-4 py-4 flex md:items-center justify-between space-y-0 px-8">
            <div className="flex justify-center md:justify-end space-x-4">
                <img src={logo} alt="logo" />
                <p className="text-white">© 2023 Copyright</p>
            </div>
            <ul className="flex justify-center gap-6 md:gap-8">
                <li><a href="#"><FiFacebook className="footer-icon" /></a></li>
                <li><a href="#"><FiInstagram className="footer-icon" /></a></li>
                <li><a href="#"><FiYoutube className="footer-icon" /></a></li>
            </ul>
        </footer>

    )
}