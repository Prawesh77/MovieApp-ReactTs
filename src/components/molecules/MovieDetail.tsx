import React from 'react';
import { Movie } from '../../types/movie';

interface MovieDetailProps {
    movie: Movie;
    onBack: () => void;
}

const MovieDetail: React.FC<MovieDetailProps> = ({ movie, onBack }) => (
    <div className="">
        <p className="back_to_search" onClick={onBack}>Back to Discover</p>
        <div className="detail_secDiv">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <div className="detail_detailsDiv">
                <h2>{movie.title}</h2>
                <p className="detail_overview">{movie.overview}</p>
                <p><b>Rating:</b> {movie.vote_average}</p>
                <p><b>Release Date:</b> {movie.release_date}</p>
            </div>
        </div>
        
    </div>
);

export default MovieDetail;
