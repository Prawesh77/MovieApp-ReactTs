import React from 'react';
import SearchBar from '../molecules/SearchBar';
import MovieGrid from '../organisms/MovieGrid';
import MovieDetail from '../molecules/MovieDetail';
import Pagination from '../molecules/Pagination';
import { Movie } from '../../types/movie';
import { searchMovies } from '../../utils/api';

interface MovieAppTemplateProps {
    movies: Movie[];
    page: number;
    totalPageNumber: number;
    selectedMovie: Movie | null;
    setMovies: React.Dispatch<React.SetStateAction<Movie[]>>;
    setPage: React.Dispatch<React.SetStateAction<number>>;
    setSelectedMovie: React.Dispatch<React.SetStateAction<Movie | null>>;
}

const MovieAppTemplate: React.FC<MovieAppTemplateProps> = ({
    movies,
    page,
    totalPageNumber,
    selectedMovie,
    setMovies,
    setPage,
    setSelectedMovie,
}) => {
    const handleSearch = async (query: string) => {
        const data = await searchMovies(query);
        setMovies(data.results);
    };

    const handlePageChange = (page: number) => {
        setPage(page);
    };

    const handleMovieClick = (movie: Movie) => {
        setSelectedMovie(movie);
    };

    const handleBackToDiscover = () => {
        setSelectedMovie(null);
    };

    return (
        <div className="movie">
            <SearchBar onSearch={handleSearch} />
            {selectedMovie ? (
                <MovieDetail movie={selectedMovie} onBack={handleBackToDiscover} />
            ) : (
                <>
                    <Pagination page={page} totalPageNumber={totalPageNumber} onPageChange={handlePageChange} />
                    <MovieGrid movies={movies} onMovieClick={handleMovieClick} />
                    
                </>
            )}
        </div>
    );
};

export default MovieAppTemplate;
