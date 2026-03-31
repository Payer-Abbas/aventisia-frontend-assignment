import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  icon: Icon, 
  iconPosition = 'left',
  ...props 
}) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-200 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';
  
  const variants = {
    primary: 'bg-primary text-white hover:bg-opacity-90 hover:shadow-lg hover:shadow-primary/20 focus:ring-primary',
    secondary: 'bg-secondary text-white hover:bg-opacity-90 hover:shadow-lg hover:shadow-secondary/20 focus:ring-secondary',
    outline: 'border border-gray-300 bg-transparent hover:bg-gray-50 text-gray-700',
    ghost: 'bg-transparent hover:bg-gray-100 text-gray-600',
    icon: 'bg-transparent hover:bg-gray-100 text-gray-600 p-2',
  };
  
  const sizes = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base',
  };

  const variantStyle = variants[variant] || variants.primary;
  const sizeStyle = variant === 'icon' ? '' : (sizes[size] || sizes.md);

  return (
    <button 
      className={`${baseStyles} ${variantStyle} ${sizeStyle} ${className}`}
      {...props}
    >
      {Icon && iconPosition === 'left' && <Icon className={`w-4 h-4 ${children ? 'mr-2' : ''}`} />}
      {children}
      {Icon && iconPosition === 'right' && <Icon className={`w-4 h-4 ${children ? 'ml-2' : ''}`} />}
    </button>
  );
};

export default Button;
