import React from "react";
import background from "../../../assets/background.webp";
import PhoneHomeRowStyle from "./PhoneHomeRowStyle.css"


function PhoneHomeRowComponent() {


    return (
        <div className="container container-appear">
            <div className="background-wrapper">
                <img src={background} alt="Background" id="img-1"/>
            </div>
            <div id="s-1" className="overlay-text">
                PBesoin de soin à domicile ?
                <p>
                    Soins à domicile et au cabinet 7/7 jours.
                    Prise de rendez vous à domicile par appel téléphonique uniquement.
                    12 Rue Jean Jaurès, 92800 Puteaux
                </p>
            </div>
        </div>
    );
}

export default PhoneHomeRowComponent;