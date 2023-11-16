import Footer from "../partials/Footer";
import Header from "../partials/Header";
import '../assets/style/services.css';
import article from "../assets/img/article1.jpg";
import service from '../assets/img/service.png';
import SousTitre from "../partials/SousTitre";
import Carrousel from "../partials/Carrousel";
import Modal from "../partials/Modal";
import { useEffect, useState } from "react";
import { getTexteByPage } from "../services/TexteService";

function Facturation(){

    const pageActive = 'facturation';
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
                        {textes.length > 0 && textes[0].contenu && renderTextWithLineBreaks(textes[0].contenu)}
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
                        {textes.length > 0 && textes[1].contenu && renderTextWithLineBreaks(textes[1].contenu)}
                        </div>
            
                    </div>
                </div>
                <div className="service_text_a">
                {textes.length > 0 && textes[2].contenu && renderTextWithLineBreaks(textes[2].contenu)}
                </div>
            </div>

    

        {/* <Partenaires/> */}

        <Footer/>
        </div>
    )
}

export default Facturation;