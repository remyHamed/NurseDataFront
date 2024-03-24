import React from 'react';
import HeaderBar from "../../components/HeaderBar/HeaderBar";
import HomeRow from "../../components/HomeRow/HomeRow";
import HomeImages from "../../components/HomeImages/HomeImages";
import FooterElement from "../../components/FooterElement/FooterElement";

function Home() {
    return (
        <div className="App">
            <HeaderBar></HeaderBar>
            <HomeRow></HomeRow>
            <HomeImages></HomeImages>
            <FooterElement></FooterElement>
        </div>
    );
}

export default Home;
