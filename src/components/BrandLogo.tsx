import React from 'react';

interface BrandLogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'header';
  size?: 'sm' | 'md' | 'lg';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  variant = 'light',
  size = 'md',
}) => {
  const sizeClasses = {
    sm: 'h-8 w-auto',
    md: 'h-12 w-auto',
    lg: 'h-16 w-auto',
  }[size];

  return (
    <div className={`flex items-center ${className}`}>
      <img
        src="/logo.jpg"
        alt="Bullet Impex logo"
        className={sizeClasses}
        style={{ objectFit: 'contain' }}
      />
    </div>
  );
};
