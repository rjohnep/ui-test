import { css } from 'styled-components';

import StyledBaseButton from '../Base/StyledBaseButton';

const defaultStyle = (theme) => css`
  color: ${theme.colors.gray.main};

  :hover {
    background: ${theme.colors.gray.xlightest};
  }
`;

const colorStyle = (theme, color) => css`
  color: ${theme.colors[color].main};

  :hover {
    color: ${theme.colors.white};
    background: ${theme.colors[color].dark};
  }
`;

const styleByColor = ({ theme, color }) => {
  if (color !== 'default') return colorStyle(theme, color);

  return defaultStyle(theme);
};

const StyledGhostButton = StyledBaseButton.extend`
  ${styleByColor};
`;

export default StyledGhostButton;
