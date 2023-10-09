import "../assets/style/connexion.css";
import React from "react";

function Connexion(props){
    const backgroundClickHandler = (event) => {
        if (event.currentTarget === event.target) {
          props.onClose(); 
        }
      }
      
    return(
        <div onClick={backgroundClickHandler} className="test_modal">
            <div className="connexion_form">
                <button className="fermer" onClick={props.onClose}> X</button>
                <h3>Se connecter</h3>
                <p>Content de te revoir ,<br/>tu nous avez manqué</p>
                <form>
                    <div className="form_valeur_connexion">
                        <input type="text" name="email" placeholder="Email*" />
                    </div>
                    <div className="form_valeur_connexion last_input">
                        <input type="text" name="mdp" placeholder="Mot de passe*" />
                    </div>                     
                    <input type="submit" className="btn_connexion" value="CONNEXION"/>
                    <input type="submit" className="btn_inscription" value="Pas encore inscrit ? Créer un compte"/>
                </form>
            </div>
        </div>
    )
}

export default Connexion;