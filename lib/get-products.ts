import { query } from "./strapi";

const { STRAPI_HOST } = process.env;


export async function getProducts(
  { categoryId, sort, pageSize, page }:
  { categoryId: string, sort: string | undefined, pageSize: number, page: string | undefined }
  ) {
  try {
    let url = `products?filters[product_category][slug][$contains]=${categoryId}&populate=*`;
    if(page) url += `&pagination[page]=${page}`;
    if(pageSize) url += `&pagination[pageSize]=${pageSize}`;
    if(sort) url += `&sort=${sort}`;
    const res = await query(url);
    //console.log('API response:', JSON.stringify(res, null, 2));  // Log para depuración

    if (!res.data) {
      console.error('No data returned from API');
      return { products: [], pagination: {} };
    }

    const products = res.data.map(product => {
     // console.log('Product:', JSON.stringify(product, null, 2));  // Log para depuración

      const { name, slug, description, price } = product;
      const imageUrl = product.images && product.images[0] ? product.images[0].url : null;
      return {
        name,
        slug,
        description,
        price,
        image: imageUrl ? `${STRAPI_HOST}${imageUrl}` : null
      };
    });

    //console.log('Processed products:', JSON.stringify(products, null, 2));  // Log para depuración

    return { products, pagination: res.meta?.pagination || {} };
  } catch (error) {
    console.error('Error fetching products:', error);
    return { products: [], pagination: {} };
  }
}
