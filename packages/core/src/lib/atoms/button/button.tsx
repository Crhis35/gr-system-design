import React, { PropsWithChildren } from 'react';

import { ButtonProps } from './button.model';

export default function Button(props: PropsWithChildren<Partial<ButtonProps>>) {
  const { children, label } = props;

  return (
    <button>
      {label}
      {children}
    </button>
  );
}
