import React from 'react';

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

function IconButton({ className = '', onClick, children, ...props }: IconButtonProps) {
  return (
    <button className={`mr-2 text-xl ${className}`} onClick={onClick} {...props}>
      {children}
    </button>
  );
}

export default IconButton;
