import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { PrimaryButton, SecondaryButton } from 'components/Button';
import readme from './readme.md';

storiesOf('Button', module)
  .add(
    'primary state',
    withInfo(readme)(() => <PrimaryButton label="asd" onClick={action()} />)
  )
  .add(
    'secondary state',
    withInfo(readme)(() => <SecondaryButton label="asd" onClick={action()} />)
  );
