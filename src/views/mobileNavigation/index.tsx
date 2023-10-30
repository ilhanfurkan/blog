import Link from 'next/link';
import styles from './index.module.scss';
import { MenuProps } from '../hamburgerMenu';

export default function MobileNavigation(props: MenuProps) {
  return (
    <ul className={styles.menu}>
      <li>
        <Link href={'/about'} onClick={() => {
          props?.setVisible(false);
        }}>About Us</Link>
      </li>
      <li>
        <Link href={'/services'} onClick={() => {
          props?.setVisible(false);
        }}>Services</Link>
      </li>
      <li>
        <Link href={'/products'} onClick={() => {
          props?.setVisible(false);
        }}>Products</Link>
      </li>
    </ul>
  );
}
