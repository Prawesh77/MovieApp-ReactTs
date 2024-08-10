import React from 'react';
import useMovie from '../../customHooks/hooks/MovieHooks';
import Button from '../atoms/Button';

interface MovieDetailProps {
    onBack: () => void;
}

const MovieDetail: React.FC<MovieDetailProps> = ({ onBack }) => {

    const movieFromContext = useMovie();
    const movie=movieFromContext?.selectedMovie;
    if(!movie){
        return ;
    }
    const searchGoogle=()=>{
        window.open(`https://www.google.com/search?q=${movie.title}`, "_blank", "noreferrer" );
    }


    return(
    
        <div className="one_movie_detail">
            <p className="back_to_discover" onClick={onBack}>Back to Discover</p>
            <div className="detail_secDiv">
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                <div className="detail_detailsDiv">
                    <h2>{movie.title}</h2>
                    <p className="detail_overview">{movie.overview}</p>
                    <p><b>Rating:</b> {movie.vote_average}</p>
                    <p><b>Release Date:</b> {movie.release_date}</p>
                    <Button onClick={searchGoogle}  insideTxt='Search On Google' className='search-button'></Button>
                </div>
                
            </div>
            
        </div>
    )
}

    

export default MovieDetail;
