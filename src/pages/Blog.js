import Footer from "../partials/Footer";
import Header from "../partials/Header";
import "../assets/style/blog.css";
import article from "../assets/img/article1.jpg";
import Article from "../partials/Article";
import React from "react";
import SousTitre from "../partials/SousTitre";
import Modal from "../partials/Modal";

function Blog(){

    const pageActive = 'actualite';

    return(
        <>
        <Header pageActive={pageActive}/>
            <div className="blog">
            <Modal titre="Voici les derniers articles parus ! "/>
                <SousTitre titre="Blog" texte="Nos derniers articles"/>
                <Article image={article}/>
            </div>
            <Footer />
        
        </>
    )
}

export default Blog;