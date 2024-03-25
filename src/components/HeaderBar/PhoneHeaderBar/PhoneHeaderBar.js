import React from 'react';
import {Link} from "react-router-dom";
import phoneHeaderStyle from "./PhoneHeaderBarStyle.css"



function PhoneHeaderBar() {

    //TODO MUST BECOME AN INPUT
    //TODO MUST BECOME A GLOBAL VARIABLE
    const routeChange = () => {
        const path = `https://www.doctolib.fr/infirmier/puteaux/anne-chir/booking/places?specialityId=30&telehealth=false&profile_skipped=true&bookingFunnelSource=external_referral`;
        window.open(path, "_blank");
    }

    return (
        <header id = "headerBar-l">
            <div id="titre-header-l">
                <h2>
                    Cabinet infirmier
                </h2>
                <h3 >
                    Anne Chir
                </h3>
                <h3 >
                    Dominique Fernandez
                </h3>
                <h4>
                    Puteaux, Rueil
                </h4>
            </div>
            <div id="nav-menu-l">
                <nav>
                    <ul>
                        <li>
                            <Link class="l" to="/">Accueil</Link>
                        </li>
                        <li>
                            <Link class="l" to="/nurseinformation">Les infirmiers</Link>
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
            <div>
                <button id="header-button-l" onClick={routeChange}>
                    Prendre rendez-vous
                </button>
            </div>
        </header>
    );
}

export default PhoneHeaderBar;
