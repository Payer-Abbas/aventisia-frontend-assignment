import React from 'react';
import { MoreVertical } from 'lucide-react';

const KnowledgeCard = ({ title, description, date }) => {
  return (
    <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-full group">
      <div>
        <div className="flex justify-between items-start mb-3">
          <h3 className="font-semibold text-gray-900 group-hover:text-primary transition-colors truncate pr-2">
            {title}
          </h3>
          <button className="text-gray-400 hover:text-gray-600 p-1 -m-1 rounded-full hover:bg-gray-50 transition-colors">
            <MoreVertical className="w-4 h-4" />
          </button>
        </div>
        <p className="text-xs text-gray-500 leading-relaxed mb-6 line-clamp-4">
          {description}
        </p>
      </div>
      
      <div className="pt-4 border-t border-gray-50 flex items-center justify-between text-[10px] text-gray-400 font-medium">
        <span>Created On: {date}</span>
      </div>
    </div>
  );
};

export default KnowledgeCard;
