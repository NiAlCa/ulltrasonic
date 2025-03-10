import React from 'react';
import { getProducts } from '../../../../lib/get-products';
import { getCategories } from '../../../../lib/get-categories';
import ProductCard from '../../../components/ProductCard';
import { Pagination } from '../../../components/Pagination';

const PAGE_SIZE = 100; // Ajusta este valor según tus necesidades

export default async function CategoryPage({
  params,
  searchParams
}: {
  params: { CategoryPage: string },
  searchParams: { [key : string]: string  }
}) {
  const categorySlug = params.CategoryPage;
  const currentPage = searchParams && searchParams.page
  ? parseInt(searchParams.page, 10)
  : 1;
  if (!categorySlug) {
    return <div>Category not found</div>;
  }

  try {
    const { products, pagination } = await getProducts({
      categoryId: categorySlug,
      page: currentPage,
      pageSize: PAGE_SIZE
    });
    const categories = await getCategories();

    return (
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-4">Products in {categorySlug}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
        <Pagination
          page={pagination.page}
          pageSize={pagination.pageSize}
          pageCount={pagination.pageCount}
          total={pagination.total}
          baseUrl={`/Categories/${categorySlug}`}
        />
      </div>
    );
  } catch (error) {
    console.error('Error fetching category data:', error);
    return <div>Error loading category data</div>;
  }
}
