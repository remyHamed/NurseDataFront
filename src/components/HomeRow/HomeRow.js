import React from "react";
import background from './../../assets/background.webp';
import nurse from './../../assets/n2.jpg';
import './Home-row.css';


function HomeRow() {
    return (
        <div className="container container-appear">
            <img src={nurse} alt="Top Left" className="image-top-left"/>
            <img src={background} alt="Background" id="img-1"/>
            <div id="s-1" className="overlay-text">
                Besoin de soin à domicile ?
                <p>
                    Soins à domicile et au cabinet 7/7 jours.
                    Prise de rendez vous à domicile par appel téléphonique uniquement.
                    12 Rue Jean Jaurès, 92800 Puteaux
                </p>
            </div>

        </div>
    );
}


export default HomeRow;
