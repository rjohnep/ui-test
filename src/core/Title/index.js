import PropTypes from 'prop-types';
import React from 'react';

const Title = () => {

};

Title.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  textAlign: PropTypes.oneOf(['start', 'center', 'end']),
  truncate: PropTypes.bool,
};

export default Title;
