import Footer from "../partials/Footer";
import Header from "../partials/Header";
import "../assets/style/blog.css";
import article from "../assets/img/article1.jpg";

function Blog(){
    return(
        <>
        <Header/>
            <div className="blog">
                <div className="blog_titre">
                    <h1>Vous souhaitez résoudre vos<br/> problèmes de gestion ?</h1>
                    <div className="blog_connexion">
                        <div>
                            <p>Inscription</p>
                        </div>
                        <div>
                            <p>Connexion</p>
                        </div>
                    </div>
                </div>
                <div className="blog_sous_titre">
                    <h3>Blog</h3>
                    <h2>Nos derniers articles</h2>
                </div>
                <div className="article">
                    <div className="article_image">
                        <div>
                            <img src={article}/>
                        </div> 
                    </div>
                    <div className="article_texte">
                        <div className="article_titre">
                            <h3>Titre article 1</h3>
                            <p>(02/10/2023)</p>
                        </div>
                        <div className="article_description">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tincidunt sapien vitae egestas interdum. Aliquam laoreet sit amet libero euismod tristique.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tincidunt sapien vitae egestas interdum. Aliquam laoreet sit amet libero euismod tristique.</p>
                        </div>
                        <div className="article_suite">
                            <p>Lire la suite →</p>
                        </div>
                    </div>
                </div>
            </div>
        <Footer/>
        </>
    )
}

export default Blog;