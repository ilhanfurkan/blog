import Container from '@/components/layout/container';
import Button from '@/components/shared/button';
import styles from './index.module.scss';
import Image from 'next/image';
import Images from '@/assets/images';
import MobileNavigation from '@/views/mobileNavigation';
import Link from 'next/link';
export type MenuProps = {
  visible?: any;
  setVisible?: any;
};

export default function HamburgerMenu(props: MenuProps) {
  return (
    <div className={`${styles.menu} ${props?.visible && styles.menu_open}`}>
      <div
        className={styles.close}
        onClick={() => {
          props?.setVisible(false);
        }}>
        {/* <Image src={Images.Close} width={35} height={35} alt="close" /> */}
      </div>
      <div className={styles.inner}>
        <div>
          <Container>
            <div className={styles.logo}>
              <Link href={'/'}>
                {/* <Image
                  src={Images.BalanceLogo}
                  width={200}
                  height={40}
                  alt="logo"
                /> */}
              </Link>
            </div>
            <MobileNavigation
              visible={props?.visible}
              setVisible={props?.setVisible}
            />
          </Container>
        </div>
        <Container>
          <Button title="Get Started" variant="primary" fullWidth={true} />
        </Container>
      </div>
    </div>
  );
}
