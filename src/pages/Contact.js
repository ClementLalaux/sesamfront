import Footer from "../partials/Footer";
import Header from "../partials/Header";
import "../assets/style/contact.css";

function Contact(){

    const pageActive = 'contact';
    return(
        <>
        <Header pageActive={pageActive}/>
            <div className="contact">
                <div className="contact_titre">
                    <h1>Vous souhaitez nous contacter ?</h1>
                </div>
                <div className="contact_form">
                    <h3>CONTACTEZ NOUS</h3>
                    <form>
                        <div className="form_valeur">
                            <input type="text" name="email" placeholder="Email*" />
                        </div>
                        <div className="form_valeur">
                            <input type="text" name="sujet" placeholder="Sujet*" />
                        </div>
                        <div className="form_valeur">
                            <input type="text" name="societe" placeholder="Societe" />
                        </div>
                        <div className="form_valeur">
                            <textarea name="message" placeholder="Message*" />
                        </div>
                        
                        <input type="submit" value="ENVOYER"/>
                    </form>
                </div>
            </div>
        <Footer/>
        </>
    )

}

export default Contact;