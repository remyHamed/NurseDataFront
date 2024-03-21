import React from "react";
import nurse from "../../../assets/n2.jpg";
import background from "../../../assets/background.webp";
import TabletHomeRowStyle from "./TabletHomeRowStyle.css"

function TabletHomeRowComponent() {

    return (
        <div className="container container-appear">
            <div className="image-wrapper">
                <img src={nurse} alt="Top Left" className="image-top-left"/>
            </div>
            <div className="background-wrapper">
                <img src={background} alt="Background" id="img-1"/>
            </div>
            <div id="s-1" className="overlay-text">
                TBesoin de soin à domicile ?
                <p>
                    Soins à domicile et au cabinet 7/7 jours.
                    Prise de rendez vous à domicile par appel téléphonique uniquement.
                    12 Rue Jean Jaurès, 92800 Puteaux
                </p>
            </div>
        </div>
    );
}

export default TabletHomeRowComponent;