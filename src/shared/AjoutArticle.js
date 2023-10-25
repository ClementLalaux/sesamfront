import "../assets/style/ajoutarticle.css";
import React, { useRef } from "react";
import {  useSelector } from "react-redux";
import { selectId } from "../pages/authSlice";
import { addFileToArticle, saveArticle, updateArticle } from "../services/ArticleService";

function AjoutArticle(props){

    const mode = props.mode;
    const utilisateurId = useSelector(selectId);
    const titreRef = useRef();
    const contenuRef = useRef();
    const publicationRef = useRef();
    const fichierRef = useRef();


    const backgroundClickHandler = (event) => {
        if (event.currentTarget === event.target) {
          props.onClose(); 
        }
      }

    const submitFormHandler = async (e) => {
        e.preventDefault();
        const titre = titreRef.current.value;
        const contenu = contenuRef.current.value;
        const publication = publicationRef.current.value;
        const fichier = fichierRef.current.files[0];
        const test = {titre,contenu,publication,utilisateurId}
        if(mode === 'edit'){
            console.log(test);
            await updateArticle(props.selectedArticle.id,test).then((response)=> {
                console.log(response)
                const formData = new FormData();
                formData.set("file", fichierRef.current.files[0]);
                 addFileToArticle(props.selectedArticle.id,formData).then((response)=> {
                    console.log(response);
                }).catch(error => {
                    console.error(error);
                })
            }).catch(error => {
                console.error(error);
            })
            props.onClose(); 
        } else {
            await saveArticle(test).then((response)=> {
                const formData = new FormData();
                formData.set("file", fichierRef.current.files[0]);
                 addFileToArticle(response.data.id,formData).then((response)=> {
                    console.log(response);
                }).catch(error => {
                    console.error(error);
                })
            }).catch(error => {
                console.error(error);
            })
            props.onClose(); 
        } 
    }
      
    return(
        <div onClick={backgroundClickHandler} className="test_modal">
            <div className="article_form">
                <button className="fermer" onClick={props.onClose}> X</button>
                <h3>Ajouter un article</h3>
                <form onSubmit={submitFormHandler} enctype="multipart/form-data">
                    <div className="form_valeur_article">
                        <input type="text" name="titre" placeholder="Titre*" defaultValue={props.selectedArticle?.titre} ref={titreRef}/>
                    </div>
                    <div className="form_valeur_article">
                        <textarea placeholder="Contenu*" rows="8"type="text" name="contenu" ref={contenuRef}>
                            {props.selectedArticle?.contenu}
                        </textarea>
                    </div>
                    <div className="form_valeur_article">
                        <input type="date" name="publication" defaultValue={props.selectedArticle?.publication} placeholder="Date de publication*" ref={publicationRef}/>
                    </div>
                    <div className="form_valeur_article ">
                    <input type="file" name="file" placeholder="Image" ref={fichierRef} />
                    </div> 
                    <div className="form_valeur ">
                        <label htmlFor="statut">Statut : </label>
                        <input type="checkbox" id="statut" name="statut" />
                    </div>                  
                    <input type="submit" className="btn_article" value={props.buttonValue}/>
                </form>
            </div>
        </div>
    )
}

export default AjoutArticle;