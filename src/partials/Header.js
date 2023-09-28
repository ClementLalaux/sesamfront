
import logo from"../assets/img/logo.png";

function Header(){
    return(
        <>
        <div className="header">
            <div className="logo_div">
                <img src={logo}></img>
            </div>
            <div className="categories_div">
                <div className="accueil_div">
                    <p>ACCUEIL</p>
                </div>
                <div className="nous_div">
                    <p>QUI SOMMES-NOUS ?</p>
                </div>
                <div className="prestation_div">
                    <p>PRESTATIONS</p>
                </div>
                <div className="formation_div">
                    <p>FORMATIONS</p>
                </div>
                <div className="jury_div">
                    <p>JURY</p>
                </div>
                <div className="partenaire_div">
                    <p>PARTENAIRES</p>
                </div>
                <div className="actualite_div">
                    <p>ACTUALITÉS</p>
                </div>
                <div className="contact_div">
                    <p>CONTACT</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Header;