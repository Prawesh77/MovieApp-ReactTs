import React, {useState} from 'react';
import SearchBar from '../molecules/SearchBar';
import MovieGrid from '../organisms/MovieGrid';
import Pagination from '../molecules/Pagination';
import { Movie } from '../../types/movie';
import { searchMovies } from '../../utils/api';
import MovieDetail from '../molecules/MovieDetail';

interface MovieAppTemplateProps {
    movies: Movie[];
    page: number;
    totalPageNumber: number;
    setMovies: React.Dispatch<React.SetStateAction<Movie[]>>;
    setPage: React.Dispatch<React.SetStateAction<number>>;
}

const MovieAppTemplate: React.FC<MovieAppTemplateProps> = ({
    movies,
    page,
    totalPageNumber,
    setMovies,
    setPage,
}) => {
    const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
    
    const handleSearch = async (query: string) => {
        const data = await searchMovies(query);
        setMovies(data.results);
    };

    const handlePageChange = (page: number) => {
        setPage(page);
    };

    const handleMovieClick = (movie: Movie) => {
        console.log(movie);
        setSelectedMovie(movie);
    };

    const handleBackToDiscover = () => {
        setSelectedMovie(null);
    };

    return (
        <div className="movie">
            <SearchBar onSearch={handleSearch} />
            {selectedMovie?
                    <MovieDetail movie={selectedMovie} onBack={handleBackToDiscover}/>
                :(
                    <>
                        <Pagination page={page} totalPageNumber={totalPageNumber} onPageChange={handlePageChange} />
                        <MovieGrid movies={movies} onMovieClick={handleMovieClick}/>
                    </>
                )      
            }          

        </div>
    );
};

export default MovieAppTemplate;
