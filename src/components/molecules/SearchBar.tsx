import React, { useState } from 'react';
import Input from '../atoms/Input';
import Button from '../atoms/Button';

interface SearchBarProps {
    onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSearchClick = () => {
        onSearch(query);
    };

    return (
        <div className="search-bar">
            <Input
                type="text"
                placeholder="Search for a movie"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <Button onClick={handleSearchClick} className="search-button" insideTxt="Search"/>
                {/* Search
            </Button> */}
        </div>
    );
};

export default SearchBar;
