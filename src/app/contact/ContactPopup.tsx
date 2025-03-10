import React from 'react';
import styles from './contact.module.css';

interface ContactPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactPopup: React.FC<ContactPopupProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={styles.popupOverlay} onClick={handleOverlayClick}>
      <div className={styles.popup}>
        <button className={styles.closeButton} onClick={onClose}>
          X
        </button>
        <h1>Contact Us</h1>
        <p>General Inquiries/Troubleshooting</p>
        <form className={styles.form}>
          <label className={styles.formLabel}>
            <p>Full name</p>
            <input type="text" required className={styles.formInput} />
          </label>
          <label className={styles.formLabel}>
            <p>Email</p>
            <input type="email" required className={styles.formInput} />
          </label>
          <button type="submit" className={styles.formButton}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPopup;
