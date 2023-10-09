import React from 'react';
import '../assets/style/partials/soustitre.css';

function SousTitre(props) {
    return(
        <div className="sous_titre">
            <h3>{props.titre}</h3>
            <h2>{props.texte}</h2>
        </div>
    )
}

export default SousTitre;