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

export default function LandingPageBanner() {
  return (
    <div className={styles.hero}>
      <Container>
        <div className={styles.inner}>
          <div className={styles.text_area}>
            <Animated delay={200} type="slide">
              <h1>
                <span>Main</span> Page Enter
              </h1>
            </Animated>
            <Animated delay={200} type="slide">
              <p>little description</p>
            </Animated>
            <Animated delay={200} type="slide">
              <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                coverflowEffect={{
                  rotate: 50,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: true,
                }}
                pagination={true}
                modules={[Autoplay, EffectCoverflow, Pagination]}
                className="mySwiper"
                style={{
                  width: '100%',
                  paddingTop: '50px',
                  paddingBottom: '50px',
                }}>
                <SwiperSlide
                  style={{
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    width: '600px',
                    height: '340px',
                    borderRadius: '10px',
                    overflow: 'hidden',
                  }}>
                  <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                </SwiperSlide>
                <SwiperSlide
                  style={{
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    width: '600px',
                    height: '340px',
                    borderRadius: '10px',
                    overflow: 'hidden',
                  }}>
                  <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                </SwiperSlide>
                <SwiperSlide
                  style={{
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    width: '600px',
                    height: '340px',
                    borderRadius: '10px',
                    overflow: 'hidden',
                  }}>
                  <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                </SwiperSlide>
                <SwiperSlide
                  style={{
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    width: '600px',
                    height: '340px',
                    borderRadius: '10px',
                    overflow: 'hidden',
                  }}>
                  <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                </SwiperSlide>
                <SwiperSlide
                  style={{
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    width: '600px',
                    height: '340px',
                    borderRadius: '10px',
                    overflow: 'hidden',
                  }}>
                  <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                </SwiperSlide>
                <SwiperSlide
                  style={{
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    width: '600px',
                    height: '340px',
                    borderRadius: '10px',
                    overflow: 'hidden',
                  }}>
                  <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
                </SwiperSlide>
                <SwiperSlide
                  style={{
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    width: '600px',
                    height: '340px',
                    borderRadius: '10px',
                    overflow: 'hidden',
                  }}>
                  <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
                </SwiperSlide>
                <SwiperSlide
                  style={{
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    width: '600px',
                    height: '340px',
                    borderRadius: '10px',
                    overflow: 'hidden',
                  }}>
                  <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
                </SwiperSlide>
                <SwiperSlide
                  style={{
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    width: '600px',
                    height: '340px',
                    borderRadius: '10px',
                    overflow: 'hidden',
                  }}>
                  <img src="https://swiperjs.com/demos/images/nature-3.jpg" />

                  {/* <Image
                  src={Images.OnDokuz}
                  width={136}
                  height={400}
                  alt="Logo"
                /> */}
                </SwiperSlide>
              </Swiper>
            </Animated>
          </div>
        </div>
      </Container>
    </div>
  );
}
