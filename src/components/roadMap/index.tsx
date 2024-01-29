import React from 'react';
import styles from './index.module.scss';
import Container from '../layout/container';
import RoadMapCard from '../shared/roadMapCard';
import Animated from '../animated';

const dummyData = [
  {
    title: 'nananana',
    description:
      'babababab ababa baba ababa asd asdasdasdas asd asdasdas asd asdasdas dasd asda ad asdasdas dasd asd asdadasd asd asd asd asd asd asd asd babababab ababa baba ababa asd asdasdasdas asd asdasdas asd asdasdas dasd asda ad asdasdas dasd asd asdadasd asd asd asd asd asd asd asd babababab ababa baba ababa asd asdasdasdas asd asdasdas asd asdasdas dasd asda ad asdasdas dasd asd asdadasd asd asd asd asd asd asd asd babababab ababa baba ababa asd asdasdasdas asd asdasdas asd asdasdas dasd asda ad asdasdas dasd asd asdadasd asd asd asd asd asd asd asd',
    subtitle: 'lalallala',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
  },
  {
    title: 'dadada',
    description:
      'babababab ababa baba ababa asd asdasdasdas asd asdasdas asd asdasdas dasd asda ad asdasdas dasd asd asdadasd asd asd asd asd asd asd asd babababab ababa baba ababa asd asdasdasdas asd asdasdas asd asdasdas dasd asda ad asdasdas dasd asd asdadasd asd asd asd asd asd asd asd babababab ababa baba ababa asd asdasdasdas asd asdasdas asd asdasdas dasd asda ad asdasdas dasd asd asdadasd asd asd asd asd asd asd asd babababab ababa baba ababa asd asdasdasdas asd asdasdas asd asdasdas dasd asda ad asdasdas dasd asd asdadasd asd asd asd asd asd asd asd',
    subtitle: 'Kakaka',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
  },
  {
    title: 'Babaa',
    description:
      'klasjdklasfjalksfj lkasjflk asjflkaj aslkf jalskfjaslkfjalskfja lksfjalks jfla',
    subtitle: 'Nenene',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
  },
  {
    title: 'Zezeze',
    description:
      'sdasdas asd asdasdas dasd asda ad asdasdas dasd asd asdadasd asd asd asd asd asd asd asd babababab ababa baba ababa asd asdasdasdas asd asdasdas asd asdasdas dasd asda ad asdasdas dasd asd asdadasd asd asd asd asd asd asd asd babababab ababa baba ababa asd asdasdasdas asd asdasdas asd asdasdas dasd asda ad asdasdas dasd asd asdadasd asd asd asd asd asd asd asd',
    subtitle: 'Tetete',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
  },
];

function RoadMap(props: any) {
  return (
    <Container>
      <div className={styles.title_holder}>
        <Animated delay={200} type="slide">
          <h1>
            <span>{props?.title.substring(0, props?.title.indexOf(' '))}</span>{' '}
            {props?.title.substring(props?.title.indexOf(' ') + 1)}
          </h1>
        </Animated>
      </div>
      <div className={styles.roadmap_container}>
        {dummyData.map((x, index) => (
          <Animated delay={200} type="slide">
            <div className={styles.holder}>
              <div
                className={
                  index % 2 === 0 ? styles.stepLeft : styles.stepRight
                }>
                <RoadMapCard
                  title={x.title}
                  description={x.description}
                  subtitle={x.subtitle}
                  icon={x.icon}
                />
              </div>
            </div>
          </Animated>
        ))}
      </div>
    </Container>
  );
}

export default RoadMap;
