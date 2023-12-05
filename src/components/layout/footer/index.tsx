import Image from 'next/image';
import Container from '../container';
import styles from './index.module.scss';
import Images from '@/assets/images';
import Link from 'next/link';
// import { ServicesData, ServicesDetailData } from '@/data/servicesData';
// import { ProductsData } from '@/data/productsData';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.widgets}>
          <div className={styles.widget}>
            <Link href={'/'}>
              <Image src={Images.Logo} width={80} height={80} alt="Logo" />
            </Link>
            <p>Special Boilerplate Website.</p>
          </div>
          <div className={styles.widget}>
            <div className={styles.title}>Blogs</div>
            <ul>
              <li>
                <Link href={'#'}>Zart</Link>
              </li>
              <li>
                <Link href={'#'}>Zurt</Link>
              </li>
              <li>
                <Link href={'#'}>Zort</Link>
              </li>
              <li>
                <Link href={'#'}>Zirt</Link>
              </li>
            </ul>
          </div>
          <div className={styles.widget}>
            <div className={styles.title}>Contact</div>
            <ul>
              <li>
                <Link href={'mailto:hello@balance.software'}>
                  furkan.llhan@hotmail.com
                </Link>
              </li>
              <li>
                <Link href={'mailto:hello@balance.software'}>
                  furkanilhanresmi@gmail.com
                </Link>
              </li>
              <li>
                <Link href={'#'}>+90 545 663 19 49</Link>
              </li>
              <li>Türkiye / Istanbul</li>
            </ul>
          </div>
        </div>
        <div className={styles.copyright}>
          <p>
            2023 © All rights reserved by <span>MURKI</span>.
          </p>
        </div>
      </Container>
    </footer>
  );
}
