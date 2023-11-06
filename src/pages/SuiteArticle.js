import React, { useEffect, useState } from "react";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import { getArticle, getFilesByArticleId, getImagesByArticleId } from "../services/ArticleService";
import { Link, useParams } from "react-router-dom";
import SousTitre from "../partials/SousTitre";
import "../assets/style/suitearticle.css";

function SuiteArticle(props){

    const [article , setArticle] = useState([]);
    const { articleId } = useParams();

    function getArticleById(){
        getArticle(articleId).then( async(response) => {
            
            const articleToShow = response.data
            const imagesResponse = await getImagesByArticleId(response.data.id);
            articleToShow.images = imagesResponse.data

            const fichiersResponse = await getFilesByArticleId(response.data.id)
            articleToShow.fichiers = fichiersResponse.data
            setArticle(articleToShow);
            console.log(articleToShow.contenu)
        }).catch(error => {
            console.error(error);
        })
    }

    useEffect(()=>{
        getArticleById();
    },[])

    const renderTextWithLineBreaks = (text) => {
        const paragraphs = text.split("\n");
        const textWithBreaks = paragraphs.map((paragraph, index) => (
            <p key={index}>
                {paragraph.replace(/\n/g, "<br />")}
            </p>
        ));
    
        return textWithBreaks;
    };

    return(
        <>
            <Header/>
                <div className="suite_article">
                    <div className="administration_titre">
                        <h1>Article</h1>
                    </div>
                    <SousTitre titre={article.publication} texte={article.titre}/>
                    <div className="suite_article_img">
                        {
                            article.images && article.images.length > 0? (
                                <img src={"http://localhost:8082/api/article/files/get/image/" + article.images[0].filename}
                                alt={article.images[0].filename}/>
                        ) : (
                            <span></span>
                        )}
    
                    </div>
                    <div className="suite_article_p">
                        {article.contenu ? renderTextWithLineBreaks(article.contenu) : null}
                    </div>
                    <div className="liens_article">

                    {article.fichiers && article.fichiers.length > 0 ? (
                        <>
                            <p className="suite_article_liens_p">Les liens : </p>
                            <ul>
                                {article.fichiers.map((file, index) => (
                                    <li key={index}>
                                        <a href={"http://localhost:8082/api/article/files/get/file/" + file.filename}>
                                            {file.filename}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </>
                    ) : (
                        <span></span>
                    )}
                    </div>
                </div>

            <Footer/>
        </>
    )
}

export default SuiteArticle;