import React, { useState } from "react";
import Inscription from "../shared/Inscription";
import Connexion from "../shared/Connexion";
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
        setLoginModalOpen(false);
      };
    
    const handleOutsideClick = (event) => {
        if (loginModalOpen && event.target.id === "modal-root") {
          closeModal();
        }
      };
    return(
    <div onClick={handleOutsideClick}>
        {signFormMode && createPortal(<Inscription onClose={() => setSignFormMode("")} title="Inscription"></Inscription>, document.getElementById("modal-root"))}

        {loginModalOpen && createPortal(<Connexion onClose={() => setLoginModalOpen(false)} title="Connexion"></Connexion>, document.getElementById("modal-root"))}

        {props.children}
    </div>
    )
}

export default Modal;