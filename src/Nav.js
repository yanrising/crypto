import './Nav.css';
import Logo from './Images/Logo/Coloured/profile.png'
import { useEffect, useState } from 'react';
function Nav() {

    const [show, handleShow] = useState(false);

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        }
        else {
            handleShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar)
        return () => {
            window.removeEventListener("scroll", transitionNavBar);
        }
    }, [])

    return (
        <div className={`nav ${show && `nav__black`}`}>
            <div className="Nav__logo">
               <img src={Logo} alt=""/>
               <p> Learn </p>
               <p> Prices </p>
               <p> Language </p>
            </div>
        </div>
    )
}

export default Nav
