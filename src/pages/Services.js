import Footer from "../partials/Footer";
import Header from "../partials/Header";
import '../assets/style/services.css';
import article from "../assets/img/article1.jpg";
import SousTitre from "../partials/SousTitre";
import React, { useEffect, useState } from "react";
import Modal from "../partials/Modal";
import { getTexteByPage } from "../services/TexteService";

function Services(){

    const pageActive = 'services';

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
                            <ul>
                            {textes.length > 0 && textes[0].contenu && renderTextWithLineBreaks(textes[0].contenu)}
                            </ul>
                        </div>
            
                    </div>
                </div>
                <h3>Des jury<span className="souligne">s de titres profe</span>ssionnels</h3>
                    <div className="service_col_deux">
                        <div className="service_text">
                            <div>
                                <ul className="services_ul">
                                {textes.length > 0 && textes[1].contenu && renderTextWithLineBreaks(textes[1].contenu)}
                                </ul>
                            </div>
                
                        </div>
                        <div className="service_img">
                            <div>
                                <img src={article}/>
                            </div>
                        </div>
                </div>
                <h3>Du secré<span className="souligne linebreak">tariat et services admini</span>stratifs</h3>
                <div className="service_col">
                    <div className="service_img">
                        <div>
                            <img src={article}/>
                        </div>
                    </div>
                    <div className="service_text">
                        <div>
                            <ul className="services_ul">
                            {textes.length > 0 && textes[2].contenu && renderTextWithLineBreaks(textes[2].contenu)}
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