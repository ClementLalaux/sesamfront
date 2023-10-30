import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './assets/style/index.css';
import './assets/style/App.css';
import { BrowserRouter as Router, Routes, Route, createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Admin from './pages/Admin';
import Services from './pages/Services';
import Quisommmesnous from './pages/Quisommesnous';
import Administratif from './pages/Administratif';
import Accueil from './pages/Accueil';
import Formation from './pages/Formation';
import Partenaire from './pages/Partenaire';
import Management from './pages/Management';
import Comptabilite from './pages/Comptabilite';
import Facturation from './pages/Facturation';
import Devis from './pages/Devis';
import { isUserAdmin, isUserLoggedIn } from './services/AuthService';
import { Provider } from 'react-redux'; 
import store from './store';
import SuiteArticle from './pages/SuiteArticle';

const root = ReactDOM.createRoot(document.getElementById('root'));
let isAuth = isUserLoggedIn();
let isAdmin = isUserAdmin();


const PrivateRoute = ({ component: Component, ...rest }) => {
  if (isUserLoggedIn()) {
    return <Component {...rest} />;
  } else {
    return <Navigate to="/" replace />;
  }
};

const AdminRoute = ({ component: Component, ...rest }) => {
  isAuth = isUserLoggedIn();
  isAdmin = isUserAdmin();
  console.log(isAdmin + "admin" + ", isAuth" + isAuth)
  if (isAdmin && isAuth) {
    return <Component {...rest} />;
  } else {
    return <Navigate to="/" replace />;
  }
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Accueil />
  },
  {
    path: '/contact',
    element: <PrivateRoute component={Contact} />
  },
  {
    path: '/actualite',
    element: <Blog />
  },
  {
    path: '/admin',
    element: <AdminRoute component={Admin} />
  },
  {
    path: '/services',
    element: <Services />
  },
  {
    path: '/about-us',
    element: <Quisommmesnous />
  },
  {
    path: '/services/administratif',
    element: <Administratif />
  },
  {
    path: '/services/management',
    element: <Management />
  },
  {
    path: '/services/comptabilite',
    element: <Comptabilite />
  },
  {
    path: '/services/facturation',
    element: <Facturation />
  },
  {
    path: '/services/devis',
    element: <Devis />
  },
  {
    path: '/formation',
    element: <Formation />
  },
  {
    path: '/partenaires',
    element: <Partenaire />
  },
  {
    path: '/article/:articleId',
    element: <SuiteArticle />
  },
]);

function App() {

  return (
    <Provider store={store}>
      <RouterProvider router={router}>
        
      </RouterProvider>
    </Provider>
  );
}

root.render(<App />);

reportWebVitals();
