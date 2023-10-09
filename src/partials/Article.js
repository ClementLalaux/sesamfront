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
    )
}

export default Article;