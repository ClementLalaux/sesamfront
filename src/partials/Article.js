import "../assets/style/partials/article.css"
import React from "react";

function Article(props){
    return(
        <div className="article">
            <div className="article_image">
                <div>
                    <img src={props.image}/>
                </div> 
            </div>
            <div className="article_texte">
                <div className="article_titre">
                    <h3>{props.titre}</h3>
                    <p>({props.publication})</p>
                </div>
                <div className="article_description">
                    <p>{props.contenu}</p>
                </div>
                <div className="article_suite">
                    <p onClick={()=> props.suiteArticle(props.articleId)}>Lire la suite →</p>
                </div>
            </div>
        </div>
    )
}

export default Article;