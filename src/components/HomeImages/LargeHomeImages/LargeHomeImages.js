import React from 'react';
import babe from '../../../assets/cochonou.webp'
import phoneGirle from '../../../assets/phone-girl.webp'
import LargeHomeImagesStyle from './LargeHomeImagesStyle.css'
import vitalCard from '../../../assets/carte-vitale_perdu.png'


function LargeHomeImages() {

    return (
        <div className="large-home-image-container">
            <div className="large-home-image-pig">
                <img src={babe}/>
                <p className="large-home-image-pig" >
                    Des Soins Remboursés
                </p>
                <div className="large-home-image-pig-text" >
                    <div id="larg-vCard-container">
                        <img id="vCarde" src={vitalCard}/>
                        <p>
                            carte vitale
                        </p>
                    </div>
                    <p>mutuelle</p>
                    <p>C2S (ancienne CMU)</p>
                    <p>AME (aide médicale d'état)</p>
                </div>
            </div>
            <div  className="large-home-image-phone-girl">
                <img src={phoneGirle}/>
                <p className="large-home-image-pig" >
                    Un service 7/7 jours
                </p>
                <div  className="large-home-image-phone-girl-text">
                    <p> 5 infirmiers, Mme Fernandez et Mme Chir, avec 3 collaborateurs,</p>
                    <p>assurent les permanences au cabinet et à domicile.</p>
                </div>
            </div>
        </div>
    );
}

export default LargeHomeImages;
