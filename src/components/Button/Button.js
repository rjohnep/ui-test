import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
// import withTheme from 'hocs/withTheme';
import { withTheme } from 'styled-components';

import CoreButton from 'core/Button';

@withTheme
class Button extends PureComponent {
  static propTypes = {
    /** Boolean indicating whether the button should render as disabled */
    label: PropTypes.string,
    /** Add an Icon by name. */
    icon: PropTypes.string,
    /** component styles */
    type: PropTypes.oneOf(['reset', 'submit', 'button']),
    href: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.oneOf([false]),
    ]),
    theme: PropTypes.object,
  };

  static defaultProps = {
    label: '',
    /** Add an Icon by name. */
    icon: '',
    href: '',
    type: 'button',
    disabled: false,
    onClick: false,
    theme: {},
  };

  get content() {
    const { icon, label } = this.props;

    return `${icon} ${label}`;
  }

  get componentProps() {
    const {
      label,
      icon,
      ...props
    } = this.props;

    return props;
  }


  render() {
    const StyledTag = this.styledTag || CoreButton;

    return <StyledTag {...this.componentProps}>{this.content}</StyledTag>;
  }
}

export default Button;
