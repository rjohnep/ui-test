import React, { Fragment } from 'react';
import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';

import Icon from 'components/Icon';
import PersonIcon from 'themes/icons/Person.svg';
import readme from './readme.md';

const infoConfig = {
  propTables: [Icon],
  propTablesExclude: [Fragment],
  text: readme,
};

storiesOf('Icon', module)
  .add(
    'default',
    withInfo(infoConfig)(() => (
      <Fragment>
        <h4>Default</h4>
        <Icon glyph={PersonIcon.id} />
        <h4>Different sizes</h4>
        <Icon glyph={PersonIcon.id} size="small" />
        <Icon glyph={PersonIcon.id} size="medium" />
        <Icon glyph={PersonIcon.id} size="large" />
      </Fragment>
    ))
  );
