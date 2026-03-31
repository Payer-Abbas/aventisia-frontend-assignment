import React from 'react';
import { X } from 'lucide-react';
import Button from './Button';

/**
 * Generic slide-in drawer container.
 * Accepts a title, subtitle, and any children (e.g. a form).
 * The submit button uses the HTML form attribute to trigger the child form.
 */
const CreateDrawer = ({ isOpen, onClose, title, subtitle, formId, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-25 backdrop-blur-sm" onClick={onClose} />
      <div className="absolute inset-y-0 right-0 max-w-full flex">
        <div className="w-screen max-w-xl bg-white shadow-xl flex flex-col h-full">

          {/* Header */}
          <div className="px-6 py-6 border-b border-gray-100 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-1">{title}</h2>
              {subtitle && <p className="text-xs text-gray-500 font-medium italic">{subtitle}</p>}
            </div>
            <button onClick={onClose} className="p-2 -m-2 text-gray-400 hover:text-gray-600 rounded-md transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content slot */}
          {children}

          {/* Footer */}
          <div className="p-6 border-t border-gray-100 flex justify-end">
            <Button
              type="submit"
              form={formId}
              className="w-24 h-10 tracking-wide font-semibold text-sm"
            >
              Create
            </Button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CreateDrawer;
