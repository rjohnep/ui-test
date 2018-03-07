import PropTypes from 'prop-types';
import React, { Component } from 'react';
import getDisplayName from 'recompose/getDisplayName';
import deepMerge from 'deepmerge';

import baseTheme from 'themes/default';

const withTheme = (WrappedComponent) =>
  class extends Component {
    static propTypes = {
      theme: PropTypes.object,
    };

    static defaultProps = {
      theme: {},
    };

    static contextTypes = {
      theme: PropTypes.object,
    }

    static displayName = `Themed${getDisplayName(WrappedComponent)}`;

    render() {
      const { theme, ...rest } = this.props;
      const { theme: contextTheme = {} } = this.context;
      const localTheme = deepMerge(baseTheme, contextTheme, theme);
      return (
        <WrappedComponent theme={localTheme} {...rest} />
      );
    }
  };

export default withTheme;
