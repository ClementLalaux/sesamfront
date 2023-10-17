import React, { useState } from "react";
import { registerAPICall } from "../services/AuthService";
import "../assets/style/connexion.css";

function Inscription(props){

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const backgroundClickHandler = (event) => {
        if (event.currentTarget === event.target) {
          props.onClose()
        }
      }

      function handleRegistrationForm(e){

        e.preventDefault();
        const admin = false;

        const register = {email, password,admin}

        console.log(register);

        registerAPICall(register).then((response) => {
            console.log(response.data);
        }).catch(error => {
            console.error(error);
        })
    }

      

    return(
        <div onClick={backgroundClickHandler} className="test_modal">
            <div className="connexion_form">
                <button className="fermer" onClick={props.onClose}> X</button>
                <h3>Créer un compte</h3>
                <p>Crée un compte pour<br/>réaliser un contact</p>
                <form>
                    <div className="form_valeur_connexion">
                        <input type="email" name="email" placeholder="Email*" value={email} onChange={ (e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="form_valeur_connexion">
                        <input type="password" name="password" placeholder="Mot de passe*" value={password} onChange={ (e) => setPassword(e.target.value)}/>
                    </div>
                    <div className="form_valeur_connexion last_input" >
                        <input type="password" name="password" placeholder="Confirmer le mot de passe*" />
                    </div>                     
                    <button className="btn_connexion" onClick={ (e) => handleRegistrationForm(e)}>INSCRIPTION </button>
                    <input type="submit" className="btn_inscription" value="Déjà inscrit ? Se connecter"/>
                </form>
            </div>
        </div>
    )
}

export default Inscription;