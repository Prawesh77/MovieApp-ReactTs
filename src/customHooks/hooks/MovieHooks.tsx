import { useContext } from "react";
import MovieContext, { MovieContextType } from "../context/MovieContext";

function useMovie(): MovieContextType | undefined{
    return useContext(MovieContext)
}

export default useMovie;