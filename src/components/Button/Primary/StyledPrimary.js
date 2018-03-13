import { css } from 'styled-components';

import StyledBase from '../Base/StyledBase';

const defaultStyle = (theme) => css`
  background: ${theme.colors.brand};
`;

const dangerStyle = (theme) => css`
  background: ${theme.colors.danger};
`;

const getStyleByColor = ({ theme, color }) => (color === 'danger' ? dangerStyle(theme) : defaultStyle(theme));

const StyledPrimary = StyledBase.extend`
  color: ${({ theme }) => theme.colors.white};
  ${getStyleByColor};
  box-shadow: ${({ theme }) => theme.elevation.xsmall};
`;

export default StyledPrimary;
