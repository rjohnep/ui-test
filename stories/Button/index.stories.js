import React, { Fragment } from 'react';
import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { ThemeProvider } from 'styled-components';

import { PrimaryButton, SecondaryButton } from 'components/Button';
import BaseButton from 'components/Button/Base';
import defaultTheme from 'themes/default';
import readme from './readme.md';

const infoConfig = {
  propTables: [BaseButton],
  propTablesExclude: [Fragment, ThemeProvider, PrimaryButton, SecondaryButton],
  text: readme,
};

storiesOf('Button', module)
  .add(
    'primary',
    withInfo(infoConfig)(() => (
      <ThemeProvider theme={defaultTheme}>
        <Fragment>
          <PrimaryButton label="Primary button" onClick={action('button click')} />
          <PrimaryButton color="danger" label="Primary button" onClick={action('button click')} />
        </Fragment>
      </ThemeProvider>
    ))
  )
  .add(
    'secondary',
    withInfo(infoConfig)(() => (
      <ThemeProvider theme={defaultTheme}>
        <Fragment>
          <SecondaryButton label="Secondary button" onClick={action('button click')} />
          <SecondaryButton color="brand" label="Secondary button" onClick={action('button click')} />
          <SecondaryButton color="danger" label="Secondary button" onClick={action('button click')} />
        </Fragment>
      </ThemeProvider>
    ))
  );
