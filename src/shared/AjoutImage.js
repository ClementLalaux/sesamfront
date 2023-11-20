import "../assets/style/ajoutarticle.css";
import React, { useRef } from "react";
import { updateTexte } from "../services/TexteService";
import { updateImage } from "../services/ImageService";

function AjoutImage(props){
    const fichierRef = useRef();

    const backgroundClickHandler = (event) => {
        if (event.currentTarget === event.target) {
          props.onClose(); 
        }
      }
    
      const submitFormHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("file", fichierRef.current.files[0]); 
        try {
            await updateImage(props.selectedImage.id, formData);
            props.updateExistingImage(props.selectedImage.id, formData);
            props.onClose();
        } catch (error) {
            console.error("Erreur lors de la mise à jour de l'image :", error);
        }
    }

    return(
        <div onClick={backgroundClickHandler} className="test_modal">
            <div className="article_form">
                <button className="fermer" onClick={props.onClose}> X</button>
                <h3>Modifier une image</h3>
                <form onSubmit={submitFormHandler} enctype="multipart/form-data">
                <div className="form_valeur_article ">
                    <input type="file" name="file" placeholder="Fichiers" ref={fichierRef}/>
                    </div>
                    <input type="submit" className="btn_article" value={props.buttonValue}/>
                </form>
            </div>
        </div>
    )
}

export default AjoutImage;