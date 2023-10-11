import React, { useState } from 'react';
import Footer from '../partials/Footer';
import Header from '../partials/Header';
import Connexion from '../shared/Connexion';
import { createPortal } from 'react-dom';
import accueil from '../assets/img/accueil.jpg';


function Accueil() {

  const [loginModalOpen, setLoginModalOpen] = useState(false);

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

  return (
    <>
        <div onClick={handleOutsideClick}>
          {loginModalOpen && createPortal(<Connexion onClose={() => setLoginModalOpen(false)} title="Connexion"></Connexion>, document.getElementById("modal-root"))}
          <Header />
          <div className="accueil">
            <div className="image_accueil" style={{ backgroundImage: `url(${accueil})` }}>
                <h1>Vous souhaitez résoudre vos problèmes de gestion ?</h1>
            </div>
            </div>
          <Footer onLoginHandler={onLoginHandler}/>
        </div>
    </>
  );
}

export default Accueil;