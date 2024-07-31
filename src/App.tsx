import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieApp from './pages/MovieApp';
import NavBar from './components/templates/NavBar';
import './styles/movie.css';
import './styles/navbar.css';
import MovieDetail from './components/molecules/MovieDetail';

const App: React.FC = () => {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<MovieApp />} />
                <Route path="/movieDetail" element={<MovieDetail />} />
            </Routes>
        </Router>
    );
};

export default App;
