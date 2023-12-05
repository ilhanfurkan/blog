import styles from './index.module.scss';

export interface propsType {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
}

export default function RoadMapCard(props: propsType) {
  return (
    <div className={styles.card_container}>
      <div className={styles.card_content}>
        <div className={styles.card_text_handler}>
          <h2 className={styles.card_title}>{props.title}</h2>
          <h5 className={styles.card_subtitle}>{props.subtitle}</h5>
          <p className={styles.card_description}>{props.description}</p>
        </div>
      </div>
    </div>
  );
}
