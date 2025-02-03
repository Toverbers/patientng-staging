import { ChevronLeft, ChevronRight } from "lucide-react";
import { CustomButton } from "../CustomButton";

export function Pagination({ currentPage, totalPages, onPageChange }) {
    return (
      <div className="flex items-center justify-between">
        <CustomButton 
          variant="ghost" 
          size="sm" 
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          Prev
        </CustomButton>
        <span className="text-sm text-gray-600">
          Page {currentPage} to {totalPages}
        </span>
        <CustomButton 
          variant="ghost" 
          size="sm"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
          <ChevronRight className="h-4 w-4 ml-1" />
        </CustomButton>
      </div>
    )
  }