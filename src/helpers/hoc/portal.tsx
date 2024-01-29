import React from 'react';
import ReactDOM from 'react-dom';

const Portal = <T extends object>(Component: React.ComponentType<T>) => {
  return (props: T) => {
    if (typeof document !== 'undefined') {
      return ReactDOM.createPortal(
        <Component {...(props as T)} />,
        document.getElementById('portal') as HTMLElement
      );
    }
    return null;
  };
};

export default Portal;
