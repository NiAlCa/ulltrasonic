'use client'

import React, { useState } from 'react';
import styles from './contact.module.css';
import dino from '../../../public/img/contact/dino.svg';
import Image from 'next/image';
import ContactPopup from './ContactPopup';

const ContactPage: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className={styles.page}>
      {!isPopupOpen && (
        <div className={styles.container}>
          <div className={styles.image}>
            <Image
              src={dino}
              alt={'Dino'}
              fill={true}
              className={styles.imageContent}
            />
          </div>
          <div className={styles.contact}>
            <h1>Contact Us</h1>
            <p>General Inquiries/Troubleshooting</p>
            <button className={styles.helpButton} onClick={handleOpenPopup}>
              How can we help you?
            </button>
          </div>
        </div>
      )}
      <ContactPopup isOpen={isPopupOpen} onClose={handleClosePopup} />
    </div>
  );
};

export default ContactPage;


