import type { Meta, StoryObj } from '@storybook/vue3';
import { Emphasis, Paragraph } from '@utrecht/component-library-vue';
import readme from '@utrecht/components/emphasis/README.md?raw';
import tokens from '@utrecht/components/emphasis/tokens.json';
import { createStory } from './util';

const meta: Meta<typeof Emphasis> = {
  id: 'vue-emphasis',
  title: 'Vue.js Component/Emphasis',
  component: Emphasis,
  tags: ['autodocs'],
  argTypes: {
    slot: {
      name: 'slot',
      control: { type: 'text' },
      type: { required: false },
      table: {
        defaultValue: { summary: '' },
      },
    },
  },
  decorators: [
    () => ({
      components: { Paragraph },
      template: '<Paragraph><story/></Paragraph>',
    }),
  ],
  render: () => ({
    components: { Emphasis },
    template: `<Emphasis v-bind="$props"><slot></slot></Emphasis>`,
  }),
  parameters: {
    status: {
      type: 'ALPHA',
    },
    tokens,
    tokenPrefix: 'utrecht-emphasis',
    docs: {
      description: {
        component: readme,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = createStory(meta, {
  name: 'Emphasis',
  args: {
    slot: 'Hello World!',
  },
});