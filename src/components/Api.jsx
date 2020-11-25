import React from "react";
import axios from "axios";

export default function GetMovies(page) {
  const [movie, setMovie] = React.useState(null);
  React.useEffect(() => {
    const getMovie = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=21bd46e3f30777507fb8db745f8eade6&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`
      );
      setMovie(response.data.results);
      console.log("busco");
    };
    getMovie();
  }, []);
  return movie;
}
