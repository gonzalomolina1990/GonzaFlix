import React from "react";
import "../App.css";
import "../movies.json";
import axios from "axios";
import { Router, Switch, Route, Link } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import Navigation from "./Navigation";

const Peliculas = () => {
  const [movies, setMovies] = React.useState(null);
  const [moviesNotFound, setMoviesNotFound] = React.useState(null);

  const [page, setPage] = React.useState(1);
  const initialUrl = "inicial";

  const [url, setUrl] = React.useState(initialUrl);

  React.useEffect(() => {
    const getMovie = async () => {
      const response = await axios.get(url + `&page=` + page);
      setMovies(response.data.results);
      setMoviesNotFound(response.data);
    };
    getMovie();
  }, [url, page]);

  function handlePage(p) {
    if (p === "prev" && page === 1) {
      console.log("seteo page a 1");
      setPage(1);
    } else {
      if (p === "prev") {
        console.log(p);
        console.log(page);
        var newPage = page - 1;
        console.log(newPage);
        setPage(newPage);
      }

      if (p === "next" && page === moviesNotFound.total_pages) {
        console.log("seteo page a 1");
        setPage(moviesNotFound.total_pages);
      } else {
        if (p === "next") {
          console.log(p);
          console.log(page);
          var newPage = page + 1;
          console.log(newPage);
          setPage(newPage);
        }
      }
    }
  }

  function searchUrl(param) {
    setPage(1);
    if (param === "") {
      console.log("vacio");
      setUrl(initialUrl);
    } else {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=21bd46e3f30777507fb8db745f8eade6&language=en-US&query=${param}&include_adult=false`;
      setUrl(url);
    }
  }

  console.log(url);

  return (
    <>
      <form className="bgMain">
        <Navigation />

        <div className="formContainer">
          <div className="container">
            <h1>¡Tus películas favoritas!</h1>
            <h3>Puedes buscarlas aquí</h3>
            <input
              type="text"
              id="search"
              onChange={(event) => searchUrl(event.target.value)}
            />
          </div>
        </div>
      </form>

      <div className="container">
        {url === "inicial" && (
          <>
            <div className="container mt-5">
              <div className="row mt-3">
                <div className="col mt-3">
                  <h3>Aquí aparecerán tus resultados: ¡A buscar!</h3>
                </div>
              </div>
            </div>
          </>
        )}

        {moviesNotFound && moviesNotFound.results.length == 0 && (
          <>
            <div className="container mt-5">
              <div className="row mt-3">
                <div className="col mt-3">
                  <h3>No hay resultados</h3>
                </div>
              </div>
            </div>
          </>
        )}
        {!movies && url !== "inicial" && (
          <>
            <div className="container mt-5">
              <div className="row mt-5">
                <div className="col mt-5">
                  <h3>Cargando...</h3> <Spinner animation="border" />{" "}
                </div>
              </div>
            </div>
          </>
        )}

        {movies && url !== "inicial" && (
          <ul>
            {movies.map((movie) => {
              if (movie.poster_path !== null) {
                return (
                  <li className="poster">
                    <Link to={`/pelicula/${movie.id}`}>
                      <img
                        src={
                          `https://image.tmdb.org/t/p/original` +
                          movie.poster_path
                        }
                        className="posterImage imgFluid"
                      />
                    </Link>
                  </li>
                );
              } else {
                return (
                  <li className="poster">
                    <Link to={`/pelicula/${movie.id}`}>
                      <div className="posterReplace">{movie.title}</div>
                    </Link>
                  </li>
                );
              }
            })}
          </ul>
        )}

        {url !== "inicial" && (
          <>
            <nav aria-label="Page navigation example">
              <ul class="pagination">
                <li class="page-item">
                  <i class="page-link btn" onClick={() => handlePage("prev")}>
                    Previous
                  </i>
                </li>

                <li class="page-item">
                  <i class="page-link btn" onClick={() => handlePage("next")}>
                    Next
                  </i>
                </li>
              </ul>
            </nav>
          </>
        )}
      </div>
    </>
  );
};

export default Peliculas;
