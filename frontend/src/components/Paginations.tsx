'use client';

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { useContext, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ClothesContext } from '@/context/ClothesContext';

export const Paginations = () => {
  const { clothesData } = useContext(ClothesContext) || {};
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil((clothesData?.length ?? 0) / 8);

  const goToPage = (page: number) => {
    setCurrentPage(page);
    router.push(`?page=${page}`);
  };

  const handleNext = () => {
    const nextPage = currentPage < totalPages ? currentPage + 1 : 1;
    goToPage(nextPage);
  };

  const handlePrevious = () => {
    const previousPage = currentPage > 1 ? currentPage - 1 : totalPages;
    goToPage(previousPage);
  };

  return (
    <div className='w-[1344px] mx-auto overflow-hidden py-5'>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious onClick={handlePrevious} />
          </PaginationItem>
          {[...Array(totalPages)].map((_, index) => (
            <PaginationItem key={index}>
              <PaginationLink
                isActive={currentPage === index + 1}
                onClick={() => goToPage(index + 1)}
              >
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext onClick={handleNext} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};
