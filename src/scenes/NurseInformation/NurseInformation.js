import React from 'react';
import HeaderBar from "../../components/HeaderBar/HeaderBar";
import FooterElement from "../../components/FooterElement/FooterElement";
import NurseInformationRow from "../../components/NurseInformationRow/NurseInformationRow";

function NurseInformation() {
    return (
        <div className="App">
            <HeaderBar></HeaderBar>
            <NurseInformationRow></NurseInformationRow>
            <FooterElement></FooterElement>
        </div>
    );
}

export default NurseInformation;
