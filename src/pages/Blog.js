import Footer from "../partials/Footer";
import Header from "../partials/Header";
import "../assets/style/blog.css";
import image from "../assets/img/article1.jpg";
import Article from "../partials/Article";
import React, { useEffect, useState } from "react";
import SousTitre from "../partials/SousTitre";
import Modal from "../partials/Modal";
import { useNavigate } from "react-router-dom";
import { getAllArticles } from "../services/ArticleService";

function Blog(){

    const pageActive = 'actualite';

    const [articles , setArticles] = useState([]);

    const navigate = useNavigate();

    useEffect(()=>{
        listArticles();
    },[])

    function listArticles(){
        getAllArticles().then((response) => {
            setArticles(response.data);
        }).catch(error => {
            console.error(error);
        })
    }

    function suiteArticle(id){
        console.log(id)
        navigate(`/actualite/${id}`)
    }

    return(
        <>
        <Header pageActive={pageActive}/>
            <div className="blog">
            <Modal titre="Voici les derniers articles parus ! "/>
                <SousTitre titre="Blog" texte="Nos derniers articles"/>
                {
                    articles.map(article =>
                            <Article key={article.id} contenu={article.contenu} image={image} publication={article.publication} titre={article.titre} suiteArticle={suiteArticle} articleId={article.id}/>
                        )
                }
            </div>
            <Footer />
        
        </>
    )
}

export default Blog;