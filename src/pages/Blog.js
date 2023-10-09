import Footer from "../partials/Footer";
import Header from "../partials/Header";
import "../assets/style/blog.css";
import article from "../assets/img/article1.jpg";
import Article from "../partials/Article";
import React from "react";
import SousTitre from "../partials/SousTitre";

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
                <SousTitre titre="Blog" texte="Nos derniers articles"/>
                <Article image={article}/>
            </div>
        <Footer/>
        </>
    )
}

export default Blog;