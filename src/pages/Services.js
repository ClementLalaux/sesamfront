import Footer from "../partials/Footer";
import Header from "../partials/Header";
import '../assets/style/services.css';
import article from "../assets/img/article1.jpg";
import SousTitre from "../partials/SousTitre";

function Services(){
    return(
        <>
        <Header/>
            <div className="services">
                <div className="services_titre">
                    <h1>Vous souhaitez résoudre vos<br/> problèmes de gestion ?</h1>
                    <div className="services_connexion">
                        <div>
                            <p>Inscription</p>
                        </div>
                        <div>
                            <p>Connexion</p>
                        </div>
                    </div>
                </div>
                <SousTitre titre="Nos services" texte="Que propose-t-on ?"/>
            </div>
            <div className="service">
                <h3>Adm<span className="souligne">inistr</span>atif</h3>
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
                <h3>Man<span className="souligne">agem</span>ent</h3>
                    <div className="service_col_deux">
                        <div className="service_text">
                            <div>
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque metus libero, interdum sed odio id, accumsan tempor massa. Pellentesque sodales mollis semper.
                                </p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque metus libero, interdum sed odio id, accumsan tempor massa. Pellentesque sodales mollis semper.</p>
                            </div>
                
                        </div>
                        <div className="service_img">
                            <div>
                                <img src={article}/>
                            </div>
                        </div>
                </div>
                <h3>Com<span className="souligne">ptabi</span>lité</h3>
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
                <h3>D<span className="souligne">evi</span>s</h3>
                <div className="service_col_deux">
                        <div className="service_text">
                            <div>
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque metus libero, interdum sed odio id, accumsan tempor massa. Pellentesque sodales mollis semper.
                                </p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque metus libero, interdum sed odio id, accumsan tempor massa. Pellentesque sodales mollis semper.</p>
                            </div>
                
                        </div>
                        <div className="service_img">
                            <div>
                                <img src={article}/>
                            </div>
                        </div>
                </div>
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
                <h3>J<span className="souligne">ury</span>s</h3>
                <div className="service_col_deux">
                        <div className="service_text">
                            <div>
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque metus libero, interdum sed odio id, accumsan tempor massa. Pellentesque sodales mollis semper.
                                </p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque metus libero, interdum sed odio id, accumsan tempor massa. Pellentesque sodales mollis semper.</p>
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

export default Services;