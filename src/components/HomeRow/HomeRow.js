import React from "react";
import background from './../../assets/background.webp';
import './Home-row.css'; // Assurez-vous que le chemin est correct

function HomeRow() {
    return (
        <div className="container">
            <img src={background} alt="Background"/>
            <div className="overlay-text">sqdfqsdfhqsdjfhkqsdjlhflkqsdhfk qs</div>
        </div>
    );
}

export default HomeRow;
