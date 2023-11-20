import "../assets/style/ajoutarticle.css";
import React, { useRef } from "react";
import {  useSelector } from "react-redux";
import { selectId } from "../pages/authSlice";
import { addFileToArticle, saveArticle, updateArticle, updateFile } from "../services/ArticleService";
import { getUser } from "../services/AuthService";

function AjoutArticle(props){

    const mode = props.mode;
    const utilisateurId = useSelector(selectId);
    const titreRef = useRef();
    const contenuRef = useRef();
    const publicationRef = useRef();
    const fichierRef = useRef();
    const statutRef = useRef();


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
        const statut = statutRef.current.checked;

        const test = {titre,contenu,publication,statut,utilisateurId}
        
        if(mode === 'edit'){
            await updateArticle(props.selectedArticle.id,test).then(async (response)=> {
                const filesResponse = await getUser(test.utilisateurId);
                test.utilisateur = filesResponse.data;
                test.id = props.selectedArticle.id;

                const formData = new FormData();
                if(fichierRef.current.files.length != 0){
                    const filesArray = Array.from(fichierRef.current.files);
                    for (const fichier of filesArray) {
                        formData.set("file", fichier);
                        await updateFile(props.selectedArticle.id, formData);
                    }
                }
                test.fichiers = props.selectedArticle.fichiers;
                test.files = props.selectedArticle.files;
                console.log(test);
                props.updateExistingArticle(props.selectedArticle.id, test);
            }).catch(error => {
                console.error(error);
            })
            
        } else {
            // Ajout d'un nouvel article
            try {
                const response = await saveArticle(test);
        
                const formData = new FormData();
                const filesArray = Array.from(fichierRef.current.files);
        
                for (const fichier of filesArray) {
                    formData.set("file", fichier);
                    await addFileToArticle(response.data.id, formData);
                }
        
                const userResponse = await getUser(utilisateurId);
                console.log(userResponse)
                test.utilisateur = userResponse.data;
                console.log(test);
        
                props.addNewArticle(response.data);
            } catch (error) {
                console.error(error);
            }
            
        } 
        props.onClose(); 
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
                    <input type="file" name="file" placeholder="Fichiers" ref={fichierRef} multiple/>
                    </div>

                    <div className="form_valeur ">
                        <label htmlFor="statut">Statut : </label>
                        <input type="checkbox" id="statut" name="statut" ref={statutRef}/>
                    </div>                  
                    <input type="submit" className="btn_article" value={props.buttonValue}/>
                </form>
            </div>
        </div>
    )
}

export default AjoutArticle;