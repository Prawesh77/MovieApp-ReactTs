import React from 'react';
import SearchBar from '../molecules/SearchBar';
import MovieGrid from '../organisms/MovieGrid';
import Pagination from '../molecules/Pagination';
import { Movie } from '../../types/movie';
import { searchMovies } from '../../utils/api';
import MovieDetail from '../molecules/MovieDetail';
import useMovie from '../../customHooks/hooks/MovieHooks';
import usePage from '../../customHooks/hooks/PageHook';

// interface MovieAppTemplateProps {
//     page: number;
//     totalPageNumber: number;
//     setMovies: React.Dispatch<React.SetStateAction<Movie[]>>;
//     setPage: React.Dispatch<React.SetStateAction<number>>;
// }

const MovieAppTemplate: React.FC= () => {
    const moviesFromContext = useMovie();
    const pageFromContext = usePage();

    if(moviesFromContext===undefined){
        return
    }
    
    const handleSearch = async (query: string) => {
        const data = await searchMovies(query);
        moviesFromContext?.setMovies(data.results);
    };

    const handlePageChange = (page: number) => {
        console.log("clicked");
        pageFromContext.setPage && pageFromContext.setPage(page);
        console.log(pageFromContext.page), "after clicked";
    };

    const handleMovieClick = (movie: Movie) => {
        console.log(movie);
        moviesFromContext.setSelectedMovie && moviesFromContext?.setSelectedMovie(movie);
    };

    const handleBackToDiscover = () => {
        moviesFromContext.setSelectedMovie && moviesFromContext?.setSelectedMovie(undefined);
    };

    return (
        <div className="movie">
            <SearchBar onSearch={handleSearch} />
            <Pagination  onPageChange={handlePageChange} />
            <MovieDetail onBack={handleBackToDiscover}/>
            <MovieGrid  onMovieClick={handleMovieClick}/>   
            
            {/* {moviesFromContext.selectedMovie?
                    <MovieDetail onBack={handleBackToDiscover}/>
                :(
                    <>
                        <Pagination  onPageChange={handlePageChange} />
                        <MovieGrid  onMovieClick={handleMovieClick}/>
                    </>
                )      
            }           */}

        </div>
    );
};

export default MovieAppTemplate;
