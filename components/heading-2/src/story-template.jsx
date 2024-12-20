/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2024 Frameless B.V.
 * Copyright (c) 2021-2024 Gemeente Utrecht
 */

import clsx from 'clsx';
import React from 'react';

export const argTypes = {
  textContent: {
    description: 'De content van de header',
    control: 'text',
  },
  distanced: {
    description: 'Zet afstand tussen de header en nabije content',
    control: 'boolean',
  },
};

export const defaultArgs = {
  textContent: '',
  distanced: false,
};

export const exampleArgs = {
  textContent: 'The Quick Brown Fox Jumps Over The Lazy Dog',
};

export const Heading2 = ({
  children,
  textContent = defaultArgs.textContent,
  distanced = defaultArgs.distanced,
  ...restProps
}) => (
  <h2
    className={clsx('utrecht-heading-2', {
      'utrecht-heading-2--distanced': distanced,
    })}
    {...restProps}
  >
    {children}
    {textContent}
  </h2>
);

export default Heading2;
