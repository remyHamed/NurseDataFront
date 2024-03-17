import React from 'react';
import Headerbar from './HeaderBar.css'

function HeaderBar() {
    return (
        <header id = "headerBar">
            <div id='title-container'>
                <h2 id="title-1">
                    Anne Chir - Dominique Fernandez
                </h2>
                <h3 id="title-2">
                    Cabinet infirmier
                </h3>
                <h4  id="title-3">
                    Puteaux, Rueil
                </h4>
            </div>
            <div>
                <nav>
                    <ul>
                        <li>
                            Acceuil
                        </li>
                        <li>
                            Les infirmiers
                        </li>
                        <li>
                            Les soins à domicile
                        </li>
                        <li>
                            Les soins en Cabinet
                        </li>
                    </ul>
                </nav>
            </div>
            <div>
                <button>
                    Prendre rendez-vous
                </button>
            </div>
        </header>
    );
}

export default HeaderBar;
