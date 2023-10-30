'use client';
import Image from 'next/image';
import Container from '../container';
import styles from './index.module.scss';
import Images from '@/assets/images';
import Navigation from '@/views/navigation';
import HamburgerMenu from '@/views/hamburgerMenu';
import Button from '@/components/shared/button';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [scrollY, setScrollY] = useState(0);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [headerBg, setHeaderBg] = useState(true);
  const [visible, setVisible] = useState<Boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollThreshold = 200;

      if (currentScrollY > scrollY) {
        setIsHeaderVisible(false);
      } else if (
        currentScrollY < scrollY - scrollThreshold ||
        currentScrollY === 0
      ) {
        setIsHeaderVisible(true);
      } else {
        setIsHeaderVisible(true);
      }

      if (currentScrollY < scrollY - scrollThreshold || currentScrollY === 0) {
        setHeaderBg(true);
      } else {
        setHeaderBg(false);
      }

      setScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollY]);

  return (
    <>
      <header
        className={`
        ${styles.header} 
        ${!isHeaderVisible && styles.active}
        ${!headerBg && styles.bgColor}`}>
        <Container>
          <div className={styles.inner}>
            <div className={styles.logo}>
              <Link href={'/'}>
                <Image src={Images.Logo} width={80} height={80} alt="Logo" />
              </Link>
            </div>
            <div
              className={styles.hamburger_menu}
              onClick={() => {
                setVisible(!visible);
              }}>
              <Image
                src={Images.HamburgerMenu}
                width={28}
                height={36}
                alt="hamburger menu"
              />
            </div>
            <Navigation />
            <div className={styles.right_buttons}>
              <Button
                title="Feedback"
                variant="primary"
                link="mailto:hello@balance.software"
              />
            </div>
          </div>
        </Container>
      </header>
      <HamburgerMenu visible={visible} setVisible={setVisible} />
    </>
  );
}
