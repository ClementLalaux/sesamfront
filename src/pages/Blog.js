import Footer from "../partials/Footer";
import Header from "../partials/Header";
import "../assets/style/blog.css";
import image from "../assets/img/article1.jpg";
import Article from "../partials/Article";
import React, { useEffect, useState } from "react";
import SousTitre from "../partials/SousTitre";
import Modal from "../partials/Modal";
import { useNavigate } from "react-router-dom";
import { getAllArticles, getFilesByArticleId, getImagesByArticleId } from "../services/ArticleService";

function Blog(){

    const pageActive = 'actualite';
    const [currentPage, setCurrentPage] = useState(1);
    const [nb, setNb] = useState(1); // Nombre total de pages
    const articlesPerPage = 5;

    const [articles , setArticles] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        findArticles();
            
    }, [currentPage,nb]);

    const findArticles = async () => {
        try {
          const response = await getAllArticles();
          if (Array.isArray(response.data)) {
            const totalArticles = response.data.length;
            const totalPages = Math.ceil(totalArticles / articlesPerPage);
            setNb(totalPages);
            const startIndex = (currentPage - 1) * articlesPerPage;
            const endIndex = startIndex + articlesPerPage;
            const articlesToShow = response.data.slice(startIndex, endIndex);

            const updatedArticles = await Promise.all(
              articlesToShow.map(async (article) => {
                const filesResponse = await getImagesByArticleId(article.id);
                article.fichiers = filesResponse.data;
                return article;
              })
            );
            console.log(updatedArticles)
            setArticles(updatedArticles);
          } else {
            console.error("La réponse ne contient pas de tableau d'articles.");
          }
        } catch (error) {
          console.error(error);
        }
      };

    function suiteArticle(id){
        console.log(id);
        navigate(`/actualite/${id}`);
    }

    return(
        <>
        <Header pageActive={pageActive}/>
            <div className="blog">
            <Modal titre="Voici les derniers articles parus ! "/>
                <SousTitre titre="Blog" texte="Nos derniers articles"/>
                {
                    articles.map(article =>
                            <Article key={article.id} contenu={article.contenu} image={article.fichiers} publication={article.publication} titre={article.titre} suiteArticle={suiteArticle} articleId={article.id}/>
                        )
                }
            </div>
            <div id="pagination_article" className="pagination_article">  
                <ul className="page">
                    <li className="page__btn" onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
                        <span className="material-icons">←</span>
                    </li>
                    {
                        Array.from({ length: nb }, (_, i) => (
                            <li
                                key={i + 1}
                                className={`page__numbers ${currentPage === i + 1 ? 'active' : ''}`}
                                onClick={() => setCurrentPage(i + 1)}
                            >
                                {i + 1}
                            </li>
                        ))
                    }
                    <li className="page__btn" onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === nb}>
                        <span className="material-icons">→</span>
                    </li>
                </ul>
            </div>

            <Footer />
        
        </>
    )
}

export default Blog;