import React, { useState } from 'react';
import Footer from '../partials/Footer';
import Header from '../partials/Header';
import accueil from '../assets/img/accueil.jpg';
import Modal from '../partials/Modal';

function Accueil() {

    const onLoginHandler = () => {
        console.log("connexion");
       }


  return (
    <>
    <Modal>
        <Header />
        <div className="accueil">
          <div
            className="image_accueil"
            style={{ backgroundImage: `url(${accueil})` }}
          >
            <h1>Vous souhaitez résoudre vos problèmes de gestion ?</h1>
          </div>
        </div>
        <Footer test={onLoginHandler}/>
    </Modal>
    </>
  );
}

export default Accueil;