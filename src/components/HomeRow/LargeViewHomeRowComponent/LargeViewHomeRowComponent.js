import React from 'react';
import LargeViewHomeRowStyle from "./LargeViewHomeRowStyle.css";
import infinity from "../../../assets/indinity-3.png";
import background from "../../../assets/background.webp";
import bluePhone from "../../../assets/pblue.png"


function LargeViewHomeRowComponent() {

    return (
        <div className="container container-appear">
            <div className="background-wrapper">
                <img src={background} alt="Background" id="img-1-l"/>
            </div>
            <div id="s-1-l" className="overlay-text-l">
                <p id="sentence-1-l">
                    BESIONS DE SOIN A DOMICILE ?
                </p>
                <div>
                    <div id="phoneNumber-l">
                        <img id="bluep" src={bluePhone}/>
                        <p>06 15 98 05 24</p>
                    </div>
                </div>
                <div>
                    <img id="infiny-img-l" src={infinity}/>
                </div>
                <div>
                    <p className="sentence-2-l" id="p1-l">
                        Soins à domicile ou au cabinet 7/7 jours.
                    </p>
                    <p className="sentence-2-l">
                        Prise de rendez vous à domicile par appel téléphonique uniquement.
                    </p>
                    <p className="sentence-2-l">
                        112 bis Rue Jean Jaurès, 92800 Puteaux
                    </p>
                </div>
            </div>
        </div>
    );
}

export default LargeViewHomeRowComponent;
