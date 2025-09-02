import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  text?: string;
}

export default function LoadingSpinner({ size = 'md', text = 'Loading...' }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  const textSizes = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-background to-secondary/20 dark:from-background dark:to-secondary/10">
      <div className="relative">
        {/* Outer ring */}
        <div className={`${sizeClasses[size]} border-4 border-muted rounded-full animate-pulse`} style={{ animationDuration: '2s' }}></div>
        
        {/* Spinning ring */}
        <div className={`${sizeClasses[size]} border-4 border-transparent border-t-primary rounded-full absolute top-0 left-0 animate-spin`} style={{ animationDuration: '2s' }}></div>
        
        {/* Inner dot */}
        <div className={`${sizeClasses[size === 'lg' ? 'lg' : 'md']} bg-primary rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse`} style={{ animationDuration: '2s' }}></div>
      </div>
      
      {/* Loading text */}
      <div className="mt-6 text-center">
        <p className={`${textSizes[size]} font-medium text-muted-foreground animate-pulse`} style={{ animationDuration: '2s' }}>
          {text}
        </p>
        
        {/* Animated dots */}
        <div className="flex justify-center mt-2 space-x-1">
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDuration: '2s', animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDuration: '2s', animationDelay: '667ms' }}></div>
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDuration: '2s', animationDelay: '1333ms' }}></div>
        </div>
      </div>
      
      {/* Brand/logo with website colors */}
      <div className="mt-8 text-center">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
          Clothy
        </h1>
      </div>
    </div>
  );
}
