import React, { useState } from 'react';
import Input from '../atoms/Input';
import Button from '../atoms/Button';

interface SearchBarProps {
    onSearch: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [value, setValue] = useState('');

    const handleSearchClick = () => {
        onSearch(value);
        setValue('');
    };
    const handleKeyPress=(key: string)=>{
        if(key==='Enter'){
            onSearch(value);
            setValue('');
        }
    }

    return (
        <div className="search-bar">
            <Input
                type="text"
                placeholder="Search for a movie"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={(e)=> handleKeyPress(e.key)} 
            />
            <Button 
                onClick={handleSearchClick} 
                className="search-button" 
                insideTxt="Search"
            />
        </div>
    );
};

export default SearchBar;
