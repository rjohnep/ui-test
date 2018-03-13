import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { ThemeProvider } from 'styled-components';
import deepmerge from 'deepmerge';

import { PrimaryButton, SecondaryButton } from 'components/Button';
import defaultTheme from 'themes/default';
import readme from './readme.md';

const customTheme = { button: { colors: { main: 'black' } } };
const customTheme2 = { button: { colors: { main: 'red' } } };

storiesOf('Button', module)
  .add(
    'primary state',
    withInfo(readme)(() => <PrimaryButton label="asd" onClick={action()} />)
  )
  .add(
    'secondary state',
    withInfo(readme)(() => <SecondaryButton label="asd" onClick={action()} />)
  )
  .add(
    'cross theme',
    withInfo(readme)(() => (
      <ThemeProvider theme={defaultTheme}>
        <ThemeProvider theme={(theme) => deepmerge(theme, customTheme)}>
          <SecondaryButton label="asd" onClick={action()} />
        </ThemeProvider>
      </ThemeProvider>
    ))
  );
