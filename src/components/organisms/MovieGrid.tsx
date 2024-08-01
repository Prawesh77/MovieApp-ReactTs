import React from 'react';
import MovieItem from '../molecules/MovieItem';
import { Movie } from '../../types/movie';
import useMovie from '../../customHooks/hooks/MovieHooks';

interface MovieGridProps {
    onMovieClick: (movie: Movie) => void;
}

const MovieGrid: React.FC<MovieGridProps> = ({onMovieClick}) => {

    const movieFromContext = useMovie();
    if(movieFromContext=== undefined){
        return;
    }
    console.log(movieFromContext.movies);
return(
    <div className="movie-grid">
        {movieFromContext.movies.map((movie) => (
                <MovieItem key={movie.id} movie={movie} onClick={() => onMovieClick(movie)} />
            
        ))}
    </div>
)

};

export default MovieGrid;
