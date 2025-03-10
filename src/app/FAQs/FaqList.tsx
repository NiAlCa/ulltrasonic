'use client';

import { useState } from 'react';
import styles from './FAQs.module.css';
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

export default function FaqList({ faqs }) {
  const [expandedItems, setExpandedItems] = useState<number[]>([]); // First item expanded by default

  const toggleItem = (index: number) => {
    setExpandedItems(prev => {
      if (prev.includes(index)) {
        return prev.filter(item => item !== index);
      } else {
        return [...prev, index];
      }
    });
  };

  return (
    <>
      {faqs.map((faq, index) => (
        <div key={index} className={`${styles.faqItem} ${expandedItems.includes(index) ? styles.open : ''}`}>
          <div
            className={`${styles.question} ${expandedItems.includes(index) ? styles.open : ''}`}
            onClick={() => toggleItem(index)}
          >
            {faq.title}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`${styles.icon} ${expandedItems.includes(index) ? styles.open : ''}`}
            >
              <path d="M6 9L12 15L18 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className={`${styles.answer} ${expandedItems.includes(index) ? styles.open : ''}`}>
            {typeof faq.content === 'string' ? (
              <p>{faq.content}</p>
            ) : (
              <BlocksRenderer content={faq.content} />
            )}
          </div>
        </div>
      ))}
    </>
  );
}
