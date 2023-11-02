import React, { useState } from 'react';
import Footer from '../partials/Footer';
import Header from '../partials/Header';
import '../assets/style/contact.css';
import { postMail } from '../services/AuthService';

function Contact() {
  const pageActive = 'contact';

  const [formData, setFormData] = useState({
    recipient: '',
    subject: '',
    body: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.recipient) {
      newErrors.recipient = 'Email est requis';
    } else if (!/\S+@\S+\.\S+/.test(formData.recipient)) {
      newErrors.recipient = 'Email invalide';
    }

    if (!formData.body) {
      newErrors.body = 'Message est requis';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
        console.log(formData)
      await postMail(formData).then((response) => {
        if (response.ok) {
            console.log('E-mail envoyé avec succès !');
          } else {
            console.error('Échec de l\'envoi de l\'e-mail.');
          }
      });
    }
  };

  return (
    <>
      <Header pageActive={pageActive} />
      <div className="contact">
        <div className="contact_titre">
          <h1>Vous souhaitez nous contacter ?</h1>
        </div>
        <div className="contact_form">
          <h3>CONTACTEZ NOUS</h3>
          <form onSubmit={handleSubmit}>
            <div className="form_valeur">
              <input
                type="email"
                name="recipient"
                placeholder="Email*"
                value={formData.recipient}
                onChange={handleChange}
              />
              {errors.recipient && <span>{errors.recipient}</span>}
            </div>
            <div className="form_valeur">
              <input
                type="text"
                name="subject"
                placeholder="Sujet*"
                value={formData.subject}
                onChange={handleChange}
              />
              {errors.subject && <span>{errors.subject}</span>}
            </div>
            {/* <div className="form_valeur">
              <input
                type="text"
                name="societe"
                placeholder="Societe"
                value={formData.societe}
                onChange={handleChange}
              />
            </div> */}
            <div className="form_valeur">
              <textarea
                name="body"
                placeholder="Message*"
                value={formData.body}
                onChange={handleChange}
              />
              {errors.body && <span>{errors.body}</span>}
            </div>
            <input type="submit" value="ENVOYER" />
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;