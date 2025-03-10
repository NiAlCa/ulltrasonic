import Link from 'next/link';
import styles from './Navbar.module.css';
import Image from 'next/image';
import logo from '../../../public/img/branding/white-full-logo.svg';


const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Image
            src={logo}
            alt="Ultra sonic logo white"
            width={250}
            height={100}
          />
        </Link>
        <ul className={styles.navLinks}>
          <li><Link href="/FAQs" className={styles.navLink}>FAQs</Link></li>
          <li><Link href="/contact" className={styles.navLink}>Contact</Link></li>

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
