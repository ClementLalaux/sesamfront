import Footer from "../partials/Footer";
import Header from "../partials/Header";
import Modal from "../partials/Modal";
import Partenaires from "../partials/Partenaires";
import SousTitre from "../partials/SousTitre";

function Partenaire(){

    const pageActive = 'partenaires';
    return(
        <>
        <Header pageActive={pageActive}/>
        <div className="partenaire">
            <Modal titre="Des partenaires qui nous aident dans nos activités !"/>
            <SousTitre titre="Nos partenaires" texte="Qui sont-ils ?"/>
            <Partenaires/>
        </div>
        <Footer/>
        </>   
    )
}


export default Partenaire;