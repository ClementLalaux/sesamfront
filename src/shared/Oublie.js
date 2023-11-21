import "../assets/style/connexion.css";
import React, { useEffect, useState } from "react";
import {  oubliePassword} from "../services/AuthService";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {  selectIsAuthenticated } from "../pages/authSlice";

function Oublie(props){

    const [email, setEmail] = useState('')
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

    async function handleOublieForm(e){
  
          e.preventDefault();
          const formData = new FormData();
          formData.append("email", email); 
  
          await oubliePassword(formData).then((response) => {    
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
                        <input type="text" name="email" placeholder="Email*" value={email} onChange={ (e) => setEmail(e.target.value)}/>
                    </div>                  
                    <input type="submit" className="btn_connexion" value="CONNEXION" onClick={ (e) => handleOublieForm(e)}/>
                </form>
            </div>
        </div>
    )
}

export default Oublie;