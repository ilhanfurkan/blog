import Link from 'next/link';
import styles from './index.module.scss';
import { usePathname } from 'next/navigation';
type NavigationProps = {
  visible?: any;
};
export default function Navigation(props: NavigationProps) {
  const pathname = usePathname();

  return (
    <ul
      className={`${styles.menu}
      }`}>
      <li>
        <Link href={'/'}>Main Page</Link>
      </li>
      <li>
        <Link href={'/blog'}>Blogs</Link>
      </li>
      <li>
        <Link href={'/galery'}>My Galery</Link>
      </li>
    </ul>
  );
}
