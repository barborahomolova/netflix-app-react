import "./Movie.css";
import data from "../data";
import MovieDeleteButton from "./MovieDeleteButton";
import AllDeleteButton from "./AllDeleteButton";
import ReloadMovieButton from "./ReloadMovieButton";
import { useState } from "react";

const Movie = () => {
  const [movieList, setMovieList] = useState(data);
  const deleteOneMovie = (idecko) => {
    const filteredMovies = movieList.filter((oneMovie) => {
      return oneMovie.id !== idecko;
    });
    setMovieList(filteredMovies);
  };

  const deleteAllMovies = () => {
    setMovieList([]);
  };

  const reloadAllMovies = () => {
    setMovieList(data);
  };

  return (
    <section>
      <div className="all-movies">
        {movieList.map((oneMovie) => {
          //misto data jsem dala movieList - to je ten obnoveny seznam filmu
          //z data se vezme prvni prvek pole a ulozi pod oneMovie (ktery jsem si nazvala podle sebe)
          //udelam destructuring - rozdelim prvky pole (objekty) na jednotlive parametry, diky tomu muzu pak pouzit ty nazvy v kodu a napsat co to ma treba vratit
          const { id, image, title, age, tags, description } = oneMovie;
          //key je identifikator, v tomto pripade id
          return (
            <div className="one-movie" key={id}>
              <img src={image} alt="" />
              <h2>{title}</h2>
              <p>{age}</p>
              <p>{tags}</p>
              <p>{description}</p>
              <MovieDeleteButton deleteMovie={() => deleteOneMovie(id)} />
            </div>
          );
        })}
      </div>
      <div className="button-box">
        {/* pošlu props do komponent buttons */}
        <AllDeleteButton deleteMovies={deleteAllMovies} />
        <ReloadMovieButton reloadMovies={reloadAllMovies} />
      </div>
    </section>
  );
};
export default Movie;
