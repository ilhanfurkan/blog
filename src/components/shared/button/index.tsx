import Link from 'next/link';
import styles from './index.module.scss';
import React from 'react';

type ButtonProps = {
  title: string;
  // The css for these parameters are contained in the globals.css.
  variant?: 'primary' | 'secondary' | 'text' | 'bordered';
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
  typeButton: 'normal' | 'link';
};
export default function Button({ ...props }: ButtonProps) {
  return (
    <React.Fragment>
      {props?.typeButton === 'link' ? (
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
      ) : (
        <button
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
        </button>
      )}
    </React.Fragment>
  );
}
