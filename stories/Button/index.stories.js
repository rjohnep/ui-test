import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { parse } from 'react-docgen';

// import { PrimaryButton, SecondaryButton } from 'components/Button';
import Button from 'components/Button/Button';
import readme from './readme.md';

const asd = parse('components/Button/Button');
debugger;

storiesOf('Button', module)
  .add(
    'secondary state',
    withInfo(readme)(() => <Button />)
  );
