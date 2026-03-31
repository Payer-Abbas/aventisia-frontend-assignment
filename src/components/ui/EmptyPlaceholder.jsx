import React from 'react';
import Button from './Button';

const EmptyPlaceholder = ({ icon: Icon, title, description, showBackButton, onBackClick }) => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center text-gray-400 bg-white">
      {Icon && <Icon className="w-16 h-16 mb-4 text-primary opacity-20" />}
      <h2 className="text-xl font-bold text-gray-900 mb-1">{title}</h2>
      <p className="text-sm font-medium tracking-wide text-gray-400">{description}</p>
      {showBackButton && (
        <Button
          variant="ghost"
          className="mt-6 text-primary font-bold text-xs"
          onClick={onBackClick}
        >
          Back to Knowledge Base
        </Button>
      )}
    </div>
  );
};

export default EmptyPlaceholder;
