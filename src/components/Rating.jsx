import React from "react";
import "../App.css";
import "../movies.json";
import axios from "axios";
import { Router, Switch, Route, Link } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import Navigation from "./Navigation";

const Rating = () => {
  const [movies, setMovies] = React.useState(null);
  const [moviesNotFound, setMoviesNotFound] = React.useState(null);

  const [page, setPage] = React.useState(1);
  const initialUrl = `https://api.themoviedb.org/3/discover/movie?api_key=21bd46e3f30777507fb8db745f8eade6&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false`;

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

  function searchRating(param) {
    if (param === "") {
      console.log("rating vacio");
      setPage(1);
    } else if (url) {
      const rateSearch = `&vote_average.lte=${param}&vote_count.gte=10&sort_by=vote_average.desc`;
      setUrl(initialUrl + rateSearch);
    }
  }

  function ratingStars(id) {
    for (let i = 1; i <= id; i++) {
      document.getElementById(i).className = "fas fa-star starButton";
    }

    for (let i = id + 1; i <= 5; i++) {
      document.getElementById(i).className = "far fa-star starButton";
    }
    searchRating(id * 2);
  }

  function resetRating() {
    searchRating("");
  }

  return (
    <>
      <form className="bgMain">
        <Navigation />

        <div className="formContainer">
          <div className="container">
            <h1>¡Tus películas favoritas!</h1>

            <div className="rateStars">
              <h5>Filtrar por Rating</h5>
              <i
                className="far fa-star starButton"
                id="1"
                onClick={() => ratingStars(1)}
              ></i>
              <i
                className="far fa-star starButton"
                id="2"
                onClick={() => ratingStars(2)}
              ></i>
              <i
                className="far fa-star starButton"
                id="3"
                onClick={() => ratingStars(3)}
              ></i>
              <i
                className="far fa-star starButton"
                id="4"
                onClick={() => ratingStars(4)}
              ></i>
              <i
                className="far fa-star starButton"
                id="5"
                onClick={() => ratingStars(5)}
              ></i>
              <p>
                <button
                  className="btn btn-dark rounded mt-2"
                  onClick={() => resetRating()}
                >
                  Reestablecer
                </button>
              </p>
            </div>
          </div>
        </div>
      </form>

      <div className="container">
        {moviesNotFound && moviesNotFound.results.length === 0 && (
          <>
            <div className="container mt-5">
              <div className="row mt-3">
                <div className="col mt-3">
                  <h2>No hay resultados</h2>
                </div>
              </div>
            </div>
          </>
        )}
        {!movies && (
          <>
            <div className="container mt-5">
              <div className="row mt-5">
                <div className="col mt-5">
                  <h2>Cargando...</h2> <Spinner animation="border" />{" "}
                </div>
              </div>
            </div>
          </>
        )}

        {movies && (
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
      </div>
    </>
  );
};

export default Rating;
