// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from "react";
import "./Contact.css";

const Contact = ({ dataPassing }) => {
  return (
    <>
      <div className="container">
        <div className="container-image">
          <img src={dataPassing.photo} alt={dataPassing.name}></img>
        </div>
        <div className="container-data">
          <h1>{dataPassing.name}</h1>
          <p>{dataPassing.phone}</p>
          <p>{dataPassing.email}</p>
        </div>
      </div>
    </>
  );
};

export default Contact;
