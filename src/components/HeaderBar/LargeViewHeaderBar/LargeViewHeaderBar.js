import React from 'react';
import LargeViewHeaderBarStyle from "./LargeViewHeaderBarStyle.css";

function LargeViewHeaderBar() {

    //TODO MUST BECOME AN INPUT
    //TODO MUST BECOME A GLOBAL VARIABLE
    const routeChange = () => {
        const path = `https://www.doctolib.fr/infirmier/puteaux/anne-chir/booking/places?specialityId=30&telehealth=false&profile_skipped=true&bookingFunnelSource=external_referral`;
        window.open(path, "_blank");
    }

    return (
        <header id = "headerBar-l">
            <div id='title-container-l'>
                <h2 id="title-1-l">
                    Anne Chir - Dominique Fernandez
                </h2>
                <h3 id="title-2-l">
                    Cabinet infirmier
                </h3>
                <h4  id="title-3-l">
                    Puteaux, Rueil
                </h4>
            </div>
            <div>
                <nav>
                    <ul>
                        <li>
                            Accueil
                        </li>
                        <li>
                            Les infirmiers
                        </li>
                        <li>
                            Les soins à domicile
                        </li>
                        <li>
                            Les soins en Cabinet
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

export default LargeViewHeaderBar;
