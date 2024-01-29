'use client';
import React from 'react';
import Card from '../card';
import Container from '../../layout/container';
import styles from './index.module.scss';
import Animated from '@/components/animated';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';

export default function CardList(props: any) {
  return (
    <React.Fragment>
      <Container>
        <div className={styles.card_list_container}>
          <Animated delay={200} type="slide">
            <h1>
              <span>
                {props?.title.substring(0, props?.title.indexOf(' '))}
              </span>{' '}
              {props?.title.substring(props?.title.indexOf(' ') + 1)}
            </h1>
          </Animated>

          <Animated delay={200} type="slide">
            <div className={styles.card_list}>
              <Swiper
                effect={'slide'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                loop={true} // Add loop prop to make it infinite
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
                {props?.data?.map((x: any, index: number) => (
                  <SwiperSlide
                    key={index}
                    style={{
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      width: '560px',
                      height: '300px',
                      borderRadius: '10px',
                      overflow: 'hidden',
                      marginLeft: '12px',
                    }}>
                    <div className={styles.card_handler}>
                      <Link href={`/${x.id}`}>
                        <Card
                          title={x?.title}
                          description={x?.description}
                          thumbnail={x?.thumbnail}
                          little_desc={x?.little_desc}
                          link={x?.link}
                        />
                      </Link>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </Animated>
        </div>
      </Container>
    </React.Fragment>
  );
}
