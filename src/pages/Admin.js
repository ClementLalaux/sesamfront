import Footer from "../partials/Footer";
import Header from "../partials/Header";
import '../assets/style/admin.css'
import SousTitre from "../partials/SousTitre";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import AjoutArticle from "../shared/AjoutArticle";
import { deleteArticle, getAllArticles, getFilesByArticleId, getImagesByArticleId, updateArticle } from "../services/ArticleService";
import { getAllTextes, updateTexte } from "../services/TexteService";
import React from "react";
import { getUser } from "../services/AuthService";
import { selectId } from "./authSlice";
import { useSelector } from "react-redux";
import AjoutTexte from "../shared/AjoutTexte";
import { getAllImages } from "../services/ImageService";

function Admin(){

    const [formMode , setFormMode] = useState(1);

    const [articleModalOpen, setArticleModalOpen] = useState(false);
    const [texteModalOpen, setTexteModalOpen] = useState(false);
    const [articleModalMode, setArticleModalMode] = useState("");
    const [selectedArticle, setSelectedArticle] = useState(null);
    const [selectedTexte, setSelectedTexte] = useState(null);
    const utilisateurId = useSelector(selectId);
    const [newArticleAdded, setNewArticleAdded] = useState(false);

    const addNewArticle = (newArticle) => {
        setArticles([...articles, newArticle]);
        setNewArticleAdded(true);
    };

    const onArticleHandler = async () => {
        setArticleModalOpen(true); 
        setArticleModalMode("add");
    };

    const updateExistingArticle = (articleId, updatedArticle) => {
        const updatedArticles = articles.map((article) =>
          article.id === articleId ? updatedArticle : article
        );
        setArticles(updatedArticles);
        console.log(updatedArticles)
      };

      const updateExistingTexte = (texteId, updatedTexte) => {
        const updatedTextes = textes.map((texte) =>
        texte.id === texteId ? updatedTexte : texte
        );
        setTextes(updatedTextes);
        setNewArticleAdded(true);
      };

    const onUpdateHandler = async (article) => {
        setArticleModalOpen(true);
        setArticleModalMode("edit");
        setSelectedArticle(article);
    }

    const onUpdateTextHandler = async (article) => {
        setSelectedTexte(article);
        setTexteModalOpen(true);
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
    const [textes, setTextes] = useState([]);
    const [images, setImages] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [nb, setNb] = useState(1); // Nombre total de pages
    const articlesPerPage = 10;

    const onDeleteHandler = async (articleId) => {
        try {
            await deleteArticle(articleId);
            const updatedArticles = articles.filter((article) => article.id !== articleId)
            setArticles(updatedArticles);
        } catch(error) {
            console.error(error);
        };
    }

    const afficheTableau = () => {
        if(formMode == 1){
            document.getElementById("article-tableau").style.display = "block";
            document.getElementById("texte-tableau").style.display = "none";
            document.getElementById("image-tableau").style.display = "none";
        } else if (formMode == 2){
            document.getElementById("article-tableau").style.display = "none";
            document.getElementById("texte-tableau").style.display = "block";
            document.getElementById("image-tableau").style.display = "none";
        } else if (formMode == 3){
            document.getElementById("article-tableau").style.display = "none";
            document.getElementById("texte-tableau").style.display = "none";
            document.getElementById("image-tableau").style.display = "block";
        }
    }


    useEffect(() => {
            afficheTableau();
            findArticles(); 
            findTextes();
            findImages();
            setNewArticleAdded(false); 
            console.log(articles)
    }, [currentPage, nb, newArticleAdded,formMode]);

    const findTextes = async() => {
        try {
            const response = await getAllTextes();
            // if (Array.isArray(response.data)) {
            //     const totalTextes = response.data.length;
            //     const totalPages = Math.ceil(totalTextes / articlesPerPage);
            //     setNb(totalPages);
            //     const startIndex = (currentPage - 1) * articlesPerPage;
            //     const endIndex = startIndex + articlesPerPage;
            //     const texteToShow = response.data.slice(startIndex, endIndex);
            //     setTextes(texteToShow);
            // } else {
            //     console.error("La réponse ne contient pas de tableau d'articles.");
            // } 
            setTextes(response.data)
        } catch (error) {
            console.error(error);
        }
    }

    const findImages = async() => {
        try {
            const response = await getAllImages();
            // if (Array.isArray(response.data)) {
            //     const totalTextes = response.data.length;
            //     const totalPages = Math.ceil(totalTextes / articlesPerPage);
            //     setNb(totalPages);
            //     const startIndex = (currentPage - 1) * articlesPerPage;
            //     const endIndex = startIndex + articlesPerPage;
            //     const texteToShow = response.data.slice(startIndex, endIndex);
            //     setTextes(texteToShow);
            // } else {
            //     console.error("La réponse ne contient pas de tableau d'articles.");
            // } 
            console.log(response)
            setImages(response.data)
        } catch (error) {
            console.error(error);
        }
    }

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
                console.log(article)
                return article;

              })
            );
            const getUtilisateur = await Promise.all(
                articlesToShow.map(async (article) => {
                  const filesResponse = await getUser(article.utilisateurId);
                  article.utilisateur = filesResponse.data;
                  return article;
                })
              );
            setArticles(updatedArticles);
            setArticles(getUtilisateur);
          } else {
            console.error("La réponse ne contient pas de tableau d'articles.");
          }
        } catch (error) {
          console.error(error);
        }
      };

      

    return(
        <>
        <div onClick={handleOutsideClick}>
        {articleModalOpen && articleModalMode === "add" && createPortal(<AjoutArticle onClose={() => setArticleModalOpen(false)} buttonValue={"AJOUTER"} title="Connexion" mode={articleModalMode} addNewArticle={addNewArticle}></AjoutArticle>, document.getElementById("modal-root"))}

        {articleModalOpen && articleModalMode === "edit" && createPortal(<AjoutArticle onClose={() => setArticleModalOpen(false)} buttonValue={"MODIFIER"} title="Connexion" mode={articleModalMode} selectedArticle={selectedArticle} updateExistingArticle={updateExistingArticle} ></AjoutArticle>, document.getElementById("modal-root"))}

        {texteModalOpen && createPortal(<AjoutTexte onClose={() => setTexteModalOpen(false)} buttonValue={"MODIFIER"} title="Connexion" selectedTexte={selectedTexte} updateExistingTexte={updateExistingTexte}></AjoutTexte>, document.getElementById("modal-root"))}
        
        <Header/>
            <div className="administration">
                <div className="administration_titre">
                    <h1>Administration</h1>
                </div>
                <SousTitre titre="Admin" texte="Liste de tout les articles"/>
                <div className="tableau" id="article-tableau">
                    <div className="recherche">
                        <button onClick={onArticleHandler} >Ajouter</button>
                        <input type="text" placeholder="🔎 Rechercher"/>
                    </div>
                    <div className="table-responsive ">
                    <table className="table">
                        <thead>
                            <tr>
                            <th scope="col-1"><input type="checkbox"/></th>
                            <th scope="col-4">Titre</th>
                            <th scope="col-1">Statut</th>
                            <th scope="col-3">Auteur</th>
                            <th scope="col-2">Date</th>
                            <th scope="col-2">Image</th>
                            <th scope="col-1">Action</th>
                            </tr>
                        </thead>
                        <tbody className="table-striped">
                            {
                                articles.map(article =>
                                    <tr key={article.id}>
                                        <td scope="col-1 row"><input type="checkbox"/></td>
                                        <td scope="col-4 row">{article.titre}</td>
                                        <td scope="col-1 row">{article.statut === true ? "En ligne" : "Hors-ligne"}</td>
                                        <td scope="col-3 row">{article.utilisateur ? article.utilisateur.email : 'Utilisateur inconnu'}</td>
                                        <td scope="col-2 row">{article.publication}</td>
                                        <td scope="col-2 row">
                                        {article.fichiers && article.fichiers.length > 0
                                            ? article.fichiers[0].filename.lastIndexOf("_") !== -1
                                            ? article.fichiers[0].filename.slice(article.fichiers[0].filename.lastIndexOf("_") + 1)
                                            : article.fichiers[0].filename
                                            : "No files"}
                                        </td>
                                        <td scope="col-1 row"><button onClick={() => onDeleteHandler(article.id)} className="ms-2 btn btn-danger"><i className="bi bi-trash"></i> Delete</button><button onClick={()=>onUpdateHandler(article)} className="ms-2 btn btn-warning"><i className="bi bi-trash"></i> Modifier</button></td>
                                    </tr>
                                    )
                            }
                        </tbody>
                    </table>
                    </div>
                    
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
                <div className="tableau" id="texte-tableau">
                <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                            <th scope="col-5">Contenu</th>
                            <th scope="col-2">Position</th>
                            <th scope="col-3">Page</th>
                            <th scope="col-2">Action</th>
                            </tr>
                        </thead>
                        <tbody className="table-striped">
                            {
                                textes.map(texte =>
                                    <tr key={texte.id}>
                                        <td scope="col-5 row" className="texte_cut">{texte.contenu}</td>
                                        <td scope="col-2 row">{texte.position}</td>
                                        <td scope="col-2 row">{texte.page}</td>
                                        <td scope="col-2 row"><button  className="ms-2 btn btn-warning" onClick={()=>onUpdateTextHandler(texte)}><i className="bi bi-trash"></i> Modifier</button></td>
                                    </tr>
                                    )
                            }
                        </tbody>
                    </table>
                    </div>
                </div>

                <div className="tableau" id="image-tableau">
                <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                            <th scope="col-5">Contenu</th>
                            <th scope="col-2">Position</th>
                            <th scope="col-3">Page</th>
                            <th scope="col-2">Action</th>
                            </tr>
                        </thead>
                        <tbody className="table-striped">
                            {
                                images.map(image =>
                                    <tr key={image.id}>
                                        <td scope="col-5 row" className="texte_cut">{image.filename}</td>
                                        <td scope="col-2 row">{image.position}</td>
                                        <td scope="col-2 row">{image.page}</td>
                                        <td scope="col-2 row"><button  className="ms-2 btn btn-warning" onClick={()=>onUpdateTextHandler(image)}><i className="bi bi-trash"></i> Modifier</button></td>
                                    </tr>
                                    )
                            }
                        </tbody>
                    </table>
                    </div>
                </div>
                  
                  
                
                <div className="adminstration_input">
                    <div onClick={()=>setFormMode(1)}>
                        <p>
                            Articles
                        </p>
                    </div>
                    <div onClick={()=>setFormMode(2)}>
                        <p>
                            Textes
                        </p>
                    </div>
                    <div onClick={()=>setFormMode(3)}>
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