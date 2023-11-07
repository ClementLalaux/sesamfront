import Header from "../partials/Header";
import Modal from "../partials/Modal";
import '../assets/style/formation.css';
import SousTitre from "../partials/SousTitre";
import article from "../assets/img/article1.jpg";
import Footer from "../partials/Footer";

function Formation(){

    const pageActive = 'formation';
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
                            <p>
                                Maîtrisez les principes du management et du leadership
                            </p>
                            <p>Augmentez votre capacité à inspirer, motiver et encadrer les individus et les équipes</p>
                            <p>
                                Boostez votre carrière en devenant un leader de confiance. Notre formation en management vous donne les compétences et la vision nécessaires pour réussir dans un monde professionnel en constante évolution.
                            </p>
                        </div>
            
                    </div>
                </div>
                <h3>Gesti<span className="souligne">on des co</span>nfilts</h3>
                    <div className="service_col_deux">
                        <div className="service_text">
                            <div>
                                <p>
                                Apprenez à gérer les conflits avec assurance et diplomatie grâce à notre formation spécialisée en gestion des conflits, et transformez les défis en opportunités.
                                </p>
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
                            <p>
                            Reprenez ou redonnez confiance avec un enseignement des matières fondamentales telles que les mathématiques, la lecture, l'écriture ...
                            </p>
                            <p>Plans de tutorat ciblés pour surmonter les obstacles dans la compréhension et la pratique.</p>
                        </div>
            
                    </div>
                </div>
                <h3>Prépar<span className="souligne">ations aux en</span>tretiens</h3>
                <div className="service_col_deux">
                        <div className="service_text">
                            <div>
                                <p>
                                Bénéficiez d'un aide pratique pour la préparation des candidats aux différents entretiens (recrutement, préparation aux concours, titres professionnels …)
                                </p>
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
                            <p>
                            Conception et la mise en œuvre de programmes de formation efficaces visant à aider les individus à gérer le stress, à développer leur confiance en eux et à atteindre leur plein potentiel. 
                            </p>
                            <p>Conseils personnalisés en gestion du stress et en renforcement de la confiance en soi.</p>
                        </div>
            
                    </div>
                </div>
                <h3>Métie<span className="souligne">rs admini</span>stratifs</h3>
                <div className="service_col_deux">
                        <div className="service_text">
                            <div>
                                <p>
                                Programmes de formation pour les métiers administratifs, la bureautique avancée et les procédures administratives standard. 
                                </p>
                                <ul className="formation_ul">
                                    <li>Rédaction de courriers, notes de service, rapports …</li>
                                    <li>Méthodes d'organisation administratives</li>
                                    <li>Accueil physique et téléphonique </li>
                                    <li>Obtenez les compétences en communication orale et écrite</li>
                                    <li>Maîtrise des outils informatiques tableurs et traitement de textes</li>
                                </ul>
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