import React from 'react';
import LargeViewHeaderBarStyle from "./LargeViewHomeRowStyle.css";
import nurse from "../../../assets/n2.jpg";
import background from "../../../assets/background.webp";
import bluePhone from "../../../assets/pblue.png"
import MapComponent from "../../MapComponent/MapComponent";


function LargeViewHomeRowComponent() {

    return (
        <div className="container container-appear">
            <div className="background-wrapper">
                <img src={background} alt="Background" id="img-1-l"/>
            </div>
            <div id="s-1-l" className="overlay-text-l">
                <p id="sentence-1-l">
                    LBESION DE SOIN A DOMICILE ?
                </p>
                <div>
                    <p className="sentence-2-l">
                        Soins à domicile et au cabinet 7/7 jours.
                    </p>
                    <p className="sentence-2-l">
                        Prise de rendez vous à domicile par appel téléphonique uniquement.
                    </p>
                    <p className="sentence-2-l">
                        12 Rue Jean Jaurès, 92800 Puteaux
                    </p>

                </div>

                <div>
                    <div id="phoneNumber-l">
                        <img id="bluep" src={bluePhone}/>
                        <p>06 15 98 05 24</p>
                    </div>
                </div>
                <MapComponent></MapComponent>

            </div>

        </div>
    );
}

export default LargeViewHomeRowComponent;
