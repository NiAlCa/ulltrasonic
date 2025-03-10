import React from 'react';
import Link from 'next/link';
import { getCategories } from '../../../lib/get-categories';
import styles from './Categories.module.css';

export default async function CategoriesPage() {
  const categories = await getCategories();

  return (
    <div>
      <div className={styles.container}>
        <h1 className={styles.title}>Product Categories</h1>
        <div className={styles.grid}>
          {categories.map((category) => (
            <Link href={`/Categories/${category.slug}`} key={category.slug}>
              <div className={styles.card}>
                <img
                  src={category.image}
                  alt={category.name}
                  className={styles.cardImage}
                />
                <div className={styles.cardContent}>
                  <h2 className={styles.cardTitle}>{category.name}</h2>
                  <p className={styles.cardDescription}>{category.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
