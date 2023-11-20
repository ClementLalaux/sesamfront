import React, { useEffect, useState } from 'react';
import Footer from '../partials/Footer';
import Header from '../partials/Header';
import accueil from '../assets/img/accueil.jpg';
import { getImage, getImageByPage } from '../services/ImageService';


function Accueil(props) {

  const pageActive = 'accueil';

  const [images,setImages] = useState([]);

  const afficherImage = async () => {
    try{
      const image = await getImageByPage(pageActive);
      console.log(image.data);
      setImages(image.data);
    }catch (error) {
      console.error(error);
    }
  }

  useEffect(()=>{
    afficherImage();
},[])

  return (
    <>
          <Header pageActive={pageActive} />
          <div className="accueil">
            {
              images && images.length > 0 ? (
              <div className="image_accueil" style={{ backgroundImage: `url(http://localhost:8085/api/image/find/${images[0].filename})` }}>
                <h1>Des services sur mesure, adaptés à vos besoins !</h1>
             </div>
            ):(
            <span>

            </span>
            )}
            </div>
          <Footer/>
    </>
  );
}

export default Accueil;