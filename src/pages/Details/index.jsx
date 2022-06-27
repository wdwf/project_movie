import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Container } from "./styles";

export default function Details() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.PM_API_KEY}&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => {
        const {title, poster_path, overview, release_date} = data;
        
        const movie = {
          id,
          title,
          overview,
          image: `${import.meta.env.PM_PATH_IMAGE}${poster_path}`,
          releaseDate: release_date,
        };

        setMovie(movie);
      });
  }, [id]);

  return (
    <Container>
      <div className="movie">
        <img src={movie.image} alt={movie.title} />
        <div className="details">
          <h2>{movie.title}</h2>
          <span>Sinopse:{movie.overview}</span>
          <span className="release-date">
            Release Date: {movie.releaseDate}
          </span>
          <Link to="/">
            <button>Go back</button>
          </Link>
        </div>
      </div>
    </Container>
  );
}
