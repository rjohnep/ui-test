import React, { Fragment } from 'react';
import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';


import { PrimaryButton, SecondaryButton, DefaultButton } from 'components/Button';
import Icon from 'components/Icon';
import PersonIcon from 'themes/icons/Person.svg';
import BaseButton from 'components/Button/Base';
import readme from './readme.md';

const infoConfig = {
  propTables: [BaseButton],
  propTablesExclude: [Fragment, PrimaryButton, SecondaryButton, DefaultButton],
  text: readme,
};

storiesOf('Button', module)
  .add(
    'default',
    withInfo(infoConfig)(() => (
      <DefaultButton label="Default button" onClick={action('button click')} />
    ))
  )
  .add(
    'primary',
    withInfo(infoConfig)(() => (
      <Fragment>
        <Icon glyph={PersonIcon} />
        <PrimaryButton label="Primary button" onClick={action('button click')} />
        <PrimaryButton color="danger" label="Primary button" onClick={action('button click')} />
      </Fragment>
    ))
  )
  .add(
    'secondary',
    withInfo(infoConfig)(() => (
      <Fragment>
        <SecondaryButton label="Secondary button" onClick={action('button click')} />
        <SecondaryButton color="brand" label="Secondary button" onClick={action('button click')} />
        <SecondaryButton color="danger" label="Secondary button" onClick={action('button click')} />
      </Fragment>
    ))
  );
