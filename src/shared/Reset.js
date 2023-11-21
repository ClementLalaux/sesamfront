import "../assets/style/connexion.css";
import React, { useEffect, useState } from "react";
import {  oubliePassword, resetPassword} from "../services/AuthService";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {  selectIsAuthenticated } from "../pages/authSlice";

function Reset(props){

    const [password, setPassword] = useState('')
    const isAuth = useSelector(selectIsAuthenticated);

    const backgroundClickHandler = (event) => {
        if (event.currentTarget === event.target) {
          props.onClose(); 
        }
      }

    const navigator = useNavigate();

    console.log(props);

    useEffect(() => {
        if(isAuth){
            props.onClose();
            navigator("/");
        }
    }, [isAuth]);

    async function handleResetForm(e){
  
          e.preventDefault();
          const formData = new FormData();
          formData.append("newPassword", password); 
  
          await resetPassword(formData,props.token).then((response) => {    
                props.onClose();          
          }).catch(error => {
                console.error(error);
          })
  
      }

      
    return(
        <div onClick={backgroundClickHandler} className="test_modal">
            <div className="connexion_form">
                <button className="fermer" onClick={props.onClose}> X</button>
                <h3>Mot de passe oublie</h3>
                <form>
                    <div className="form_valeur_connexion">
                        <input type="text" name="email" placeholder="Nouveau mdp*" value={password} onChange={ (e) => setPassword(e.target.value)}/>
                    </div>                  
                    <input type="submit" className="btn_connexion" value="CONNEXION" onClick={ (e) => handleResetForm(e)}/>
                </form>
            </div>
        </div>
    )
}

export default Reset;