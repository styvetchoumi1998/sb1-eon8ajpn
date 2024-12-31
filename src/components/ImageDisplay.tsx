import React from 'react';

interface ImageDisplayProps {
  src: string;
  alt: string;
  className?: string;
}

export function ImageDisplay({ src, alt, className = '' }: ImageDisplayProps) {
  return (
    <img 
      src={src} 
      alt={alt}
      className={`max-w-full h-auto ${className}`}
      loading="lazy"
    />
  );
}