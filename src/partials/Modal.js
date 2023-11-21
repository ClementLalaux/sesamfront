import { useState } from "react";
import Connexion from "../shared/Connexion";
import Inscription from "../shared/Inscription";
import { createPortal } from "react-dom";
import { useSelector } from "react-redux";
import { selectIsAuthenticated } from "../pages/authSlice";
import Oublie from "../shared/Oublie";


function Modal(props){

    const isAuth = useSelector(selectIsAuthenticated);
    console.log(isAuth);

    const [signFormMode, setSignFormMode] = useState("");
    const [loginModalOpen, setLoginModalOpen] = useState(false);

    const [oublieModalOpen, setOublieModalOpen] = useState(false);
    

    const onSigningHandler =  () => {
        setSignFormMode("inscription");
    };


    const onLoginHandler =  () => {
        setLoginModalOpen(true); 
    }

    const onOublieHandler =  () => {
        setOublieModalOpen(true); 
    }

    const closeModal = () => {
        setLoginModalOpen(false); 
    };
  
    const handleOutsideClick = (event) => {
      if (loginModalOpen && event.target.id === "modal-root") {
        closeModal();
      }
    };

    

    return(
        <>
            <div onClick={handleOutsideClick}>
            <div className="blog_titre">
                    <h1>{props.titre}</h1>
                    {!isAuth ? (
                        <div className="blog_connexion">
                        <div>
                            <p onClick={onLoginHandler}>Connexion</p>
                        </div>
                        <div>
                            <p onClick={onSigningHandler}>Inscription</p>
                        </div>
                    </div>
                    ) : null}
                    
                </div>
                {signFormMode && createPortal(<Inscription  onClose={() => setSignFormMode("")} title="Inscription" ></Inscription>, document.getElementById("modal-root"))}
                {loginModalOpen && createPortal(<Connexion onSigningHandler={onSigningHandler} onOublieHandler={onOublieHandler} onClose={() => setLoginModalOpen(false)} title="Connexion"></Connexion>, document.getElementById("modal-root"))}
                {oublieModalOpen && createPortal(<Oublie  onClose={() => setOublieModalOpen(false)} title="Mot de passe oublié"></Oublie>, document.getElementById("modal-root"))}
            </div>
        </>
    )
}

export default Modal;