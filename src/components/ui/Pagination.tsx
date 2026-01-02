import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalItems,
  itemsPerPage,
  onPageChange,
}: PaginationProps) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  if (totalPages <= 1) return null;

  const hasPrevious = currentPage > 1;
  const hasNext = currentPage < totalPages;

  return (
    <div className="flex justify-center items-center gap-8">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={!hasPrevious}
        className={`p-2.5 rounded-lg border transition-all
          ${hasPrevious
            ? 'hover:bg-gray-100 text-gray-700'
            : 'text-gray-300 border-gray-200 cursor-not-allowed'
          }`}
        aria-label="Previous page"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <div className="px-5 py-2.5 bg-gray-400 text-black rounded-lg font-bold text-lg min-w-[48px] text-center shadow-md">
        {currentPage}
      </div>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={!hasNext}
        className={`p-2.5 rounded-lg border transition-all
          ${hasNext
            ? 'hover:bg-gray-100 text-gray-700'
            : 'text-gray-300 border-gray-200 cursor-not-allowed'
          }`}
        aria-label="Next page"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
}