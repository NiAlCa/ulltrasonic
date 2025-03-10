// src/app/FAQs/page.tsx (Server Component)
import styles from './FAQs.module.css';
import { getFaqs } from '../../../lib/get-faqs';
import FaqList from './FaqList';

export default async function FAQs() {
  const faqs = await getFaqs();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>FAQS</h1>
      <FaqList faqs={faqs} />
    </div>
  );
}
