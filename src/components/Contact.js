// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from "react";
import "./Contact.css";

const Contact = (props) => {
  return (
    <>
      <div className="container">
        <div className="container-image">
          <img src={props.dataPassing.photo} alt={props.dataPassing.name}></img>
        </div>
        <div className="container-data">
          <h1>{props.dataPassing.name}</h1>
          <p>{props.dataPassing.phone}</p>
          <p>{props.dataPassing.email}</p>
        </div>
      </div>
    </>
  );
};

export default Contact;
