import React from 'react';

import accueil from '../assets/img/accueil.jpg';
import Accueil from './Accueil';


function Home() {

  return (
    <>
        <Accueil>
            <div className="accueil">
            <div className="image_accueil" style={{ backgroundImage: `url(${accueil})` }}>
                <h1>Vous souhaitez résoudre vos problèmes de gestion ?</h1>
            </div>
            </div>
        </Accueil>
        
    </>
  );
}

export default Home;