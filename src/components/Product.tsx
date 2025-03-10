import { getProducts } from "../../lib/get-products";

export const Products = async () => {
    const { products } = await getProducts({ categoryId: 'chaqueta' }); // Asumiendo que no necesitamos filtrar por categoría inicialmente


    return (
        <section className="products">
            <h2 className="products-title">Our Products</h2>
            <div className="products-grid">
                {products.map((product) => (
                    <div key={product.slug} className="product-item">
                        <img src={product.image} alt={product.name} className="product-image" />
                        <h3 className="product-name">{product.name}</h3>
                        <p className="product-description">{product.description}</p>
                        <p className="product-price">${product.price}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};
