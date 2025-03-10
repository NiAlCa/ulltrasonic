import Link from 'next/link';

export function Pagination(
    { page, pageSize, pageCount, total, baseUrl }:
    { page: number, pageSize: number, pageCount: number, total: number, baseUrl: string }
){
    const isFirstPage = page === 1;
    const isLastPage = page === pageCount;

    const prevPage = page - 1;
    const nextPage = page + 1;

    const prevPageUrl = isFirstPage ? "#" : `${baseUrl}?page=${prevPage}`;
    const nextPageUrl = isLastPage ? "#" : `${baseUrl}?page=${nextPage}`;

    return (
        <div className="flex justify-center items-center space-x-4 my-8">
            <Link href={prevPageUrl}>
                <button
                    className={`px-4 py-2 rounded ${isFirstPage ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600 text-white'}`}
                    disabled={isFirstPage}
                >
                    Previous
                </button>
            </Link>
            <span>Page {page} of {pageCount}</span>
            <Link href={nextPageUrl}>
                <button
                    className={`px-4 py-2 rounded ${isLastPage ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600 text-white'}`}
                    disabled={isLastPage}
                >
                    Next
                </button>
            </Link>
        </div>
    )
}

// Esta constante puede ser movida a un archivo de configuración si se usa en múltiples lugares

export default Pagination;
