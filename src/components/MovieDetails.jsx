import React from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import Navigation from "./Navigation";
import Spinner from "react-bootstrap/Spinner";
import { useHistory } from "react-router-dom";

const MovieDetails = () => {
  let { id } = useParams();

  const [movie, setMovie] = React.useState(null);

  React.useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=0ca0a104f5ec9c17c25607de5593b3c5&language=en-US&external_source=imdb_id`
      )
      .then((response) => {
        setMovie(response.data);
      });
  }, [id]);

  let history = useHistory();

  return (
    <>
      <Navigation />

      {!movie && (
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
      {movie && (
        <div className="container">
          <div className="row mt-5">
            <div className="col-md-4 mt-5">
              <img
                src={`https://image.tmdb.org/t/p/original` + movie.poster_path}
                className="modalPoster"
              />
            </div>
            <div className="col-md-8 mt-5">
              <h1>{movie.title}</h1>
              <h3>Fecha de estreno: {movie.release_date}</h3>
              <p>{movie.overview}</p>
              <p>
                <h4>Rating: {movie.vote_average}</h4>
              </p>

              <button className="btn btn-dark" onClick={() => history.goBack()}>
                Volver al inicio
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MovieDetails;
