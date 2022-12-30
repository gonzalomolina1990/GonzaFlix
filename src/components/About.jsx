import React from "react";
import "../App.css";
import Navigation from "./Navigation";

function About() {
  return (
    <>
      <Navigation />

      <div className="container">
        <div className="row mt-5">
          <div className="col mt-5">
            <h1>Sobre nosotros</h1>
            <p>
              Sitio creado por Gonzalo Molina
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
