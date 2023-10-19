import "../assets/style/connexion.css";
import React, { useRef } from "react";
import {  useSelector } from "react-redux";
import { selectId } from "../pages/authSlice";
import { saveArticle } from "../services/ArticleService";

function AjoutArticle(props){
    const utilisateurId = useSelector(selectId);
    const titreRef = useRef();
    const contenuRef = useRef();
    const publicationRef = useRef();
    const filenameRef = useRef();

    const backgroundClickHandler = (event) => {
        if (event.currentTarget === event.target) {
          props.onClose(); 
        }
      }

    const submitFormHandler = async (e) => {
        e.preventDefault();
        console.log(utilisateurId);
        const titre = titreRef.current.value;
        const contenu = contenuRef.current.value;
        const publication = publicationRef.current.value;
        const filename = filenameRef.current.value;
        const test = {titre,contenu,publication,utilisateurId,filename}

        saveArticle(test).then((response)=> {
            console.log(response)
        }).catch(error => {
            console.error(error);
        })
    }
      
    return(
        <div onClick={backgroundClickHandler} className="test_modal">
            <div className="connexion_form">
                <button className="fermer" onClick={props.onClose}> X</button>
                <h3>Ajouter un article</h3>
                <form onSubmit={submitFormHandler}>
                    <div className="form_valeur_connexion">
                        <input type="text" name="titre" placeholder="Titre*" ref={titreRef}/>
                    </div>
                    <div className="form_valeur_connexion">
                        <input type="text" name="contenu" placeholder="Contenu*" ref={contenuRef}/>
                    </div>
                    <div className="form_valeur_connexion">
                        <input type="date" name="publication" placeholder="Date de publication*" ref={publicationRef}/>
                    </div>
                    <div className="form_valeur_connexion last_input">
                        <input type="text" name="filename" placeholder="Filename" ref={filenameRef}/>
                    </div>                   
                    <input type="submit" className="btn_connexion" value="AJOUTER"/>
                </form>
            </div>
        </div>
    )
}

export default AjoutArticle;