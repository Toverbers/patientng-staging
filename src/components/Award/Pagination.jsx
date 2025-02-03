import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";

export function Pagination({ currentPage, totalPages }) {
    return (
      <div className="flex items-center justify-between mt-8">
        <Button variant="ghost" className="flex items-center gap-2">
          <ChevronLeft className="w-4 h-4" /> Prev
        </Button>
        <span className="text-sm text-gray-600">
          Page {currentPage} to {totalPages}
        </span>
        <Button variant="ghost" className="flex items-center gap-2">
          Next <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    )
  }