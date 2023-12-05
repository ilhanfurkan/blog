import React from 'react';
import Card from '../card';
import Container from '../../layout/container';
import styles from './index.module.scss';
import Animated from '@/components/animated';
import Link from 'next/link';

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
              {props?.data?.map((x: any) => (
                <div className={styles.card_handler}>
                  <Link href={`/${x.id}`}>
                    <Card
                      title={x?.title}
                      description={x?.description}
                      thumbnail={x?.thumbnail}
                      link={x?.link}
                    />
                  </Link>
                </div>
              ))}
            </div>
          </Animated>
        </div>
      </Container>
    </React.Fragment>
  );
}
