import '../assets/style/partials/partenaires.css';
import nosys from "../assets/img/nosys.png";
import bsnext from "../assets/img/bsnext.png";

function Partenaires(){
    return(
        <>
            <div className="carrousel_partenaires">
                <h3>Partenaires</h3>
                <div className="carrousel_partenaires_text">
                    <div>
                        <div>
                            <img src={nosys}/>
                        </div>
                        <p className="partenaires_textes">Pascal CARLIER<br/>
                            Gestion de projet, Conseil et Formation<br/>
                            Jury de titres pro ( CDA - DWWM - CDUI)<br/>
                            06 74 34 24 83</p>
                    </div>
                    <div>
                        <div>
                            <img className="bsnext" src={bsnext}/>
                        </div> 
                        <p className="partenaires_textes">Samir BOUDJEMA<br/>
 	                        PROJETS IT<br/>
                            06 69 98 20 10</p>
                    </div>
                </div>       
            </div>
        </>
    )
}

export default Partenaires;