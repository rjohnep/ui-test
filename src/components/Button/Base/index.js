import PropTypes from 'prop-types';
import React, { PureComponent, Fragment } from 'react';

import StyledBaseButton from './StyledBaseButton';
import StyledIcon from './StyledIcon';

export default class BaseButton extends PureComponent {
  static propTypes = {
    /** Label text to place in the button. */
    label: PropTypes.string,
    /** Icon element to place in the button. */
    icon: PropTypes.string,
    /** Whether an icon and label should be reversed so that the icon is at the end of the anchor. */
    reverse: PropTypes.bool,
    /** The type of button. Set the type to submit for the default button on forms. */
    type: PropTypes.oneOf(['reset', 'submit', 'button']),
    /** The color of the component. It supports those theme colors that make sense for this component. */
    color: PropTypes.oneOf(['default', 'danger', 'primary']),
    /** A button can reduce its padding to fit into tighter spaces. */
    compact: PropTypes.bool,
    /** If `true`, the button will be disabled. */
    disabled: PropTypes.bool,
    /** If specified, the button will behave like an anchor tag. */
    href: PropTypes.string,
    /** Click handler. Not setting this property and not specifying a href causes the Button to be disabled. */
    onClick: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.oneOf([false]),
    ]),
  };

  static defaultProps = {
    label: '',
    icon: '',
    reverse: false,
    href: '',
    type: 'button',
    color: 'default',
    compact: false,
    disabled: false,
    onClick: false,
  };

  get icon() {
    const { icon, reverse } = this.props;

    const iconProps = {
      glyph: icon,
      reverse,
    };

    return !!icon && <StyledIcon {...iconProps} />;
  }

  get content() {
    const { label, reverse } = this.props;

    return (
      <Fragment>
        {!reverse && this.icon} {label} {reverse && this.icon}
      </Fragment>
    );
  }

  get componentProps() {
    const {
      label,
      icon,
      ...props
    } = this.props;

    return props;
  }

  styledTag = StyledBaseButton;

  render() {
    return <this.styledTag {...this.componentProps}>{this.content}</this.styledTag>;
  }
}
