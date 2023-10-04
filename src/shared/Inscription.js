
import "../assets/style/connexion.css";

function Inscription(props){
    const backgroundClickHandler = (event) => {
        if (event.currentTarget === event.target) {
          props.onClose()
        }
      }

      

    return(
        <div onClick={backgroundClickHandler} className="test_modal">
            <div className="connexion_form">
                <button className="fermer" onClick={props.onClose}> X</button>
                <h3>Créer un compte</h3>
                <p>Crée un compte pour<br/>réaliser un contact</p>
                <form>
                    <div className="form_valeur_connexion">
                        <input type="text" name="email" placeholder="Email*" />
                    </div>
                    <div className="form_valeur_connexion">
                        <input type="text" name="mdp" placeholder="Mot de passe*" />
                    </div>
                    <div className="form_valeur_connexion last_input" >
                        <input type="text" name="mdp_bis" placeholder="Confirmer le mot de passe*" />
                    </div>                     
                    <input type="submit" className="btn_connexion" value="CONNEXION"/>
                    <input type="submit" className="btn_inscription" value="Pas encore inscrit ? Créer un compte"/>
                </form>
            </div>
        </div>
    )
}

export default Inscription;