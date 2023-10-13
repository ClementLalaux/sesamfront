import Footer from "../partials/Footer";
import Header from "../partials/Header";
import '../assets/style/services.css';
import article from "../assets/img/article1.jpg";
import service from '../assets/img/service.png';
import SousTitre from "../partials/SousTitre";
import Carrousel from "../partials/Carrousel";
import Modal from "../partials/Modal";

function Facturation(){

    const pageActive = 'facturation';

    return(
        <div>
        <Header pageActive={pageActive}/>
        <div className="services">
                <Modal titre="Vous souhaitez résoudre vos problèmes de facturation ?"/>
                <SousTitre titre="Facturation" texte="Que propose-t-on ?"/>
            </div>
            <div className="service">
                <h3>Fac<span className="souligne">turat</span>ion</h3>
                <div className="service_col">
                    <div className="service_img">
                        <div>
                            <img src={article}/>
                        </div>
                        
                    </div>
                    <div className="service_text">
                        <div>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque metus libero, interdum sed odio id, accumsan tempor massa. Pellentesque sodales mollis semper.
                            </p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque metus libero, interdum sed odio id, accumsan tempor massa. Pellentesque sodales mollis semper.</p>
                        </div>
            
                    </div>
                </div>
            </div>

            <SousTitre titre="Nos avis clients" texte="Que dit-on de nous ?"/>

            <Carrousel/>
            <SousTitre titre="Comment ca marche ?" texte="Nos devis pour les services de facturations"/>

        <div className="service">
                <div className="service_col">
                    <div className="service_img">
                        <div>
                            <img src={service}/>
                        </div>
                        
                    </div>
                    <div className="service_text">
                        <div>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque metus libero, interdum sed odio id, accumsan tempor massa. Pellentesque sodales mollis semper.
                            </p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque metus libero, interdum sed odio id, accumsan tempor massa. Pellentesque sodales mollis semper.</p>
                        </div>
            
                    </div>
                </div>
                <div className="service_text_a">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, error. Reprehenderit tempore cum a rem perferendis, debitis illum hic reiciendis minima asperiores mollitia voluptatem molestias. Consectetur vitae excepturi omnis rerum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident assumenda natus blanditiis molestiae voluptates aspernatur, labore sequi doloribus iure reiciendis eos id deserunt quas voluptate, quo error consequuntur deleniti laborum?</p>
                </div>
            </div>

    

        {/* <Partenaires/> */}

        <Footer/>
        </div>
    )
}

export default Facturation;