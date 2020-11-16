import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { theme, ThemeProvider } from '../../styles/styled-components';

import Button, { ButtonVariant } from './index';

export default {
  title: 'App/Button',
  component: Button,
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as Meta;

const Template: Story = args => (
  <ThemeProvider theme={theme.default}>
    <Button {...args}>Test</Button>
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  label: 'Button',
  className: ButtonVariant.Default,
};

export const Contained = Template.bind({});
Contained.args = {
  label: 'Button',
  className: ButtonVariant.Contained,
};

export const Outlined = Template.bind({});
Outlined.args = {
  label: 'Button',
  className: ButtonVariant.Outlined,
};
