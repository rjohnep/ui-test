import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

import StyledButton from './StyledButton';

export default class Button extends PureComponent {
  static propTypes = {
    type: PropTypes.oneOf(['reset', 'submit', 'button']),
    href: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.oneOf([false]),
    ]),

    theme: PropTypes.object.isRequired,
  };

  static defaultProps = {
    href: '',
    type: 'button',
    disabled: false,
    onClick: false,
  };

  get componentTag() {
    const { href } = this.props;

    return href ? StyledButton.withComponent('a') : StyledButton;
  }

  get componentProps() {
    const {
      href,
      type,
      disabled,
      onClick,
      ...props
    } = this.props;

    const disabledProp = disabled || (!href && !onClick && type === 'button');

    return {
      ...props,
      ...(!!onClick && { onClick }),
      ...(disabledProp && { disabled: disabledProp }),
      ...(!!href && { href }),
      ...(!href && { type }),
    };
  }

  render() {
    const Tag = this.componentTag;
    const tagProps = this.componentProps;

    return (
      <Tag {...tagProps}>{this.props.children}</Tag>
    );
  }
}
