import '../assets/style/quisommesnous.css';
import portrait from '../assets/img/portrait.jpg';
import service from '../assets/img/service.png';
import SousTitre from "../partials/SousTitre";
import Carrousel from "../partials/Carrousel";
import Header from '../partials/Header';
import Footer from '../partials/Footer';
import React, { useEffect, useState } from 'react';
import Modal from '../partials/Modal';
import { getTexteByPage } from '../services/TexteService';

function Quisommmesnous(){

    const pageActive = 'about';

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
                    <h5>{textes.length > 0 && textes[0].contenu && renderTextWithLineBreaks(textes[0].contenu)}</h5>
                        <ul>
                            <li>{textes.length > 0 && textes[1].contenu && renderTextWithLineBreaks(textes[1].contenu)}</li>
                        </ul>
                        <h5>{textes.length > 0 && textes[2].contenu && renderTextWithLineBreaks(textes[2].contenu)}</h5>
                        <ul>
                            <li>
                                {textes.length > 0 && textes[3].contenu && renderTextWithLineBreaks(textes[3].contenu)} 
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
                    {textes.length > 0 && textes[4].contenu && renderTextWithLineBreaks(textes[4].contenu)}
                </div>
            </div>
            <div className="quisommesnous_service">
                <div className="quisommesnous_service_image">
                    <img src={service}/>
                </div>
                <div className="quisommesnous_service_text">
                    <h5>Déplacement chez le <span>client</span></h5>
                    {textes.length > 0 && textes[5].contenu && renderTextWithLineBreaks(textes[5].contenu)}
                </div>
            </div>
            <div className="quisommesnous_service">
                <div className="quisommesnous_service_image">
                    <img src={service}/>
                </div>
                <div className="quisommesnous_service_text">
                    <h5>Des services en <span>distanciel</span></h5>
                    {textes.length > 0 && textes[6].contenu && renderTextWithLineBreaks(textes[6].contenu)}
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