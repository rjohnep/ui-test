import PropTypes from 'prop-types';
import React from 'react';

import StyledIcon from './StyledIcon';

const Icon = (props) => {
  const { glyph, ...rest } = props;

  return (
    <StyledIcon {...rest}>
      <use xlinkHref={`#${glyph.id}`} />
    </StyledIcon>
  );
};

Icon.propTypes = {
  glyph: PropTypes.object.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

Icon.defaultProps = {
  size: 'small',
};

export default Icon;
