import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

import StyledBase from './StyledBase';

class BaseButton extends PureComponent {
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

  styledTag = StyledBase;

  render() {
    const StyledTag = this.styledTag;

    return <StyledTag {...this.componentProps}>{this.content}</StyledTag>;
  }
}

export default BaseButton;
