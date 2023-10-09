import Footer from "../partials/Footer";
import Header from "../partials/Header";
import '../assets/style/quisommesnous.css';
import portrait from '../assets/img/portrait.jpg';
import service from '../assets/img/service.png';
import Partenaires from "../partials/Partenaires";
import { useState } from "react";
import { createPortal } from "react-dom";
import Connexion from "../shared/Connexion";
import Inscription from "../shared/Inscription";
import SousTitre from "../partials/SousTitre";
import Carrousel from "../partials/Carrousel";

function Quisommmesnous(){

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
    {signFormMode && createPortal(<Inscription onClose={() => setSignFormMode("")} title="Inscription"></Inscription>, document.getElementById("modal-root"))}

{loginModalOpen && createPortal(<Connexion onClose={() => setLoginModalOpen(false)} title="Connexion"></Connexion>, document.getElementById("modal-root"))}
    <Header/>
    <div className="quisommesnous">
        <div className="quisommesnous_titre">
            <h1>Vous souhaitez résoudre vos<br/> problèmes de gestion ?</h1>
            <div className="quisommesnous_connexion">
                <div>
                    <p onClick={onLoginHandler}>Connexion</p>
                </div>
                <div>
                    <p onClick={onSigningHandler}>Inscription</p>
                </div>
            </div>
        </div>
        <SousTitre titre="Notre histoire" texte="Qui sommes-nous ?"/>

        <div className="quisommesnous_description">
            <div>
                <div className="quisommesnous_img">
                    <img src={portrait}/>
                </div>
                
            </div>
            <div className="quisommesnous_text">
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto officiis exercitationem, necessitatibus pariatur dolorem alias ratione rerum ad veritatis, velit voluptatum laudantium commodi assumenda voluptates quas obcaecati natus quos eligendi?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex suscipit sequi odit cumque iure blanditiis, voluptatum est asperiores, repellat, cupiditate culpa. Exercitationem porro, fuga laboriosam aspernatur animi similique ullam eligendi.</p>
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
                    <h5>Gérer votre <span>administratif</span></h5>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident, unde corrupti veniam dolorem nisi sunt sequi necessitatibus error rem cupiditate inventore dolore beatae perspiciatis deserunt quos temporibus accusantium dignissimos ipsa.</p>
                </div>
            </div>
            <div className="quisommesnous_service">
                <div className="quisommesnous_service_image">
                    <img src={service}/>
                </div>
                <div className="quisommesnous_service_text">
                    <h5>De l'aide dans le <span>management</span></h5>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident, unde corrupti veniam dolorem nisi sunt sequi .</p>
                </div>
            </div>
            <div className="quisommesnous_service">
                <div className="quisommesnous_service_image">
                    <img src={service}/>
                </div>
                <div className="quisommesnous_service_text">
                    <h5>Des problèmes de <span>comptabilité</span> ?</h5>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident, unde corrupti veniam dolorem nisi sunt sequi necessitatibus error rem cupiditate inventore dolore beatae perspiciatis deserunt quos temporibus accusantium dignissimos ipsa.</p>
                </div>
            </div>
            <div className="quisommesnous_service">
                <div className="quisommesnous_service_image">
                    <img src={service}/>
                </div>
                <div className="quisommesnous_service_text">
                    <h5>Soyez assisté dans vos <span>devis</span></h5>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                </div>
            </div>
            <div className="quisommesnous_service">
                <div className="quisommesnous_service_image">
                    <img src={service}/>
                </div>
                <div className="quisommesnous_service_text">
                    <h5>Facilitez vos <span>factures</span></h5>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident, unde corrupti veniam dolorem nisi sunt sequi necessitatibus error rem cupiditate inventore dolore beatae perspiciatis deserunt quos temporibus accusantium dignissimos ipsa.</p>
                </div>
            </div>
            <div className="quisommesnous_service">
                <div className="quisommesnous_service_image">
                    <img src={service}/>
                </div>
                <div className="quisommesnous_service_text">
                    <h5>Préparez vos <span>jurys</span></h5>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident, unde corrupti veniam dolorem nisi sunt sequi necessitatibus error rem cupiditate inventore dolore.</p>
                </div>
            </div>
        </div>
    
    </div>
    <Partenaires/>
    <Footer/>
    </div>
    </>
    )
}

export default Quisommmesnous;