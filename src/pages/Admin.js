import Footer from "../partials/Footer";
import Header from "../partials/Header";
import '../assets/style/admin.css'
import SousTitre from "../partials/SousTitre";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import AjoutArticle from "../shared/AjoutArticle";
import { deleteArticle, getAllArticles, updateArticle } from "../services/ArticleService";
import React from "react";
import { getUser } from "../services/AuthService";

function Admin(){

    const [articleModalOpen, setArticleModalOpen] = useState(false);
    const [articleModalMode, setArticleModalMode] = useState("");
    const [selectedArticle, setSelectedArticle] = useState(null);

    const onArticleHandler = async () => {
        setArticleModalOpen(true); 
        setArticleModalMode("add");
    };

    const onUpdateHandler = async (article) => {
        setArticleModalOpen(true);
        setArticleModalMode("edit");
        setSelectedArticle(article);
    }

    const closeModal = () => {
        setArticleModalOpen(false); // Fermer la modal de connexion
    };

    const handleOutsideClick = (event) => {
        if (articleModalOpen && event.target.id === "modal-root") {
          closeModal();
        }
    };

    const [articles , setArticles] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [nb, setNb] = useState(1); // Nombre total de pages
    const articlesPerPage = 3;

    useEffect(() => {
        getAllArticles()
            .then((response) => {
                if (Array.isArray(response.data)) {
                    const totalArticles = response.data.length;
                    const totalPages = Math.ceil(totalArticles / articlesPerPage);
                    setNb(totalPages);
                    listArticles(response.data);
                } else {
                    console.error("La réponse ne contient pas de tableau d'articles.");
                }
            })
            .catch(error => {
                console.error(error);
            });
    }, [currentPage,articles,nb]);

    function listArticles(allArticles){
        const startIndex = (currentPage - 1) * articlesPerPage;
        const endIndex = startIndex + articlesPerPage;
        const articlesToShow = allArticles.slice(startIndex,endIndex);
        setArticles(articlesToShow);
    }

    const onDeleteHandler = async (articleId) => {
        deleteArticle(articleId).then((response) => {
            console.log(response);
        }).catch(error => {
            console.error(error);
        });
    }

    const findUser = async(userId) => {
        getUser(userId).then((response) => {
            console.log("test");
        }).catch(error => {
            console.error(error);
        });
    }


    return(
        <>
        <div onClick={handleOutsideClick}>
        {articleModalOpen && articleModalMode === "add" && createPortal(<AjoutArticle onClose={() => setArticleModalOpen(false)} buttonValue={"AJOUTER"} title="Connexion" mode={articleModalMode}></AjoutArticle>, document.getElementById("modal-root"))}
        {articleModalOpen && articleModalMode === "edit" && createPortal(<AjoutArticle onClose={() => setArticleModalOpen(false)} buttonValue={"MODIFIER"} title="Connexion" mode={articleModalMode} selectedArticle={selectedArticle}></AjoutArticle>, document.getElementById("modal-root"))}
        <Header/>
            <div className="administration">
                <div className="administration_titre">
                    <h1>Administration</h1>
                </div>
                <SousTitre titre="Admin" texte="Liste de tout les articles"/>
                <div className="tableau">
                    <div className="recherche">
                        <button onClick={onArticleHandler}>Ajouter</button>
                        <input type="text" placeholder="🔎 Rechercher"/>
                    </div>
                    <table className="table">
                        <thead>
                            <tr>
                            <th scope="col-1"><input type="checkbox"/></th>
                            <th scope="col-4">Titre</th>
                            <th scope="col-1">Statut</th>
                            <th scope="col-3">Auteur</th>
                            <th scope="col-2">Date</th>
                            <th scope="col-1">Action</th>
                            </tr>
                        </thead>
                        <tbody className="table-striped">
                            {
                                articles.map(article =>
                                    <tr key={article.id}>
                                        <td scope="col-1 row"><input type="checkbox"/></td>
                                        <td scope="col-4 row">{article.titre}</td>
                                        <td scope="col-1 row">En ligne</td>
                                        <td scope="col-3 row"></td>
                                        <td scope="col-2 row">{article.publication}</td>
                                        <td scope="col-1 row"><button onClick={() => onDeleteHandler(article.id)} className="ms-2 btn btn-danger"><i className="bi bi-trash"></i> Delete</button><button onClick={()=>onUpdateHandler(article)} className="ms-2 btn btn-warning"><i className="bi bi-trash"></i> Modifier</button></td>
                                    </tr>
                                    )
                            }
                        </tbody>
                    </table>
                    <div className="pagination">
                        <nav aria-label="Page navigation example">
                            <ul class="pagination">
                                <li class="page-item">
                                <a class="page-link" href="#" aria-label="Previous" onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
                                    <span aria-hidden="true">&laquo;</span>

                                </a>
                                </li>
                                {
                                    Array.from({ length: nb }, (_, i) => (
                                        <li
                                            key={i + 1}
                                            className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}
                                            onClick={() => setCurrentPage(i + 1)}
                                        >
                                            <a class="page-link" href="#">{i + 1}</a></li>
                                    ))
                                }
                                <li class="page-item">
                                <a class="page-link" href="#" aria-label="Next" onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === nb}>
                                    <span aria-hidden="true">&raquo;</span>
                                </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="adminstration_input">
                    <div>
                        <p>
                            Articles
                        </p>
                    </div>
                    <div>
                        <p>
                            Textes
                        </p>
                    </div>
                    <div>
                        <p>
                            Images
                        </p>
                    </div>
                </div>
            </div>
        <Footer/>
        </div>
        </>
    )
}

export default Admin;