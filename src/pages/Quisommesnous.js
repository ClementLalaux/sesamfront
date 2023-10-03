import Footer from "../partials/Footer";
import Header from "../partials/Header";
import '../assets/style/quisommesnous.css';
import portrait from '../assets/img/portrait.jpg';
import service from '../assets/img/service.png';
import Partenaires from "../partials/Partenaires";

function Quisommmesnous(){
    return(
    <>
    <Header/>
    <div className="quisommesnous">
        <div className="quisommesnous_titre">
            <h1>Vous souhaitez résoudre vos<br/> problèmes de gestion ?</h1>
            <div className="quisommesnous_connexion">
                <div>
                    <p>Inscription</p>
                </div>
                <div>
                    <p>Connexion</p>
                </div>
            </div>
        </div>
        <div className="quisommesnous_sous_titre">
            <h3>Notre histoire</h3>
            <h2>Qui sommes-nous ? ?</h2>
        </div>

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

        <div className="quisommesnous_sous_titre">
            <h3>Nos avis clients</h3>
            <h2>Que dit-on de nous ?</h2>
        </div>

        <div className="carrousel">
            <div className="carrousel_text">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis veniam laudantium itaque repudiandae officia sint laborum ut enim impedit? Optio excepturi magni porro culpa aliquid! Velit accusamus praesentium esse nesciunt.</p>
            </div>
            <div className="left">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="15" viewBox="0 0 29 24" fill="none" >
<path d="M0.660423 10.8796C0.0416527 11.4984 0.0416527 12.5016 0.660423 13.1204L10.7439 23.2038C11.3626 23.8226 12.3659 23.8226 12.9846 23.2038C13.6034 22.5851 13.6034 21.5818 12.9846 20.9631L4.02157 12L12.9846 3.03693C13.6034 2.41816 13.6034 1.41494 12.9846 0.796168C12.3659 0.177398 11.3626 0.177398 10.7439 0.796168L0.660423 10.8796ZM28.2207 10.4155H1.78081V13.5845H28.2207V10.4155Z" fill="black"/></svg>
            </div>
            <div className="right">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="15" viewBox="0 0 29 24" fill="none">
<path d="M28.3411 13.1204C28.9599 12.5016 28.9599 11.4984 28.3411 10.8796L18.2576 0.796168C17.6389 0.177398 16.6356 0.177398 16.0169 0.796168C15.3981 1.41494 15.3981 2.41816 16.0169 3.03693L24.9799 12L16.0169 20.9631C15.3981 21.5818 15.3981 22.5851 16.0169 23.2038C16.6356 23.8226 17.6389 23.8226 18.2576 23.2038L28.3411 13.1204ZM27.2207 10.4155H0.780806V13.5845H27.2207V10.4155Z" fill="black"/></svg>
            </div>          
        </div>

        <div className="quisommesnous_sous_titre">
            <h3>Comment ca marche ?</h3>
            <h2>Quels sont nos services ?</h2>
        </div>

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
    </>
    )
}

export default Quisommmesnous;