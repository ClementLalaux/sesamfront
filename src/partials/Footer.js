import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import Connexion from '../shared/Connexion';
import { Link, useNavigate } from 'react-router-dom';
import { isUserLoggedIn, logout } from '../services/AuthService';
import { useDispatch, useSelector } from 'react-redux';
import { getNoRole, logOut, selectIsAuthenticated } from "../pages/authSlice";

function Footer(props){

    const [loginModalOpen, setLoginModalOpen] = useState(false);

    const dispatch = useDispatch();

    const isAuth = useSelector(selectIsAuthenticated);


    const navigator = useNavigate();

    function handleLogout(){
        logout();
        dispatch(logOut());
        dispatch(getNoRole());
        navigator('/')
    }

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
          {loginModalOpen && createPortal(<Connexion onClose={() => setLoginModalOpen(false)} title="Connexion"></Connexion>, document.getElementById("modal-root"))}
            <div className="footer">
                <div className="footer_categories">
                    <div className="footer_service">
                        <h5><Link to="/services">Services</Link></h5>
                        <div>
                            <p><Link to="/services/administratif">Administration</Link></p>
                            <p><Link to="/services/facturation">Facturation</Link></p>
                        </div>
                        <div>
                            <p><Link to="/services/comptabilite">Comptabilité</Link></p>
                            <p><Link to="/services/devis">Devis</Link></p>
                        </div>
                        <div>
                            <p><Link to="/services/management">Management</Link></p>
                            <p><Link to="/services/jury">Jury</Link></p>
                        </div>
                    </div>
                    <div className="footer_information">
                        <h5>Information</h5>
                        <div>
                            <p><Link to="/actualite">Actualité</Link></p>
                        </div>
                        <div>
                            <p><Link to="/partenaires">Partenaires</Link></p>
                        </div>
                    </div>

                    <div className="footer_compagnie">
                        <h5>Compagnie</h5>
                        <div>
                            <p><Link to="/about-us">A propos</Link></p>
                        </div>
                        <div>
                            <p><Link to="/contact">Contact</Link></p>
                        </div>
                    </div>
                    
                    { !isAuth ? (
                        <div className="footer_inscription">
                            <h5>
                                Vous souhaitez vous connecter ?
                            </h5>
                            <div>
                                <p onClick={onLoginHandler}>Connexion</p>
                            </div>
                        </div>
                    ) : (
                        <div className="footer_inscription">
                            <h5>
                                Vous souhaitez vous déconnecter ?
                            </h5>
                            <div>
                                <p onClick={handleLogout}>Déconnexion</p>
                            </div>
                        </div>
                    )}
                    
                    
                </div>
                <hr></hr>
                <div className="footer_logo">
                    <div className="footer_termes">
                        <p>Terms</p>
                        <p>Privacy</p>
                        <p>Cookies</p>
                    </div>
                    <div className="footer_rs">
                        <svg xmlns="http://www.w3.org/2000/svg" width="205" height="43" viewBox="0 0 205 43" fill="none">
<path opacity="0.25" fill-rule="evenodd" clip-rule="evenodd" d="M180.304 42.0002C193.001 42.0002 203.294 32.8497 203.294 21.5619C203.294 10.2741 193.001 1.12354 180.304 1.12354C167.608 1.12354 157.315 10.2741 157.315 21.5619C157.315 32.8497 167.608 42.0002 180.304 42.0002Z" stroke="#E29BE3" stroke-width="1.5"/>
<path d="M187.819 17.7832C187.712 17.676 187.54 17.649 187.399 17.7151C187.311 17.7562 187.146 17.8101 186.951 17.8634C187.198 17.563 187.396 17.2267 187.484 16.9243C187.522 16.794 187.467 16.6567 187.346 16.579C187.225 16.502 187.064 16.502 186.944 16.579C186.753 16.7003 185.835 17.0649 185.255 17.183C183.943 16.1322 182.416 16.0231 180.829 16.8704C179.539 17.5592 179.258 18.9598 179.313 19.8135C176.36 19.5535 174.524 18.1272 173.491 16.9468C173.418 16.864 173.302 16.8203 173.192 16.8268C173.077 16.8345 172.973 16.8929 172.914 16.9834C172.426 17.7376 172.29 18.5714 172.524 19.395C172.652 19.8443 172.875 20.2403 173.134 20.5613C173.01 20.5054 172.89 20.4355 172.777 20.352C172.673 20.2737 172.528 20.259 172.405 20.3109C172.283 20.3642 172.205 20.4772 172.205 20.6011C172.205 22.0152 173.172 22.9587 174.076 23.4517C173.929 23.4357 173.777 23.4061 173.623 23.3631C173.491 23.3265 173.348 23.3631 173.257 23.4581C173.166 23.5525 173.144 23.6873 173.201 23.8022C173.708 24.8286 174.67 25.5346 175.86 25.7908C174.821 26.3486 173.43 26.622 172.157 26.4879C171.992 26.4667 171.835 26.5623 171.783 26.7074C171.731 26.8525 171.799 27.0116 171.944 27.0861C173.876 28.0778 175.623 28.4321 177.132 28.4321C179.328 28.4321 181.023 27.6824 182.055 27.0553C184.837 25.3671 186.571 22.3361 186.329 19.6241C186.775 19.3231 187.442 18.7672 187.855 18.1696C187.941 18.0489 187.926 17.8897 187.819 17.7832Z" fill="#212121"/>
<path opacity="0.25" fill-rule="evenodd" clip-rule="evenodd" d="M102.321 42.0002C115.017 42.0002 125.31 32.8497 125.31 21.5619C125.31 10.2741 115.017 1.12354 102.321 1.12354C89.6242 1.12354 79.3316 10.2741 79.3316 21.5619C79.3316 32.8497 89.6242 42.0002 102.321 42.0002Z" stroke="#E29BE3" stroke-width="1.5"/>
<path d="M104.414 16.3313H106.526C106.721 16.3313 106.879 16.1991 106.879 16.0363V14.2662C106.879 14.1034 106.721 13.9712 106.526 13.9712H104.414C102.278 13.9712 100.54 15.4268 100.54 17.2163V19.2814H98.075C97.8806 19.2814 97.7228 19.4135 97.7228 19.5764V21.3465C97.7228 21.5093 97.8806 21.6415 98.075 21.6415H100.54V27.8367C100.54 27.9995 100.698 28.1317 100.892 28.1317H103.005C103.199 28.1317 103.357 27.9995 103.357 27.8367V21.6415H105.822C105.974 21.6415 106.108 21.56 106.157 21.4397L106.861 19.6696C106.897 19.5799 106.879 19.4808 106.812 19.4035C106.746 19.3268 106.64 19.2814 106.526 19.2814H103.357V17.2163C103.357 16.7284 103.831 16.3313 104.414 16.3313Z" fill="#212121"/>
<path opacity="0.25" fill-rule="evenodd" clip-rule="evenodd" d="M24.337 42.0002C37.0335 42.0002 47.3261 32.8497 47.3261 21.5619C47.3261 10.2741 37.0335 1.12354 24.337 1.12354C11.6404 1.12354 1.34778 10.2741 1.34778 21.5619C1.34778 32.8497 11.6404 42.0002 24.337 42.0002Z" stroke="#E29BE3" stroke-width="1.5"/>
<path d="M19.0607 17.4365C20.1371 17.4365 21.0096 16.6608 21.0096 15.7038C21.0096 14.7469 20.1371 13.9712 19.0607 13.9712C17.9844 13.9712 17.1118 14.7469 17.1118 15.7038C17.1118 16.6608 17.9844 17.4365 19.0607 17.4365Z" fill="#212121"/>
<path d="M20.6847 18.5938H17.4365C17.2572 18.5938 17.1117 18.7231 17.1117 18.8825V27.5458C17.1117 27.7052 17.2572 27.8345 17.4365 27.8345H20.6847C20.864 27.8345 21.0095 27.7052 21.0095 27.5458V18.8825C21.0095 18.7231 20.864 18.5938 20.6847 18.5938Z" fill="#212121"/>
<path d="M30.3641 18.1142C28.9759 17.6915 27.2394 18.0628 26.1981 18.7287C26.1623 18.6046 26.035 18.5122 25.8836 18.5122H22.6355C22.4562 18.5122 22.3107 18.6415 22.3107 18.8009V27.4642C22.3107 27.6236 22.4562 27.7529 22.6355 27.7529H25.8836C26.0629 27.7529 26.2085 27.6236 26.2085 27.4642V21.2382C26.7334 20.8362 27.4096 20.708 27.9631 20.9171C28.4997 21.1186 28.807 21.6107 28.807 22.2662V27.4642C28.807 27.6236 28.9525 27.7529 29.1318 27.7529H32.3799C32.5592 27.7529 32.7048 27.6236 32.7048 27.4642V21.6846C32.6677 19.3115 31.412 18.433 30.3641 18.1142Z" fill="#212121"/>
                        </svg>
                    </div>
                </div>
                
            </div>
            </div>
        </>
    )
}

export default Footer;