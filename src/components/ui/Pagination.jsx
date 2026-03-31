import React from 'react';
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';

const Pagination = ({ rowCount, currentPage, totalPages, rowsPerPage, onPageChange, onRowsPerPageChange }) => {
  const isFirst = currentPage === 1;
  const isLast = currentPage === totalPages;

  return (
    <div className="bg-white border-t border-gray-100 px-8 py-4 flex items-center justify-between mt-auto">
      <div className="text-xs font-semibold text-gray-500">
        {rowCount} row(s)
      </div>

      <div className="flex items-center space-x-8">
        {/* Rows per page */}
        <div className="flex items-center space-x-2">
          <span className="text-[11px] font-bold text-gray-500">Rows per page</span>
          <div className="relative">
            <select
              value={rowsPerPage}
              onChange={(e) => onRowsPerPageChange(e.target.value)}
              className="appearance-none bg-white border border-gray-100 rounded px-3 py-1 text-[11px] font-bold text-gray-700 pr-8 focus:outline-none cursor-pointer"
            >
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={50}>50</option>
            </select>
            <ChevronRight className="absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 text-gray-400 rotate-90 pointer-events-none" />
          </div>
        </div>

        {/* Page controls */}
        <div className="flex items-center space-x-4">
          <span className="text-[11px] font-bold text-gray-600">
            page {currentPage} of {totalPages}
          </span>
          <div className="flex items-center space-x-1">
            <button
              onClick={() => onPageChange(1)}
              disabled={isFirst}
              className="p-1 border border-gray-100 rounded text-gray-400 transition-colors disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-50"
            >
              <ChevronsLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => onPageChange(currentPage - 1)}
              disabled={isFirst}
              className="p-1 border border-gray-100 rounded text-gray-400 transition-colors disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-50"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => onPageChange(currentPage + 1)}
              disabled={isLast}
              className="p-1 border border-gray-100 rounded text-gray-400 transition-colors disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-50"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onPageChange(totalPages)}
              disabled={isLast}
              className="p-1 border border-gray-100 rounded text-gray-400 transition-colors disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-50"
            >
              <ChevronsRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
