import React, { Fragment } from 'react';
import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { ThemeProvider } from 'styled-components';

import { BrandButton, NeutralButton, DefaultButton, GhostButton } from 'components/Button';
import PersonIcon from 'themes/icons/Person.svg';
import CustomTheme from 'themes/Custom';
import BaseButton from 'components/Button/Base';
import readme from './readme.md';

import DefaultButtonStory from './Default';

const infoConfig = {
  propTables: [BaseButton],
  propTablesExclude: [Fragment, BrandButton, NeutralButton, DefaultButton, GhostButton],
  text: readme,
};

storiesOf('Button', module)
  .add(
    'default',
    DefaultButtonStory
  )
  .add(
    'neutral',
    withInfo(infoConfig)(() => (
      <Fragment>
        <h4>Default</h4>
        <NeutralButton label="Secondary button" onClick={action('button click')} />
        <h4>With icon</h4>
        <NeutralButton icon={PersonIcon.id} label="Secondary button" onClick={action('button click')} />
        <h4>Reverse icon</h4>
        <NeutralButton reverse icon={PersonIcon.id} label="Secondary button" onClick={action('button click')} />
        <h4>Compact</h4>
        <NeutralButton compact label="Secondary button" onClick={action('button click')} />
        <h4>Primary color</h4>
        <NeutralButton icon={PersonIcon.id} color="primary" label="Secondary button" onClick={action('button click')} />
        <h4>Disabled</h4>
        <NeutralButton icon={PersonIcon.id} color="primary" label="Secondary button" />
      </Fragment>
    ))
  )
  .add(
    'brand',
    withInfo(infoConfig)(() => (
      <Fragment>
        <h4>Default</h4>
        <BrandButton label="Brand button" onClick={action('button click')} />
        <h4>With icon</h4>
        <BrandButton icon={PersonIcon.id} label="Brand button" onClick={action('button click')} />
        <h4>Reverse icon</h4>
        <BrandButton reverse icon={PersonIcon.id} label="Brand button" onClick={action('button click')} />
        <h4>Compact</h4>
        <BrandButton compact label="Brand button" onClick={action('button click')} />
        <h4>Danger color</h4>
        <BrandButton icon={PersonIcon.id} color="danger" label="Brand button" onClick={action('button click')} />
        <h4>Disabled</h4>
        <BrandButton disabled icon={PersonIcon.id} color="danger" label="Brand button" onClick={action('button click')} />
      </Fragment>
    ))
  )
  .add(
    'ghost',
    withInfo(infoConfig)(() => (
      <Fragment>
        <h4>Default</h4>
        <GhostButton label="Ghost button" onClick={action('button click')} />
        <h4>With icon</h4>
        <GhostButton icon={PersonIcon.id} label="Ghost button" onClick={action('button click')} />
        <h4>Reverse icon</h4>
        <GhostButton reverse icon={PersonIcon.id} label="Ghost button" onClick={action('button click')} />
        <h4>Compact</h4>
        <GhostButton compact label="Ghost button" onClick={action('button click')} />
        <h4>Primary color</h4>
        <GhostButton color="primary" label="Ghost button" onClick={action('button click')} />
        <h4>Danger color</h4>
        <GhostButton color="danger" label="Ghost button" onClick={action('button click')} />
        <h4>Disabled</h4>
        <GhostButton disabled color="danger" label="Ghost button" onClick={action('button click')} />
      </Fragment>
    ))
  )
  .add(
    'cross theme',
    () => (
      <Fragment>
        <h4>Default theme</h4>
        <BrandButton icon={PersonIcon.id} label="Brand button" onClick={action('button click')} />
        <h4>Custom theme</h4>
        <ThemeProvider theme={CustomTheme}>
          <BrandButton icon={PersonIcon.id} label="Brand button" onClick={action('button click')} />
        </ThemeProvider>
      </Fragment>
    )
  );
