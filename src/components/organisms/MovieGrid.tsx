import React from 'react';
import MovieItem from '../molecules/MovieItem';
import { Movie } from '../../types/movie';

interface MovieGridProps {
    movies: Movie[];
    onMovieClick: (movie: Movie) => void;
}

const MovieGrid: React.FC<MovieGridProps> = ({ movies, onMovieClick }) => (
    <div className="movie-grid">
        {movies.map((movie) => (
            <MovieItem key={movie.id} movie={movie} onClick={() => onMovieClick(movie)} />
        ))}
    </div>
);

export default MovieGrid;
