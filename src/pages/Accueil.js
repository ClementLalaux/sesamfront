import Footer from "../partials/Footer";
import Header from "../partials/Header";
import accueil from "../assets/img/accueil.jpg";
import React from 'react';


function Accueil(){
    return(
        <>
        <Header/>
        <div className="accueil">
            <div className="image_accueil" style={{backgroundImage:`url(${accueil})`}}>
                <h1>
                    Vous souhaitez résoudre vos problèmes de gestion ?
                </h1>
            </div>
        </div>
        <Footer/>
        </>
    )
}


export default Accueil;