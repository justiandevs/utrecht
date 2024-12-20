/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2024 Frameless B.V.
 * Copyright (c) 2021-2024 Gemeente Utrecht
 */

import clsx from 'clsx';
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react';

export type Heading2Props = HTMLAttributes<HTMLHeadingElement>;

export const Heading2 = forwardRef(
  ({ children, className, ...restProps }: PropsWithChildren<Heading2Props>, ref: ForwardedRef<HTMLHeadingElement>) => (
    <h2 {...restProps} ref={ref} className={clsx('utrecht-heading-2', className)}>
      {children}
    </h2>
  ),
);

Heading2.displayName = 'Heading2';
