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
              {/* <Image
                src={Images.BalanceLogo}
                width={250}
                height={60}
                alt="Footer Logo"
              /> */}
            </Link>
            <p>Custom Software Development Company.</p>
          </div>
          <div className={styles.widget}>
            <div className={styles.title}>Services</div>

          </div>
          <div className={styles.widget}>
            <div className={styles.title}>Products</div>

          </div>
          <div className={styles.widget}>
            <div className={styles.title}>Contact Us</div>
            <ul>
              <li>
                <Link href={'mailto:hello@balance.software'}>
                  hello@balance.software
                </Link>
              </li>
              <li>
                <Link href={'#'}>+90 212 890 9590</Link>
              </li>
              <li>
                Head Quarter: 19 Mayıs Mh. 19 Mayıs Cd. UBM Plaza No: 37/21
                Şişli/İstanbul Türkiye
              </li>
              <li>Branch: Batman Teknokent</li>
              <li>Lithuania & BVI & Türkiye</li>
            </ul>
          </div>
        </div>
        <div className={styles.copyright}>
          <p>
            2023 © All rights reserved by <span>Balance Software</span>.
          </p>
        </div>
      </Container>
    </footer>
  );
}
