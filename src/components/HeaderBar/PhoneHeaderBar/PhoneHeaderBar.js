import React, {useState} from 'react';
import {Link} from "react-router-dom";
import phoneHeaderStyle from "./PhoneHeaderBarStyle.css"
import w3c from 'font-awesome/css/font-awesome.min.css';

function PhoneHeaderBar() {

    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    console.log("phone");

    //TODO MUST BECOME AN INPUT
    //TODO MUST BECOME A GLOBAL VARIABLE
    const routeChange = () => {
        const path = `https://www.doctolib.fr/infirmier/puteaux/anne-chir/booking/places?specialityId=30&telehealth=false&profile_skipped=true&bookingFunnelSource=external_referral`;
        window.open(path, "_blank");
    }

    return (
        <header id="main">
            <div id = "headerBar-p">
                <div>
                    <div id="titre-header-p">
                        <h2>
                            Cabinet infirmier
                        </h2>
                        <p>
                            Anne Chir, Dominique Fernandez
                        </p>
                        <p>
                            Puteaux, Rueil
                        </p>
                    </div>
                </div>
                <div id="nav-menu-p">
                    <i id="burger-menu-icon" className="fa fa-bars" onClick={toggleMenu}></i>
                </div>
            </div>
            <div id="nav-menu-p">
                <nav className={menuVisible ? "menu-visible" : "menu-hidden"}>
                    <ul>
                        <li>
                            <Link className="p" to="/">Accueil</Link>
                        </li>
                        <li>
                            <Link className="p" to="/nurseinformation">Les infirmiers</Link>
                        </li>
                        <li>
                            Les soins à domicile
                        </li>
                        <li>
                            Les soins au Cabinet
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default PhoneHeaderBar;
