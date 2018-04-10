import { css } from 'styled-components';

import StyledBaseButton from '../Base/StyledBaseButton';

const defaultStyle = (theme) => css`
  background: ${theme.colors.primary.main};

  &:hover {
    background: ${theme.colors.primary.dark};
  }
`;

const dangerStyle = (theme) => css`
  background: ${theme.colors.danger.main};

  &:hover {
    background: ${theme.colors.danger.dark};
  }
`;

const getStyleByColor = ({ theme, color }) => (color === 'danger' ? dangerStyle(theme) : defaultStyle(theme));

const StyledBrandButton = StyledBaseButton.extend`
  ${getStyleByColor};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.elevation.medium};
`;

export default StyledBrandButton;
