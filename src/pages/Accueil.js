import React, { useEffect, useState } from 'react';
import Footer from '../partials/Footer';
import Header from '../partials/Header';
import accueil from '../assets/img/accueil.jpg';
import { getImage, getImageByPage } from '../services/ImageService';
import { createPortal } from 'react-dom';
import Reset from '../shared/Reset';
import { useParams } from 'react-router-dom';


function Accueil(props) {

  const pageActive = 'accueil';

  const { token } = useParams("token");
  const params = token || "";


  const [resetModalOpen, setResetModalOpen] = useState(false);

  const [images,setImages] = useState([]);

  const onResetHandler =  () => {
    setResetModalOpen(true); 
}

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
    if(params !== ""){
      onResetHandler();
      console.log(params);
    }
},[params])

  return (
    <>
    {resetModalOpen && createPortal(<Reset  onClose={() => setResetModalOpen(false)} title="Reset mot de passe" token={params}></Reset>, document.getElementById("modal-root"))}
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