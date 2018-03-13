import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { ThemeProvider } from 'styled-components';

import { PrimaryButton, SecondaryButton } from 'components/Button';
import BaseButton from 'components/Button/Base';
import defaultTheme from 'themes/default';
import readme from './readme.md';

storiesOf('Button', module)
  .add(
    'primary',
    withInfo({
      propTables: [BaseButton],
      propTablesExclude: [ThemeProvider, PrimaryButton, SecondaryButton],
      text: readme,
    })(() => (
      <ThemeProvider theme={defaultTheme}>
        <PrimaryButton label="Primary button" onClick={action('button click')} />
      </ThemeProvider>
    ))
  )
  .add(
    'secondary',
    withInfo(readme)(() => (
      <ThemeProvider theme={defaultTheme}>
        <SecondaryButton label="Secondary button" onClick={action('button click')} />
      </ThemeProvider>
    ))
  );
