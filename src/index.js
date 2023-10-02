import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/style/index.css';
import './assets/style/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Accueil from './pages/Accueil';
import reportWebVitals from './reportWebVitals';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Admin from './pages/Admin';
import Services from './pages/Services';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Accueil />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path='/actualite' element={<Blog/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/services' element={<Services/>}/>
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
