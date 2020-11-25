import React from "react";
import "../App.css";
import Navigation from "./Navigation";

function NoMatch() {
  return (
    <>
      <Navigation />
      <div className="container">
        <div className="row mt-5">
          <div className="col mt-5">
            <h1>Error 404 - Página no encontrada</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default NoMatch;
