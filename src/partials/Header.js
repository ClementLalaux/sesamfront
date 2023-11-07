import React, { useEffect, useState } from 'react';
import logo from"../assets/img/logo.png";
import { Link, Navigate, redirect } from 'react-router-dom';
import "../assets/style/App.css";
import avatar from '../assets/img/avatar.png';
import { isUserAdmin, isUserLoggedIn } from '../services/AuthService';
import { useDispatch, useSelector } from 'react-redux';
import { getRole, login, selectIsAdmin, selectIsAuthenticated } from '../pages/authSlice';

function Header(props){

    const isAuth = useSelector(selectIsAuthenticated);
    const isAdmin = useSelector(selectIsAdmin);

    const testAuth =isUserLoggedIn();
    const testAdmin = isUserAdmin();

    const dispatch = useDispatch();
    const [menuOpen, setMenuOpen] = useState(false);
  
    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
      };

    useEffect(() => {
    if (testAuth) {
      dispatch(login()); 
    }
    
    if (testAdmin) {
      dispatch(getRole()); 
    }
  }, [isAuth, isAdmin]);

    

    function onAdmin(){
        if(isAdmin === true){

            return <Navigate to="/admin" replace/>;
        }
    }

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
        <>{isAdmin ?(<div className='admin_div'>
                <Link to='/admin'><img src={avatar} onClick={onAdmin}/></Link>
            </div>) : <span></span>
        }
        
        <div className={`header ${menuOpen ? 'menu-open' : ''}`}>
            
            <div className="logo_div">
                <Link to="/"><img src={logo}></img></Link>
            </div>
            <div>
            <button className="menu-button" onClick={toggleMenu}>
                    MENU
                </button>
            </div>
                
            <div className={`menu ${menuOpen ? 'open' : ''}`}>
                <div className="close-menu" onClick={closeMenu}>
                <p>X</p>
                </div>
                <div className="accueil_div_media">
                    <Link to="/" className={props.pageActive === 'accueil' ? 'actif' : 'no_active'}>ACCUEIL</Link>
                </div>
                <div className="nous_div_media">
                    <Link to="/about-us" className={props.pageActive === 'about' ? 'actif' : 'no_active'}>À PROPOS</Link>
                </div>
                <div className="prestation_div_media" onMouseOver={changeDropdown} onMouseLeave={deleteDropdown}>
                    <Link to="/services" className={props.pageActive === 'services' ? 'actif' : 'no_active'}>SERVICES</Link>
                    
                </div>
                <div className="formation_div_media">
                    <Link to="/formation" className={props.pageActive === 'formation' ? 'actif' : 'no_active'}>FORMATIONS</Link>
                    <ul>
                        <li>
                            <Link to="/formation" className={props.pageActive === 'formation' ? 'actif' : 'no_active'}>Administratif</Link>
                        </li>
                        <li>
                            <Link to="/formation" className={props.pageActive === 'formation' ? 'actif' : 'no_active'}>Managament</Link>
                        </li>
                        <li>
                            <Link to="/formation" className={props.pageActive === 'formation' ? 'actif' : 'no_active'}>Comptabilité</Link>
                        </li>
                        <li>
                            <Link to="/formation" className={props.pageActive === 'formation' ? 'actif' : 'no_active'}>Facturation</Link>
                        </li>
                        <li>
                            <Link to="/formation" className={props.pageActive === 'formation' ? 'actif' : 'no_active'}>Devis</Link>
                        </li>
                    </ul>
                </div>

                <div className="jury_div_media">
                <Link to="/jury" className={props.pageActive === 'jury' ? 'actif' : 'no_active'}>JURY</Link>
                </div>
                <div className="partenaire_div_media">
                    <Link to="/partenaires" className={props.pageActive === 'partenaires' ? 'actif' : 'no_active'}>PARTENAIRES</Link>
                </div>
                <div className="actualite_div_media">
                <Link to="/actualite" className={props.pageActive === 'actualite' ? 'actif' : 'no_active'}>ACTUALITÉ</Link>
                </div>
                {isAuth ?(<div className="contact_div_media">
                            <Link to="/contact" className={props.pageActive === 'contact' ? 'actif' : 'no_active'}>CONTACT</Link>
                        </div>) : <span></span>
                }
                
                
            </div>
            <div className="categories_div">
                <div className="accueil_div">
                    <Link to="/" className={props.pageActive === 'accueil' ? 'actif' : 'no_active'}>ACCUEIL</Link>
                </div>
                <div className="nous_div">
                    <Link to="/about-us" className={props.pageActive === 'about' ? 'actif' : 'no_active'}>À PROPOS</Link>
                </div>
                <div className="prestation_div" onMouseOver={changeDropdown} onMouseLeave={deleteDropdown}>
                    <Link to="/services" className={props.pageActive === 'services' ? 'actif' : 'no_active'}>SERVICES</Link>
                    <div className='dropdown' id='dropdown'>
                        <p onMouseOver={makeFleche} onMouseLeave={deleteFleche} className='text_dropdown'><Link to="/services/administratif" className={props.pageActive === 'administratif' ? 'actif_dropdown' : 'no_active_dropdown'}><svg xmlns="http://www.w3.org/2000/svg" width="13" height="14" viewBox="0 0 13 14" >
<path  d="M12.1871 6.96353L0.916322 13.9651L0.788538 0.171917L12.1871 6.96353Z" fill="#E29BE3"/>
</svg> Administratif</Link></p>
                        <p onMouseOver={makeFleche} onMouseLeave={deleteFleche} className='text_dropdown'><Link to="/services/management" className={props.pageActive === 'management' ? 'actif_dropdown' : 'no_active_dropdown'}><svg xmlns="http://www.w3.org/2000/svg" width="13" height="14" viewBox="0 0 13 14" >
<path  d="M12.1871 6.96353L0.916322 13.9651L0.788538 0.171917L12.1871 6.96353Z" fill="#E29BE3"/>
</svg> Management</Link></p>
                        <p onMouseOver={makeFleche} onMouseLeave={deleteFleche} className='text_dropdown'><Link to="/services/comptabilite" className={props.pageActive === 'comptabilite' ? 'actif_dropdown' : 'no_active_dropdown'}><svg xmlns="http://www.w3.org/2000/svg" width="13" height="14" viewBox="0 0 13 14" >
<path  d="M12.1871 6.96353L0.916322 13.9651L0.788538 0.171917L12.1871 6.96353Z" fill="#E29BE3"/>
</svg> Comptabilité</Link></p>
                        <p onMouseOver={makeFleche} onMouseLeave={deleteFleche} className='text_dropdown'><Link to="/services/facturation" className={props.pageActive === 'facturation' ? 'actif_dropdown' : 'no_active_dropdown'}><svg xmlns="http://www.w3.org/2000/svg" width="13" height="14" viewBox="0 0 13 14" >
<path  d="M12.1871 6.96353L0.916322 13.9651L0.788538 0.171917L12.1871 6.96353Z" fill="#E29BE3"/>
</svg> Facturation</Link></p>
                        <p onMouseOver={makeFleche} onMouseLeave={deleteFleche} className='text_dropdown'><Link to="/services/devis" className={props.pageActive === 'devis' ? 'actif_dropdown' : 'no_active_dropdown'}><svg xmlns="http://www.w3.org/2000/svg" width="13" height="14" viewBox="0 0 13 14" >
<path  d="M12.1871 6.96353L0.916322 13.9651L0.788538 0.171917L12.1871 6.96353Z" fill="#E29BE3"/>
</svg> Devis</Link></p>
                    
                    </div>
                </div>
                <div className="formation_div">
                    <Link to="/formation" className={props.pageActive === 'formation' ? 'actif' : 'no_active'}>FORMATIONS</Link>
                </div>
                <div className="jury_div">
                <Link to="/jury" className={props.pageActive === 'jury' ? 'actif' : 'no_active'}>JURY</Link>
                </div>
                <div className="partenaire_div">
                    <Link to="/partenaires" className={props.pageActive === 'partenaires' ? 'actif' : 'no_active'}>PARTENAIRES</Link>
                </div>
                <div className="actualite_div">
                <Link to="/actualite" className={props.pageActive === 'actualite' ? 'actif' : 'no_active'}>ACTUALITÉ</Link>
                </div>
                {isAuth ?(<div className="contact_div">
                            <Link to="/contact" className={props.pageActive === 'contact' ? 'actif' : 'no_active'}>CONTACT</Link>
                        </div>) : <span></span>
                }
                
            </div>
        </div>
        </>
    )
}

export default Header;