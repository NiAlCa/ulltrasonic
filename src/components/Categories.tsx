import Link from 'next/link';
import { getCategories } from "../../lib/get-categories";

export const Categories = async () => {
    const categories = await getCategories();

    if (categories.length === 0) return null;

    return (
        <section className="categories">
            <h1 className="categories-title">Categories</h1>
            <ul className="categories-list">
                {categories.map((category) => (
                    <li key={category.slug} className="category-item">
                        <Link href={`/Categories/${category.slug}`} className="category-link">
                            <h2 className="category-name">{category.name}</h2>
                            <p className="category-description">{category.description}</p>
                            <img src={category.image} alt={category.name} className="category-image" />
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    );
};
