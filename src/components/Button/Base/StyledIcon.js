import styled, { css } from 'styled-components';

import Icon from '../../../components/Icon';

const reversedStyle = css`
  margin-right: -8px;
`;

const unReversedStyle = css`
  margin-left: -8px;
`;

const reverseStyle = ({ reverse }) => {
  if (reverse) return reversedStyle;

  return unReversedStyle;
};

const StyledIcon = styled(Icon)`
  ${reverseStyle}
`;

export default StyledIcon;
