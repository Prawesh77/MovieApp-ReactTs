import React from 'react';
import { Movie } from '../../types/movie';

interface MovieItemProps {
    movie: Movie;
    onClick: () => void;
}

const MovieItem: React.FC<MovieItemProps> = ({ movie, onClick }) => (
    <div className="movie-item" onClick={onClick}>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        <h3>{movie.original_title}</h3>
        <p>Rating: {movie.vote_average}</p>
        <p>Release Date: {movie.release_date}</p>
    </div>
);

export default MovieItem;

