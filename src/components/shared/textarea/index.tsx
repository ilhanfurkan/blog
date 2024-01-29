import styles from './index.module.scss';

type TextareaProps = {
  label?: string;
  placeholder?: string;
  onChange?: (e?: React.ChangeEvent<HTMLTextAreaElement>) => void;
  value?: string;
};

export default function Textarea(props: TextareaProps) {
  return (
    <div className={styles.input_group}>
      {props?.label && <label>{props?.label}</label>}
      <textarea
        placeholder={props?.placeholder}
        className={styles.input}
        onChange={props?.onChange}
        value={props.value}
      />
    </div>
  );
}
