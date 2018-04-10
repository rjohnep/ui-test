import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled(({ level, children, ...props }) => React.createElement(`h${level}`, props, children))`
  // styles
`;

export default StyledTitle;
