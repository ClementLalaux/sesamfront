import { useState } from "react";
import Connexion from "../shared/Connexion";
import Inscription from "../shared/Inscription";
import { createPortal } from "react-dom";

function Modal(props){

    const [signFormMode, setSignFormMode] = useState("");
  const [loginModalOpen, setLoginModalOpen] = useState(false);

  const onSigningHandler = async () => {
      setSignFormMode("inscription");
  };


  const onLoginHandler = async () => {
   setLoginModalOpen(true); 
  }

  const closeModal = () => {
      setLoginModalOpen(false); // Fermer la modal de connexion
    };
  
    // Gestionnaire d'événements pour détecter les clics en dehors de la modal
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
                    <div className="blog_connexion">
                        <div>
                            <p onClick={onLoginHandler}>Connexion</p>
                        </div>
                        <div>
                            <p onClick={onSigningHandler}>Inscription</p>
                        </div>
                    </div>
                </div>
                {signFormMode && createPortal(<Inscription onClose={() => setSignFormMode("")} title="Inscription"></Inscription>, document.getElementById("modal-root"))}
                {loginModalOpen && createPortal(<Connexion onClose={() => setLoginModalOpen(false)} title="Connexion"></Connexion>, document.getElementById("modal-root"))}
            </div>
        </>
    )
}

export default Modal;