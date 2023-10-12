import '../assets/style/quisommesnous.css';
import portrait from '../assets/img/portrait.jpg';
import service from '../assets/img/service.png';
import Partenaires from "../partials/Partenaires";
import SousTitre from "../partials/SousTitre";
import Carrousel from "../partials/Carrousel";
import Header from '../partials/Header';
import Footer from '../partials/Footer';
import React from 'react';
import { createPortal } from 'react-dom';
import Inscription from '../shared/Inscription';
import Connexion from '../shared/Connexion';
import Modal from '../partials/Modal';

function Quisommmesnous(){


    return(
    <>

    <Header/>
    <div className="quisommesnous">
        <Modal titre="Vous souhaitez résoudre vos problèmes de gestion ?"/>
        <SousTitre titre="Notre histoire" texte="Qui sommes-nous ?"/>

        <div className="quisommesnous_description">
            <div>
                <div className="quisommesnous_img">
                    <img src={portrait}/>
                </div>
                
            </div>
            <div className="quisommesnous_text">
                <div>
                    <div>
                        <h4>
                            Notre expérience
                        </h4>
                    </div>
                    <h5>Entreprise individuelle créée en 2023</h5>
                        <ul>
                            <li>
                                Direction : Nadège CARLIER
                            </li>
                            <li>
                                Chevalier et Officier de l'Ordre des Palmes Académiques
                            </li>
                            <li>
                                Chevalier et Officier de l'Ordre des Palmes Académiques
                            </li>
                        </ul>
                        <h5>26 ans d'expérience:</h5>
                        <ul>
                            <li>
                                Secrétaire administrative 
                            </li>
                            <li>
                                Gestionnaire administrative et comptable
                            </li>
                            <li>
                                Gestionnaire administrative et comptable d'établissement scolaire
                            </li>
                            <li>
                                Responsable ressources humaines
                            </li>
                            <li>
                                Management et recrutement d'équipes
                            </li>
                            <li>
                                Gestion des conflits 
                            </li>
                        </ul>
                </div>
                
            </div>
        </div>

        <SousTitre titre="Nos avis clients" texte="Que dit-on de nous ?"/>

        <Carrousel/>

        <SousTitre titre="Comment ca marche ?" texte="Quels sont nos services ?"/>

        <div className="quisommesnous_services">
            <div className="quisommesnous_service">
                <div className="quisommesnous_service_image">
                    <img src={service}/>
                </div>
                <div className="quisommesnous_service_text">
                    <h5>Dans nos <span>bureaux</span></h5>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident, unde corrupti veniam dolorem nisi sunt sequi necessitatibus error rem cupiditate inventore dolore beatae perspiciatis deserunt quos temporibus accusantium dignissimos ipsa.</p>
                </div>
            </div>
            <div className="quisommesnous_service">
                <div className="quisommesnous_service_image">
                    <img src={service}/>
                </div>
                <div className="quisommesnous_service_text">
                    <h5>Déplacement chez le <span>client</span></h5>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident, unde corrupti veniam dolorem nisi sunt sequi .</p>
                </div>
            </div>
            <div className="quisommesnous_service">
                <div className="quisommesnous_service_image">
                    <img src={service}/>
                </div>
                <div className="quisommesnous_service_text">
                    <h5>Des services en <span>distanciel</span></h5>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident, unde corrupti veniam dolorem nisi sunt sequi necessitatibus error rem cupiditate inventore dolore beatae perspiciatis deserunt quos temporibus accusantium dignissimos ipsa.</p>
                </div>
            </div>
        </div>
    
    </div>
    {/* <Partenaires/> */}
    <Footer />
    </>
    )
}

export default Quisommmesnous;