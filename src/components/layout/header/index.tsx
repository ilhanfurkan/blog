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
import React from 'react';
import FeedbackModal from '@/components/modal/feedback';

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

  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  console.log(isOpen,"isOone")

  return (
    <React.Fragment>
      <header
        className={`
        ${styles.header} 
        ${!isHeaderVisible && styles.active}
        ${!headerBg && styles.bgColor}`}>
        <FeedbackModal isOpen={isOpen} handleIsOpen={() => handleIsOpen()} />
        <Container>
          <div className={styles.inner}>
            <div className={styles.logo}>
              <Link href={'/'}>
                <Image src={Images.Logo} width={52} height={52} alt="Logo" />
              </Link>
            </div>

            <div
              className={styles.hamburger_menu}
              onClick={() => {
                setVisible(!visible);
              }}>
              {/* <Image
                src={Images.HamburgerMenu}
                width={28}
                height={36}
                alt="hamburger menu"
              /> */}
            </div>
            <div className={styles.blog_name}>My Blog</div>
            <div className={styles.right_buttons}>
              <Button
                typeButton="normal"
                title="Feedback"
                variant="secondary"
                onClick={() => handleIsOpen()}
              />
            </div>
          </div>
        </Container>
      </header>
      <HamburgerMenu visible={visible} setVisible={setVisible} />
    </React.Fragment>
  );
}
