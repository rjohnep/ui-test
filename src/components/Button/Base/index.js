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
    /** The color of the component. It supports those theme colors that make sense for this component. */
    color: PropTypes.oneOf(['default', 'danger', 'brand']),
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
    color: 'default',
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
    return <this.styledTag {...this.componentProps}>{this.content}</this.styledTag>;
  }
}

export default BaseButton;
