import "../assets/style/connexion.css";
import React, { useEffect, useState } from "react";
import { loginAPICall, saveLoggedInUser, storeToken } from "../services/AuthService";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getRole, login, selectId, selectIsAuthenticated, setId } from "../pages/authSlice";

function Connexion(props){

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch();
    const isAuth = useSelector(selectIsAuthenticated);

    const backgroundClickHandler = (event) => {
        if (event.currentTarget === event.target) {
          props.onClose(); 
        }
      }

    const navigator = useNavigate();

    const inscriptionHandler = () => {
        props.onClose();
        props.onSigningHandler();
    }

    const oublieHandler = () => {
        props.onClose();
        props.onOublieHandler();
    }

    console.log(props);

    useEffect(() => {
        if(isAuth){
            props.onClose();
            navigator("/");
        }
    }, [isAuth]);

    async function handleLoginForm(e){
  
          e.preventDefault();
  
          await loginAPICall(email, password).then((response) => {    
                const token = 'Bearer ' + response.data.token;
                console.log(response);
                storeToken(token);
                if(response.data.admin == true){
                    dispatch(getRole());
                    sessionStorage.setItem("role",true);
                }
                dispatch(setId(response.data.id))
                dispatch(login());
                saveLoggedInUser(email);   
          }).catch(error => {
                console.error(error);
          })
  
      }

      
    return(
        <div onClick={backgroundClickHandler} className="test_modal">
            <div className="connexion_form">
                <button className="fermer" onClick={props.onClose}> X</button>
                <h3>Se connecter</h3>
                <p>Content de te revoir ,<br/>tu nous avez manqué</p>
                <form>
                    <div className="form_valeur_connexion">
                        <input type="text" name="email" placeholder="Email*" value={email} onChange={ (e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="form_valeur_connexion last_input">
                        <input type="password" name="password" placeholder="Mot de passe*" value={password} onChange={ (e) => setPassword(e.target.value)}/>
                    </div>                     
                    <input type="submit" className="btn_connexion" value="CONNEXION" onClick={ (e) => handleLoginForm(e)}/>
                    <input type="button" className="btn_connexion" value="Mot de passe oublié" onClick={oublieHandler}/>
                    <input type="button" className="btn_inscription" value="Pas encore inscrit ? Créer un compte" onClick={inscriptionHandler}/>
                    

                </form>
            </div>
        </div>
    )
}

export default Connexion;