import { Container, MovieList, Movie } from './styles'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.PM_API_KEY}&language=en-US&page=1`)
        .then(response => response.json())
        .then(data => setMovies(data.results))
        .catch( error => console.log(error))
    }, [])

    return (
        <Container>
            <h1>Movies</h1>
            <MovieList>
                {
                    movies.map(({id, title, poster_path}) => {
                        return (
                            <Movie key={id}>
                                <Link to={`/details/${id}`}>
                                    <img src={`${import.meta.env.PM_PATH_IMAGE}${poster_path}`} alt={title} />
                                </Link>
                                <span>{title}</span>
                            </Movie>
                        )
                    })
                }
            </MovieList>
        </Container>
    )
}