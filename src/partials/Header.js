import React from 'react';
import logo from"../assets/img/logo.png";
import { Link } from 'react-router-dom'

function Header(){
    return(
        <>
        <div className="header">
            <div className="logo_div">
                <img src={logo}></img>
            </div>
            <div className="categories_div">
                <div className="accueil_div">
                    <Link to="/">ACCUEIL</Link>
                </div>
                <div className="nous_div">
                    <Link to="/about-us">QUI SOMMES-NOUS ?</Link>
                </div>
                <div className="prestation_div">
                    <Link to="/services">SERVICES</Link>
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
                <Link to="/actualite">ACTUALITÉ</Link>
                </div>
                <div className="contact_div">
                    <Link to="/contact">CONTACT</Link>
                </div>
            </div>
        </div>
        </>
    )
}

export default Header;