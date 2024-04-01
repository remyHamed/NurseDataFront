import React from "react";
import background from "../../../assets/background.webp";
import PhoneHomeRowStyle from "./PhoneHomeRowStyle.css"
import bluePhone from "../../../assets/pblue.png";
import infinity from "../../../assets/indinity-3.png";


function PhoneHomeRowComponent() {

    return (
        <div className="container container-appear">
            <div className="background-wrapper">
                <img src={background} alt="Background" id="img-1-p"/>
            </div>
            <div id="s-1-p" className="overlay-text-p">
                <p id="sentence-1-p">
                    BESIONS DE SOIN
                </p>
                <p id="sentence-1-p-1">
                    A
                </p>
                <p id="sentence-1-p-2">
                    DOMICILE
                </p>
                <div>
                    <div id="phoneNumber-p">
                        <img id="bluep-p" src={bluePhone}/>
                        <p>06 15 98 05 24</p>
                    </div>
                </div>
            </div>
            <div>
                <img id="infiny-img-p" src={infinity}/>
            </div>
            <div id="informations">
                <p className="sentence-2-p" id="p1-p">
                    Soins à domicile ou au cabinet 7/7 jours.
                </p>
                <p className="sentence-2-p">
                    Prise de rendez vous à domicile par appel téléphonique uniquement.
                </p>
                <p className="sentence-2-p">
                    112 bis Rue Jean Jaurès, 92800 Puteaux
                </p>
            </div>
        </div>
    );
}

export default PhoneHomeRowComponent;