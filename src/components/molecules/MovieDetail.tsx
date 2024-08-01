import React from 'react';
import useMovie from '../../customHooks/hooks/MovieHooks';

interface MovieDetailProps {
    onBack: () => void;
}

const MovieDetail: React.FC<MovieDetailProps> = ({ onBack }) => {

    const movieFromContext = useMovie();
    const movie=movieFromContext?.selectedMovie;
    if(!movie){
        return ;
    }
    return(
    
        <div className="one_one">
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
    )
}

    

export default MovieDetail;
