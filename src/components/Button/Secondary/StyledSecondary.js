import { css } from 'styled-components';

import StyledBase from '../Base/StyledBase';

const defaultStyle = (theme) => css`
  color: ${theme.colors.dimmed};
`;

const brandStyle = (theme) => css`
  color: ${theme.colors.brand};
`;

const dangerStyle = (theme) => css`
  color: ${theme.colors.danger};
`;

const getStyleByColor = ({ theme, color }) => {
  if (color === 'brand') return brandStyle(theme);
  if (color === 'danger') return dangerStyle(theme);

  return defaultStyle(theme);
};

const StyledSecondary = StyledBase.extend`
  ${getStyleByColor};
  background: ${(props) => props.theme.colors.white};
  box-shadow: ${({ theme }) => theme.elevation.small};
`;


export default StyledSecondary;
