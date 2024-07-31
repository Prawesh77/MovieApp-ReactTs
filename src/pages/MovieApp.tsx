import React, { useState, useEffect } from 'react';
import MovieAppTemplate from '../components/templates/MovieAppTemplate';
import { Movie } from '../types/movie';
import { fetchMovies } from '../utils/api';

const MovieApp: React.FC = () => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [page, setPage] = useState(1);
    const [totalPageNumber, setTotalPageNumber] = useState(1);
    // const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

    useEffect(() => {
        const fetchInitialMovies = async () => {
            const data = await fetchMovies(page);
            setMovies(data.results);
            setTotalPageNumber(data.total_pages);
        };
        fetchInitialMovies();
    }, [page]);

    return (
        <MovieAppTemplate
            movies={movies}
            page={page}
            totalPageNumber={totalPageNumber}
            setPage={setPage}
            setMovies={setMovies}
        />
    );
};

export default MovieApp;
