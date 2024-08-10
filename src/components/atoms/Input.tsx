import React from 'react';

interface InputProps {
    type?: string;
    placeholder?: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
    onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void ;
}

const Input: React.FC<InputProps> = ({ type, placeholder, value, onChange, className, onKeyDown }) => (
    <input 
        type={type} 
        placeholder={placeholder} 
        value={value} onChange={onChange} 
        className={className} 
        onKeyDown={onKeyDown} 
    />
);

export default Input;

