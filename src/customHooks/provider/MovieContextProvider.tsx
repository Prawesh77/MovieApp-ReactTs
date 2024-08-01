import React, { useState } from 'react'
import MovieContext from '../context/MovieContext'
import { Movie } from '../../types/movie';

interface MovieContextProviderProps{
    children: React.ReactNode
}


const MovieContextProvider: React.FC<MovieContextProviderProps> = ({ children }) => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [selectedMovie, setSelectedMovie] = useState<Movie>();

    const movieContextValue={
        movies, setMovies, selectedMovie, setSelectedMovie
    }

    return (
        <MovieContext.Provider value={movieContextValue}>
            {children}
        </MovieContext.Provider>
    );
}

export default MovieContextProvider