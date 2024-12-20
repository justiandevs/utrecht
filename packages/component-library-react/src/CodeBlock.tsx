/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2024 Frameless B.V.
 * Copyright (c) 2021-2024 Gemeente Utrecht
 */

import clsx from 'clsx';
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react';

export type CodeBlockProps = HTMLAttributes<HTMLPreElement>;

export const CodeBlock = forwardRef(
  ({ children, className, ...restProps }: PropsWithChildren<CodeBlockProps>, ref: ForwardedRef<HTMLPreElement>) => (
    <pre ref={ref} className={clsx('utrecht-code-block', className)} {...restProps}>
      <code className="utrecht-code-block__content">{children}</code>
    </pre>
  ),
);

CodeBlock.displayName = 'CodeBlock';
