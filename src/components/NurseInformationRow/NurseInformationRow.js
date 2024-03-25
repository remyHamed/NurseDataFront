import React from 'react';
import NurseInformationStyle from "./NurseInformationRowStyle.css"


function NurseInformationRow() {

    return (
        <div className="container-nurse-information">
            <h1> Les infirmiers</h1>
            <p>
                Tous les infirmiers, professionnels du secteur paramédical, possèdent un diplôme d'état obtenu après trois ans de formation dans un Institut de Formation en Soins Infirmiers.

                Pour s'établir en tant qu'infirmier libéral, il est requis d'avoir accumulé au moins deux ans d'expérience hospitalière. Ces professionnels exercent dans des cabinets locaux, sont répertoriés au sein de l'Ordre des infirmiers et peuvent collaborer en équipes pour garantir des soins continus toute l'année.
            </p>
            <p>
                Ils bénéficient d'une convention avec l'assurance maladie, assurant ainsi que les soins infirmiers prescrits par un médecin conventionné soient partiellement ou totalement remboursables, selon les droits du patient.

                Soumis à un strict code de déontologie, les infirmiers doivent adhérer à des principes fondamentaux tels que le respect de l'individu, la confidentialité, ainsi que le respect de l'intimité des patients, de leurs familles et proches.

                Les infirmiers pratiquent avec une totale indépendance, libres de tout conflit d'intérêt, fournissant des soins méticuleux, prévenants, et basés sur les connaissances scientifiques actuelles.
            </p>
        </div>
    );
}

export default NurseInformationRow;
