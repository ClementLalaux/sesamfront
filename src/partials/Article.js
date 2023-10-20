import { Link } from "react-router-dom";
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
                    <Link to={"/article/"+props.articleId}>
                        Lire la suite →
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Article;