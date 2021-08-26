import React from 'react';
import { useParams } from 'react-router-dom';
//import data yang diambil
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';
//import components
import BreadCrumb from './BreadCrumb';
import Grid from './Grid';
import Spinner from './Spinner';
import MovieInfo from './MovieInfo';
// import custom hooks dari useMovieFetch
import { useMovieFetch } from '../hooks/useMovieFetch';
//import image not found
import NoImage from '../images/no_image.jpg';
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