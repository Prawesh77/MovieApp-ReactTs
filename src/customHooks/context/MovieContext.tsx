import React from "react";
import { Movie } from "../../types/movie";

export interface MovieContextType {
    movies: Movie[];
    setMovies: React.Dispatch<React.SetStateAction<Movie[]>>;
    selectedMovie: Movie | undefined;
    setSelectedMovie: React.Dispatch<React.SetStateAction<Movie | undefined>>;
}
const initialMovieContextType={
    movies: [],
    setMovies: ()=>{},
    selectedMovie: undefined,
    setSelectedMovie: ()=>{},
}

const MovieContext = React.createContext<MovieContextType>(initialMovieContextType);

export default MovieContext;