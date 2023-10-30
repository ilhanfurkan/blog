import React from 'react';
import Card from '../card';
import Container from '../../layout/container';
import styles from './index.module.scss';

export default function CardList(props: any) {
  return (
    <React.Fragment>
      <Container>
        <div className={styles.card_list_container}>
          <h1>
            <span>{props?.title.substring(0, props?.title.indexOf(' '))}</span>{' '}
            {props?.title.substring(props?.title.indexOf(' ') + 1)}
          </h1>
          <div className={styles.card_list}>
            {props?.data?.map((x: any) => (
              <div className={styles.card_handler}>
                <Card
                  title={x?.title}
                  description={x?.description}
                  thumbnail={x?.thumbnail}
                  link={x?.link}
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
}
