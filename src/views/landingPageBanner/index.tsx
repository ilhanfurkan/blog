'use client';

import styles from './index.module.scss';
import Container from '@/components/layout/container';
// import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import Image from 'next/image';
import Images from '@/assets/images';
import { Swiper, SwiperSlide } from 'swiper/react';
import Animated from '@/components/animated';
import Button from '@/components/shared/button';

export default function LandingPageBanner() {
  return (
    <div className={styles.hero}>
      <Container>
        <div className={styles.text_area}>
          <h1>
            <Animated delay={200} type="slide">
              <span>Main</span> Page Enter
            </Animated>
          </h1>
            <p className={styles.desc}>little description</p>
            {/* <Button
              variant="primary"
              title={'Contact Us'}
              typeButton={'normal'}
              size="lg"
            /> */}
            <div className={styles.empty}></div>
        </div>
      </Container>
    </div>
  );
}
