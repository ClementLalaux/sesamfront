import React, { useEffect, useState } from "react";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import { getArticle } from "../services/ArticleService";
import { useParams } from "react-router-dom";
import SousTitre from "../partials/SousTitre";
import "../assets/style/suitearticle.css";

function SuiteArticle(props){

    const [article , setArticle] = useState([]);
    const { articleId } = useParams();


    function getArticleById(){
        getArticle(articleId).then((response) => {
            setArticle(response.data);
        }).catch(error => {
            console.error(error);
        })
    }

    useEffect(()=>{
        getArticleById();
    },[])

    return(
        <>
            <Header/>
                <div className="suite_article">
                    <div className="administration_titre">
                        <h1>Article</h1>
                    </div>
                    <SousTitre titre={article.publication} texte={article.titre}/>
                    <div>
                        <img />
                    </div>
                    <div className="suite_article_p">
                        <p>{article.contenu}</p>
                    </div>
                </div>

            <Footer/>
        </>
    )
}

export default SuiteArticle;