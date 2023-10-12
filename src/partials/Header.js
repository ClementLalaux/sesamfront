import React, { useState } from 'react';
import logo from"../assets/img/logo.png";
import { Link } from 'react-router-dom'

function Header(){

    function changeDropdown() {
        let dropdown = document.getElementById('dropdown');
        dropdown.style.display = "block";
    }

    function deleteDropdown(){
        let dropdown = document.getElementById('dropdown');
        dropdown.style.display = "none";
    }

    function makeFleche(e) {
        const firstChild = e.currentTarget?.firstChild?.firstChild?.firstChild;
        if (firstChild) {
            firstChild.setAttribute("class", "fleche_colore");
        }
    }
    
    function deleteFleche(e) {
        const firstChild = e.currentTarget?.firstChild?.firstChild?.firstChild;
        if (firstChild) {
            firstChild.setAttribute("class", "fleche_no_colore");
        }
    }

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
                <div className="prestation_div" onMouseOver={changeDropdown} onMouseLeave={deleteDropdown}>
                    <Link to="/services">SERVICES</Link>
                    <div className='dropdown' id='dropdown'>
                        <p onMouseOver={makeFleche} onMouseLeave={deleteFleche} className='text_dropdown'><Link to="/services/administratif"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="14" viewBox="0 0 13 14" >
<path  d="M12.1871 6.96353L0.916322 13.9651L0.788538 0.171917L12.1871 6.96353Z" fill="#E29BE3"/>
</svg> Administratif</Link></p>
                        <p onMouseOver={makeFleche} onMouseLeave={deleteFleche} className='text_dropdown'><svg xmlns="http://www.w3.org/2000/svg" width="13" height="14" viewBox="0 0 13 14" >
<path  d="M12.1871 6.96353L0.916322 13.9651L0.788538 0.171917L12.1871 6.96353Z" fill="#E29BE3"/>
</svg> Management</p>
                        <p onMouseOver={makeFleche} onMouseLeave={deleteFleche} className='text_dropdown'><svg xmlns="http://www.w3.org/2000/svg" width="13" height="14" viewBox="0 0 13 14" >
<path  d="M12.1871 6.96353L0.916322 13.9651L0.788538 0.171917L12.1871 6.96353Z" fill="#E29BE3"/>
</svg> Comptabilité</p>
                        <p onMouseOver={makeFleche} onMouseLeave={deleteFleche} className='text_dropdown'><svg xmlns="http://www.w3.org/2000/svg" width="13" height="14" viewBox="0 0 13 14" >
<path  d="M12.1871 6.96353L0.916322 13.9651L0.788538 0.171917L12.1871 6.96353Z" fill="#E29BE3"/>
</svg> Facturation</p>
                        <p onMouseOver={makeFleche} onMouseLeave={deleteFleche} className='text_dropdown'><svg xmlns="http://www.w3.org/2000/svg" width="13" height="14" viewBox="0 0 13 14" >
<path  d="M12.1871 6.96353L0.916322 13.9651L0.788538 0.171917L12.1871 6.96353Z" fill="#E29BE3"/>
</svg> Devis</p>
                        <p onMouseOver={makeFleche} onMouseLeave={deleteFleche} className='text_dropdown'><svg xmlns="http://www.w3.org/2000/svg" width="13" height="14" viewBox="0 0 13 14" >
<path  d="M12.1871 6.96353L0.916322 13.9651L0.788538 0.171917L12.1871 6.96353Z" fill="#E29BE3"/>
</svg> Jury</p>
                    </div>
                </div>
                <div className="formation_div">
                    <Link to="/formation">FORMATIONS</Link>
                </div>
                <div className="jury_div">
                    <p>JURY</p>
                </div>
                <div className="partenaire_div">
                    <Link to="/partenaires">PARTENAIRES</Link>
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