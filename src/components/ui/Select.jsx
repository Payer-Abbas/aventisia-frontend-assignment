import React from 'react';
import { ChevronDown } from 'lucide-react';

const Select = ({ 
  label, 
  error, 
  options = [], 
  className = '', 
  ...props 
}) => {
  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1.5 font-semibold">
          {label} {props.required && <span className="text-red-500 font-bold">*</span>}
        </label>
      )}
      <div className="relative">
        <select
          className={`
            block w-full border border-gray-200 rounded-lg text-sm transition-all appearance-none
            focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
            disabled:bg-gray-50 disabled:text-gray-500
            pl-3 pr-10 py-2
            ${error ? 'border-red-500 focus:ring-red-500' : ''}
          `}
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
          <ChevronDown className="h-4 w-4 text-gray-400" />
        </div>
      </div>
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
};

export default Select;
