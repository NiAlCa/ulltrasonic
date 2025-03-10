import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';
import logo from '../../../public/img/branding/white-logo.svg'

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Left section - links */}
        <div className={styles.linksSection}>
          <div className={styles.linkGroup}>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/contact">Contact</Link>
          </div>

          <div className={styles.linkGroup}>
            <Link href="/terms">Terms Of Use & Service</Link>
            <Link href="/FAQs">FAQs</Link>
          </div>
        </div>

        {/* Center section - logo */}
        <div className={styles.logoSection}>
          <div>
            <Link href="/">
              <Image
                src={logo} // Replace with the path to your logo
                alt="UltraSonic"
                width={100}
                height={100}
                className={styles.logo}
              />
            </Link>
          </div>
          <div className={styles.copyright}>
        <p>Copyright © {new Date().getFullYear()}. All right reserved by Ultrasonic.</p>
      </div>
        </div>

        {/* Right section - social media icons */}
        <div className={styles.socialSection}>
          <p>ICONOS REDES SOCIALES</p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
