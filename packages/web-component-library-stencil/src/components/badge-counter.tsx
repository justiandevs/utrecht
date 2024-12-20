/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2024 Frameless B.V.
 * Copyright (c) 2021-2024 Gemeente Utrecht
 */

import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'utrecht-badge-counter',
  styleUrl: 'badge-counter.scss',
  shadow: true,
})
export class BadgeCounter {
  @Prop() value: number;
  @Prop() max: number;
  @Prop() locale: string;

  render() {
    const { locale, max, value } = this;

    const limited = typeof max === 'number' && typeof value === 'number' && Number(value) > Number(max);
    const formatNumber = (n: number) => (locale ? Intl.NumberFormat(locale).format(n) : String(n));
    const textContent = limited ? `${formatNumber(max)}+` : typeof value === 'number' ? formatNumber(value) : '';

    return <div class="utrecht-badge-counter">{textContent ? textContent : <slot></slot>}</div>;
  }
}
