import Header from "../partials/Header";
import Modal from "../partials/Modal";
import '../assets/style/formation.css';
import SousTitre from "../partials/SousTitre";
import article from "../assets/img/article1.jpg";
import Footer from "../partials/Footer";
import { useEffect, useState } from "react";
import { getTexteByPage } from "../services/TexteService";

function Formation(){

    const pageActive = 'formation';
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
                <Modal titre="Conception et animation de sessions de formations"/>
                <SousTitre titre="Nos formations" texte="Que propose-t-on ?"/>
            </div>
            <div className="service">
                <h3>Man<span className="souligne">agem</span>ent</h3>
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
                <h3>Gesti<span className="souligne">on des co</span>nfilts</h3>
                    <div className="service_col_deux">
                        <div className="service_text">
                            <div>

                                {textes.length > 0 && textes[1].contenu && renderTextWithLineBreaks(textes[1].contenu)}
                            </div>
                
                        </div>
                        <div className="service_img">
                            <div>
                                <img src={article}/>
                            </div>
                        </div>
                </div>
                <h3>Apprentiss<span className="souligne linebreak">age des savoirs fon</span>damentaux</h3>
                <div className="service_col">
                    <div className="service_img">
                        <div>
                            <img src={article}/>
                        </div>
                    </div>
                    <div className="service_text">
                        <div>
                            {textes.length > 0 && textes[2].contenu && renderTextWithLineBreaks(textes[2].contenu)}
                        </div>
            
                    </div>
                </div>
                <h3>Prépar<span className="souligne">ations aux en</span>tretiens</h3>
                <div className="service_col_deux">
                        <div className="service_text">
                            <div>
                                {textes.length > 0 && textes[3].contenu && renderTextWithLineBreaks(textes[3].contenu)}
                            </div>
                
                        </div>
                        <div className="service_img">
                            <div>
                                <img src={article}/>
                            </div>
                        </div>
                </div>
                <h3>Gestion d<span className="souligne linebreak">u stress et confian</span>ce en soi</h3>
                <div className="service_col">
                    <div className="service_img">
                        <div>
                            <img src={article}/>
                        </div>
                    </div>
                    <div className="service_text">
                        <div>
                            
                            {textes.length > 0 && textes[4].contenu && renderTextWithLineBreaks(textes[4].contenu)}
                        </div>
            
                    </div>
                </div>
                <h3>Métie<span className="souligne">rs admini</span>stratifs</h3>
                <div className="service_col_deux">
                        <div className="service_text">
                            <div>
                                {textes.length > 0 && textes[5].contenu && renderTextWithLineBreaks(textes[5].contenu)}
                            </div>
                
                        </div>
                        <div className="service_img">
                            <div>
                                <img src={article}/>
                            </div>
                        </div>
                </div>
            </div>
            
            <Footer/>
        </>

    )
}

export default Formation;