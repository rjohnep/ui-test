import styled, { css } from 'styled-components';

const getIconSize = ({ theme, size }) => css`
  width: ${theme.icon.size[size]};
  height: ${theme.icon.size[size]};
`;

const StyledIcon = styled.svg`
  display: inline-block;
  fill: currentColor;
  ${getIconSize};
`;

export default StyledIcon;
