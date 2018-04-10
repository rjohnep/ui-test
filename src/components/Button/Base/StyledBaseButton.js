import styled, { css } from 'styled-components';
import CoreButton from '../../../core/Button';

const defaultSize = css`
  padding: 0 12px;
  line-height: 32px;
`;

const compactSize = css`
  padding: 0 8px;
  line-height: 24px;
`;

const styleBySize = ({ compact }) => {
  if (compact) return compactSize;

  return defaultSize;
};

const StyledBaseButton = styled(CoreButton)`
  ${styleBySize}
  font-weight: 400;
  font-size: 12px;
  text-transform: uppercase;
  border-radius: 3px;
  
   // TODO: create centralised animation tool
  transition: background-color .3s, color .3s;
`;

export default StyledBaseButton;
