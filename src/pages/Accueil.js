import React from 'react';
import Footer from '../partials/Footer';
import Header from '../partials/Header';
import accueil from '../assets/img/accueil.jpg';


function Accueil() {

  const pageActive = 'accueil';

  return (
    <>
          <Header pageActive={pageActive}/>
          <div className="accueil">
            <div className="image_accueil" style={{ backgroundImage: `url(${accueil})` }}>
                <h1>Des services sur mesure, adaptés à vos besoins !</h1>
            </div>
            </div>
          <Footer/>
    </>
  );
}

export default Accueil;