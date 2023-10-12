import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/style/index.css';
import './assets/style/App.css';
import { BrowserRouter as Router, Routes, Route, createBrowserRouter, RouterProvider } from 'react-router-dom'
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


const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path : "/",
    element: <Accueil/>
  },
  {
    path:"/contact",
    element:<Contact/>
  },
  {
    path:"/actualite",
    element:<Blog/>
  },
  {
    path:"/admin",
    element:<Admin/>
  },
  {
    path:"/services",
    element:<Services/>
  },{
    path:"/about-us",
    element:<Quisommmesnous/>
  },{
    path:"/services/administratif",
    element:<Administratif/>
  },{
    path:"/formation",
    element:<Formation/>
  },{
    path:"/partenaires",
    element:<Partenaire/>
  }
]);


root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      
    </RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
