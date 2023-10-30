import Link from 'next/link';
import styles from './index.module.scss';

type ButtonProps = {
  title: string;
  variant?: 'primary' | 'secondary';
  icon?: string;
  tinyColor?: string;
  iconColor?: string;
  iconWidth?: number;
  iconHeight?: number;
  mt?: number;
  mb?: number;
  fullWidth?: boolean;
  size?: 'sm' | 'md' | 'lg';
  style?: any;
  link?: string;
};
export default function Button({ ...props }: ButtonProps) {
  return (
    <Link
      href={props?.link || '#'}
      data-size={props?.size}
      className={`${styles.button} ${props?.variant}`}
      style={{
        ...props?.style,
        marginTop: props?.mt || 0,
        marginBottom: props?.mb || 0,
        width: props?.fullWidth ? '100%' : 'fit-content',
        color: props?.tinyColor ? props?.tinyColor : '#fff',
      }}>
      {props?.title}
    </Link>
  );
}
