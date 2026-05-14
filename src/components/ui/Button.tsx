import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  children: React.ReactNode;
}

/**
 * TODO: Add design — primary: orange fill; outline: orange border; ghost: text only.
 * TODO: Add focus-visible ring for accessibility.
 */
export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  className = '',
  ...props
}) => {
  return (
    <button
      className={`button button--${variant} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
