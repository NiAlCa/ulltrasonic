'use client';

import React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

const SortBy: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentSort = searchParams.get('sort') || '';

  const handleSortClick = () => {
    let newSort: string;
    if (currentSort === '') {
      newSort = 'price:asc';
    } else if (currentSort === 'price:asc') {
      newSort = 'price:desc';
    } else {
      newSort = '';
    }

    const params = new URLSearchParams(searchParams);
    if (newSort) {
      params.set('sort', newSort);
    } else {
      params.delete('sort');
    }

    router.push(`?${params.toString()}`);
  };

  return (
    <div className="sort-by mb-4">
      <button
        onClick={handleSortClick}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Sort by Price: {currentSort === 'price:asc' ? '↑' : currentSort === 'price:desc' ? '↓' : '-'}
      </button>
    </div>
  );
};

export default SortBy;
