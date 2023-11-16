import "../assets/style/ajoutarticle.css";
import React, { useRef } from "react";
import { updateTexte } from "../services/TexteService";

function AjoutTexte(props){
    const contenuRef = useRef();

    const backgroundClickHandler = (event) => {
        if (event.currentTarget === event.target) {
          props.onClose(); 
        }
      }
    
    const submitFormHandler = async (e) => {
        e.preventDefault();
        const contenu = contenuRef.current.value;
        const position = props.selectedTexte.position;
        const page = props.selectedTexte.page;
        const utilisateurId = props.selectedTexte.utilisateurId;
        const texte = {contenu,position,page,utilisateurId};
        
        await updateTexte(props.selectedTexte.id,texte);

        props.updateExistingTexte(props.selectedTexte.id,texte);
        props.onClose(); 
    }

    return(
        <div onClick={backgroundClickHandler} className="test_modal">
            <div className="article_form">
                <button className="fermer" onClick={props.onClose}> X</button>
                <h3>Modifier un texte</h3>
                <form onSubmit={submitFormHandler}>
                    <div className="form_valeur_article">
                        <textarea placeholder="Contenu*" rows="8"type="text" name="contenu" ref={contenuRef}>
                            {props.selectedTexte?.contenu}
                        </textarea>
                    </div>
                    <input type="submit" className="btn_article" value={props.buttonValue}/>
                </form>
            </div>
        </div>
    )
}

export default AjoutTexte;