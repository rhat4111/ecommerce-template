import React from 'react';

const Button = ({
  children,
  color = 'default',
  className,
  fullWidth,
  onClick,
  size = 'lg'
}) => {
  const themeStyles = {
    default: 'bg-theme text-white',
    dark: 'bg-[#03041c] text-white'
  }

  const sizeStyles = {
    lg: 'font-medium text-2xl h-[72px]'
  }

  return <button
    onClick={onClick}
    className={`${themeStyles[color]} ${sizeStyles[size]} ${fullWidth ? `w-full` : `w-auto`} px-5 transition hover:opacity-80 ${className}`}
  >
    {children}
  </button>
}

export default Button;