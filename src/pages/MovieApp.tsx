import React, { useEffect } from 'react';
import MovieAppTemplate from '../components/templates/MovieAppTemplate';
// import { Movie } from '../types/movie';
import { fetchMovies } from '../utils/api';
import useMovie from '../customHooks/hooks/MovieHooks';
import usePage from '../customHooks/hooks/PageHook';

const MovieApp: React.FC = () => {
    // const [movies, setMovies] = useState<Movie[]>([]);
    // const [page, setPage] = useState(1);
    // const [totalPageNumber, setTotalPageNumber] = useState(1);
    // const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

    const moviesContxt = useMovie();
    const pageContxt = usePage();
    console.log(pageContxt.totalPageNumber);
    // console.log(pageContxt);
    useEffect(() => {
        const fetchInitialMovies = async () => {
            console.log(pageContxt?.page);
            const data = await fetchMovies(pageContxt?.page);
            console.log(data.total_pages);
            moviesContxt?.setMovies(data.results);
            pageContxt.setTotalPageNumber(data.total_pages);
        };
        fetchInitialMovies();
    }, [pageContxt?.page]);

    return (
        <MovieAppTemplate/>
    );
};

export default MovieApp;
