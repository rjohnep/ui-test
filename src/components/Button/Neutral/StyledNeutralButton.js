import { css } from 'styled-components';

import StyledBaseButton from '../Base/StyledBaseButton';

const defaultStyle = (theme) => css`
  color: ${theme.colors.gray.main};
`;

const colorStyle = (theme, color) => css`
  color: ${theme.colors[color].main};
`;

const styleByColor = ({ theme, color }) => {
  if (color !== 'default') return colorStyle(theme, color);

  return defaultStyle(theme);
};

const StyledSecondary = StyledBaseButton.extend`
  ${styleByColor};
  background: ${(props) => props.theme.colors.white};
  box-shadow: ${({ theme }) => theme.elevation.medium};

  :hover {
    background: ${({ theme }) => theme.colors.gray.xlightest};
  }
`;


export default StyledSecondary;
