import React, { Fragment } from 'react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';

import BaseButton from 'components/Button/Base';
import { DefaultButton } from 'components/Button';
import PersonIcon from 'themes/icons/Person.svg';
import SourceBlock from '../../utils/source-code';

import readme from './sources/readme.md';
import defaultSource from './sources/default.md';
import iconSource from './sources/icon.md';
import reverseSource from './sources/reverse.md';
import compactSource from './sources/compact.md';
import disabledSource from './sources/disabled.md';

const config = {
  propTables: [BaseButton],
  propTablesExclude: [DefaultButton, SourceBlock, Fragment],
  text: readme,
};

export default withInfo(config)(() => (
  <Fragment>
    <h4>Default</h4>
    <DefaultButton label="Default button" onClick={action('button click')} />
    <SourceBlock code={defaultSource} />

    <h4>With icon</h4>
    <DefaultButton icon={PersonIcon.id} label="Default button" onClick={action('button click')} />
    <SourceBlock code={iconSource} />

    <h4>Reverse icon</h4>
    <DefaultButton reverse icon={PersonIcon.id} label="Default button" onClick={action('button click')} />
    <SourceBlock code={reverseSource} />

    <h4>Compact</h4>
    <DefaultButton compact label="Default button" onClick={action('button click')} />
    <SourceBlock code={compactSource} />

    <h4>Disabled</h4>
    <DefaultButton disabled label="Default button" onClick={action('button click')} />
    <SourceBlock code={disabledSource} />
  </Fragment>
));