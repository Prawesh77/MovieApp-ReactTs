import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../atoms/Icon';
import {logo_path} from '../../constants';

const NavBar: React.FC = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.body.classList.toggle('dark_mode');
    };

    return (
        <nav>
            <img src={logo_path} alt="Logo" />
            <ul>
                <li><Link to="/">Movie App</Link></li>
            </ul>
            <Icon name={darkMode ? 'bxs-toggle-right' : 'bx-toggle-left'} onClick={toggleDarkMode} />
        </nav>
    );
};

export default NavBar;

