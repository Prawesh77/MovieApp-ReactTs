import React from 'react';

interface ButtonProps {
    onClick: () => void;
    insideTxt: string; //children: React.ReactNode use garey yo comp call garda <Button>Search</Button>, search comes as children
    className?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, insideTxt, className }) => (
    <button onClick={onClick} className={className}>
        {insideTxt}
    </button>
);

export default Button;
  