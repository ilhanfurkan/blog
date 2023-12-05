'use client';
import React, { useEffect, useRef, useState } from 'react';
import styles from './animated.module.scss';

// hooks
import { useOnScreen } from '@/helpers/hooks/useOnScreen';

interface AnimatedProps {
  type?: 'fade' | 'slide';
  delay?: number;
  disableOverflow?: boolean;
  children: React.ReactNode;
}

export default function Animated(props: AnimatedProps) {
  const ref: any = useRef<HTMLDivElement>(null);
  const isVisible: boolean = useOnScreen(ref, '-100px');

  const [isAnimated, setIsAnimated] = useState(false);

  // marked as animated before
  useEffect(() => {
    if (isVisible) {
      setIsAnimated(true);
    }
  }, [isVisible]);

  return (
    <div
      ref={ref}
      className={`${styles.animated_wrapper} ${
        isVisible || isAnimated ? styles.isVisible : undefined
      }`}
      style={
        {
          overflow: props.disableOverflow ? 'visible' : 'hidden',
        } as React.CSSProperties
      }
      data-animation-type={
        props.disableOverflow ? 'fade' : props.type || 'slide'
      }>
      <div
        className={styles.animated}
        style={{ '--delay': `${props.delay || 0}ms` } as React.CSSProperties}>
        {props.children}
      </div>
    </div>
  );
}
