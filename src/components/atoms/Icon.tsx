import React from 'react';

interface IconProps {
    name: string;
    onClick?: () => void;
    className?: string;
}

const Icon: React.FC<IconProps> = ({ name, onClick }) => (
    <i className={`bx ${name}`} onClick={onClick}></i>
);

export default Icon;
