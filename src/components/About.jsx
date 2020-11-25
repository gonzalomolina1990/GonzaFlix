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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              necessitatibus quod, reiciendis error eveniet dolor saepe?
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
