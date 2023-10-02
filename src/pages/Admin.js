import Footer from "../partials/Footer";
import Header from "../partials/Header";
import '../assets/style/admin.css'

function Admin(){
    return(
        <>
        <Header/>
            <div className="administration">
                <div className="administration_titre">
                    <h1>Administration</h1>
                </div>
                <div className="administration_sous_titre">
                    <h3>Admin</h3>
                    <h2>Liste de tout les articles</h2>
                </div>
                <div className="tableau">
                    <div className="recherche">
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
                            <tr>
                                <td scope="col-1 row"><input type="checkbox"/></td>
                                <td scope="col-4 row">Titre</td>
                                <td scope="col-1 row">Statut</td>
                                <td scope="col-3 row">Auteur</td>
                                <td scope="col-2 row">Date</td>
                                <td scope="col-1 row">Action</td>
                            </tr>
                            <tr>
                                <td scope="col-1 row"><input type="checkbox"/></td>
                                <td scope="col-4 row">Titre</td>
                                <td scope="col-1 row">Statut</td>
                                <td scope="col-3 row">Auteur</td>
                                <td scope="col-2 row">Date</td>
                                <td scope="col-1 row">Action</td>
                            </tr>
                            <tr>
                                <td scope="col-1 row"><input type="checkbox"/></td>
                                <td scope="col-4 row">Titre</td>
                                <td scope="col-1 row">Statut</td>
                                <td scope="col-3 row">Auteur</td>
                                <td scope="col-2 row">Date</td>
                                <td scope="col-1 row">Action</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="pagination">
                        <nav aria-label="Page navigation example">
                            <ul class="pagination">
                                <li class="page-item">
                                <a class="page-link" href="#" aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>

                                </a>
                                </li>
                                <li class="page-item"><a class="page-link" href="#">1</a></li>
                                <li class="page-item"><a class="page-link" href="#">2</a></li>
                                <li class="page-item active"><a class="page-link" href="#">3</a></li>
                                <li class="page-item">
                                <a class="page-link" href="#" aria-label="Next">
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
        </>
    )
}

export default Admin;