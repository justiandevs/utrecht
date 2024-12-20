/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2024 Frameless B.V.
 * Copyright (c) 2021-2024 Gemeente Utrecht
 */

import clsx from 'clsx';
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren, ReactNode } from 'react';

export type AlertType = 'info' | 'ok' | 'warning' | 'error';

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  icon?: ReactNode;
  type?: string | AlertType;
}

export const Alert = forwardRef(
  (
    { children, className, icon, type, ...restProps }: PropsWithChildren<AlertProps>,
    ref: ForwardedRef<HTMLDivElement>,
  ) => (
    <div
      {...restProps}
      ref={ref}
      className={clsx(
        'utrecht-alert',
        {
          'utrecht-alert--error': type === 'error',
          'utrecht-alert--info': type === 'info',
          'utrecht-alert--ok': type === 'ok',
          'utrecht-alert--warning': type === 'warning',
        },
        className,
      )}
    >
      {icon && <div className="utrecht-alert__icon">{icon}</div>}
      <div className="utrecht-alert__content">
        <div className="utrecht-alert__message" role="alert">
          {children}
        </div>
      </div>
    </div>
  ),
);

Alert.displayName = 'Alert';
