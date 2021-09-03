import React from 'react';
import { useParams } from 'react-router-dom';
//import components
import BreadCrumb from './BreadCrumb';
import Spinner from './Spinner';
import MovieInfo from './MovieInfo';
// import custom hooks dari useMovieFetch
import { useMovieFetch } from '../hooks/useMovieFetch';

const Movie = () => {
    const { movieId } = useParams();

    const { state: movie, loading, error } = useMovieFetch(movieId);

    if(loading) return <Spinner />
    if(error) return <div>Something went wrong</div>
    // console.log(movie);
    return (
        <>
            <BreadCrumb movieTitle={movie.original_title} />
            <MovieInfo movie={movie} />
        </>
    )
}

export default Movie;