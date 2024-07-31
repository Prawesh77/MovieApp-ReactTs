import React from 'react';

interface ButtonProps {
    onClick: () => void;
    children: React.ReactNode;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, children, className }) => (
    <button onClick={onClick} className={className}>
        {children}
    </button>
);

export default Button;


// interface IButton {
//     type: 'button' | 'submit' | 'reset'
//     icon?: React.ReactNode
//     buttonText: string
//     onClick?: () => void;
//   }
//   const Button: React.FC<IButton> = ({ type, icon, buttonText, onClick }) => {
//     return (
//       <button className='flex items-center justify-center border-2 border-gray-500  rounded-md p-1 w-full' type={type} onClick={onClick}>
//         {icon}
//         <span className='text-sm md:text-base  '>{buttonText}</span>
//       </button>
//     )
//   }
  
//   export default Button
  