import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./SmallLapTopHeaderBarStyle.css";

function SmallLapTopHeaderBar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const routeChange = () => {
        const path = `https://www.doctolib.fr/infirmier/puteaux/anne-chir/booking/places?specialityId=30&telehealth=false&profile_skipped=true&bookingFunnelSource=external_referral`;
        window.open(path, "_blank");
    };

    return (
        <header id="headerBar-s">
            <div id="titre-header-s">
                <p>Cabinet infirmier</p>
                <p>Anne Chir</p>
                <p>Dominique Fernandez</p>
                <p>Puteaux, Rueil</p>
            </div>
            <div id="nav-menu-s" className={`${menuOpen ? "open" : ""}`}>
                <div className="burger" onClick={toggleMenu}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <nav>
                    <ul>
                        <li><Link className="l" to="/">Accueil</Link></li>
                        <li><Link className="l" to="/nurseinformation">Les infirmiers</Link></li>
                        <li>Les soins à domicile</li>
                        <li>Les soins au Cabinet</li>
                    </ul>
                </nav>
            </div>
            <div>
                <button id="header-button-s" onClick={routeChange}>
                    Prendre rendez-vous
                </button>
            </div>
        </header>
    );
}

export default SmallLapTopHeaderBar;
