import React, { useEffect, useState } from "react";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import { getArticle, getFilesByArticleId } from "../services/ArticleService";
import { useParams } from "react-router-dom";
import SousTitre from "../partials/SousTitre";
import "../assets/style/suitearticle.css";

function SuiteArticle(props){

    const [article , setArticle] = useState([]);
    const { articleId } = useParams();


    function getArticleById(){
        getArticle(articleId).then( async(response) => {
            
            const articleToShow = response.data
            const filesResponse = await getFilesByArticleId(response.data.id);
            articleToShow.fichiers = filesResponse.data
            setArticle(articleToShow);
            console.log(articleToShow)
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
                        {
                            article.fichiers ? (
                                <img src={article.fichiers[0].filename}
                                alt={article.fichiers[0].filename}/>
                        ) : (
                            <span></span>
                        )}
    
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