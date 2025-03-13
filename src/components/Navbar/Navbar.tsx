import Link from 'next/link';
import styles from './Navbar.module.css';
import Image from 'next/image';
import logo from '../../../public/img/branding/white-full-logo.svg';
import login from '../../../public/img/login/login.svg';


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
          <li className={styles.navLink}><Link href="/FAQs" >FAQs</Link></li>
          <li className={styles.navLink}><Link href="/contact">Contact</Link></li>
          <li className={styles.navLink}><Link href="/login" >  <Image
                      src={login}
                      alt="Login icon svg"
                      width={35}
                      height={35}
                      className='image'
                    /></Link></li>

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
