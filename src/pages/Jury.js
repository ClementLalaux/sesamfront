import Footer from "../partials/Footer";
import Header from "../partials/Header";
import '../assets/style/services.css';
import article from "../assets/img/article1.jpg";
import service from '../assets/img/service.png';
import SousTitre from "../partials/SousTitre";
import Carrousel from "../partials/Carrousel";
import Modal from "../partials/Modal";
import { getTexteByPage } from "../services/TexteService";
import { useEffect, useState } from "react";

function Jury(){

    const pageActive = 'jury';

    const [textes , setTextes] = useState([]);

    const findTextes = async () => {
        try {
            const response = await getTexteByPage(pageActive);
            console.log(response.data);
            setTextes(response.data);
        } catch (error) {
          console.error(error);
        }
    }

    const renderTextWithLineBreaks = (text) => {
        if (typeof text !== 'string' || text === undefined) {
            return null; 
        }
        const paragraphs = text.split("\n");
        const textWithBreaks = paragraphs.map((paragraph, index) => (
            <p key={index}>
                {paragraph.replace(/\n/g, "<br />")}
            </p>
        ));
    
        return textWithBreaks;
    };

    useEffect(() => {
        findTextes();
        console.log(textes)
    }, []);

    return(
        <div>
        <Header pageActive={pageActive}/>
        <div className="services">
                <Modal titre="Vous souhaitez résoudre vos problèmes de jurys ?"/>
                <SousTitre titre="Jurys" texte="Que propose-t-on ?"/>
            </div>
            <div className="service">
                <h3>J<span className="souligne">ury</span>s</h3>
                <div className="service_col">
                    <div className="service_img">
                        <div>
                            <img src={article}/>
                        </div>
                        
                    </div>
                    <div className="service_text">
                        <div>
                        {textes.length > 0 && textes[0].contenu && renderTextWithLineBreaks(textes[0].contenu)}
                            <h5 className="titre_jury">Habilitations aux Titres professionnels <br/>administratifs :</h5>
                            <ul className="jury_ul">
                                <li>
                                TP 01318 Employé Administratif et d'Accueil <br/>Référenciel : <a href="https://www.francecompetences.fr/recherche/rncp/36803/"> Voir ici </a>
                                </li>
                                <li>
                                TP 00374 Secrétaire assistant<br/> Référenciel : <a href="https://www.francecompetences.fr/recherche/rncp/193/"> Voir ici </a>
                                </li>
                                <li>
                                TP00402 Secrétaire comptable <br/>Référenciel : <a href="https://www.francecompetences.fr/recherche/rncp/1212/"> Voir ici </a>
                                </li>
                            </ul>
                        </div> 
            
                    </div>
                </div>
            </div>

            <SousTitre titre="Nos avis clients" texte="Que dit-on de nous ?"/>

            <Carrousel/>
            <SousTitre titre="Comment ca marche ?" texte="Nos devis pour les services de jurys"/>

        <div className="service">
                <div className="service_col service_text_no_marging">
                    <div className="service_img">
                        <div>
                            <img src={service}/>
                        </div>
                        
                    </div>
                    <div className="service_text ">
                        <div>
                        {textes.length > 0 && textes[1].contenu && renderTextWithLineBreaks(textes[1].contenu)}
                        </div>
            
                    </div>
                </div>
                <div className="service_text_a">
                {textes.length > 0 && textes[2].contenu && renderTextWithLineBreaks(textes[2].contenu)}
                </div>
            </div> 
        <Footer/>
        </div>
    )
}

export default Jury;