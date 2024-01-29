import styles from './index.module.scss';

export interface propsType {
  title: string;
  description: string;
  thumbnail: string;
  little_desc: string;
  link?: string;
}

export default function Card(props: propsType) {
  return (
    <div className={styles.card_container}>
      <div className={styles.card_content}>
        <div className={styles.card_thumbnail}>
          <img src={props.thumbnail} />
        </div>
        <div className={styles.card_text_handler}>
          <h2 className={styles.card_title}>{props.title}</h2>
          <p
            className={styles.card_description}
            dangerouslySetInnerHTML={{ __html: props?.little_desc || '' }}
          />
        </div>
      </div>
    </div>
  );
}
