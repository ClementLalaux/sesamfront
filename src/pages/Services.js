import Footer from "../partials/Footer";
import Header from "../partials/Header";
import '../assets/style/services.css';
import article from "../assets/img/article1.jpg";
import SousTitre from "../partials/SousTitre";
import React from "react";
import Modal from "../partials/Modal";

function Services(){

    const pageActive = 'services';
    return(
        <>

        <Header pageActive={pageActive}/>
            <div className="services">
                <Modal titre="Des prestations sur mesure qui contribuent à votre succès !"/>
                <SousTitre titre="Nos services" texte="Que propose-t-on ?"/>
            </div>
            <div className="service">
                <h3>De<span className="souligne">s formatio</span>ns</h3>
                <div className="service_col">
                    <div className="service_img">
                        <div>
                            <img src={article}/>
                        </div>
                        
                    </div>
                    <div className="service_text">
                        <div>
                            <ul className="services_ul">
                                <li>RECRUTEMENT DES ÉQUIPES</li>
                                <li>MANAGEMENT</li>
                                <li>GESTION DES CONFLITS</li>
                                <li>APPRENTISSAGE DES SAVOIRS FONDAMENTAUX</li>
                                <li>PRÉPARATION AUX ENTRETIENS</li>
                                <li>MÉTIERS ADMINISTRATIFS</li>
                                <li>GESTION DU STRESS ET CONFIANCE EN SOI</li>
                            </ul>
                        </div>
            
                    </div>
                </div>
                <h3>Des jury<span className="souligne">s de titres profe</span>ssionnels</h3>
                    <div className="service_col_deux">
                        <div className="service_text">
                            <div>
                                <ul className="services_ul">
                                    <li>SECRÉTAIRE ASSISTANT</li>
                                    <li>SECRÉTAIRE COMPTABLE</li>
                                    <li>AGENT ADMINISTRATIF ET D'ACCUEIL</li>
                                </ul>
                            </div>
                
                        </div>
                        <div className="service_img">
                            <div>
                                <img src={article}/>
                            </div>
                        </div>
                </div>
                <h3>Du secré<span className="souligne">tariat et services admini</span>stratifs</h3>
                <div className="service_col">
                    <div className="service_img">
                        <div>
                            <img src={article}/>
                        </div>
                    </div>
                    <div className="service_text">
                        <div>
                            <ul className="services_ul">
                                <li>MISE EN PAGE DE COURRIERS, NOTES DE SERVICES, RAPPORTS, ….</li>
                                <li>PRÉPARATION AUX ENTRETIENS</li>
                                <li>GESTION DU STRESS et CONFIANCE EN SOI</li>
                            </ul>
                        </div>
            
                    </div>
                </div>
                
            </div>
            
            <Footer/>
        </>
    )
}

export default Services;