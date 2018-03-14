import StyledBase from '../Base/StyledBase';

const StyledDefault = StyledBase.extend`
  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.grayLight};
  box-shadow: ${({ theme }) => theme.elevation.xsmall};
`;

export default StyledDefault;
