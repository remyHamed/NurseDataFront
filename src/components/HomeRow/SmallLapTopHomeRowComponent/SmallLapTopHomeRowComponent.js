import React from "react";
import SmallLapTopHeaderBarStyle from "./SmallLapTopHomeRowStyle.css"
import nurse from "../../../assets/n2.jpg";
import background from "../../../assets/background.webp";
import bluePhone from "../../../assets/pblue.png";
import infinity from "../../../assets/indinity-3.png";

function SmallLapTopHomeRowComponent() {

    return (
        <div className="container container-appear">
            <div className="background-wrapper">
                <img src={background} alt="Background" id="img-1-s"/>
            </div>
            <div id="s-1-s" className="overlay-text-s">
                <p id="sentence-1-s">
                    SBESIONS DE SOIN A DOMICILE ?
                </p>
                <div>
                    <div id="phoneNumber-s">
                        <img id="bluep-s" src={bluePhone}/>
                        <p>06 15 98 05 24</p>
                    </div>
                </div>
                <div>
                    <img id="infiny-img-s" src={infinity}/>
                </div>
                <div>
                    <p className="sentence-2-s" id="p1-s">
                        Soins à domicile ou au cabinet 7/7 jours.
                    </p>
                    <p className="sentence-2-s">
                        Prise de rendez vous à domicile par appel téléphonique uniquement.
                    </p>
                    <p className="sentence-2-s">
                        112 bis Rue Jean Jaurès, 92800 Puteaux
                    </p>
                </div>
            </div>
        </div>
    );
}

export default SmallLapTopHomeRowComponent;