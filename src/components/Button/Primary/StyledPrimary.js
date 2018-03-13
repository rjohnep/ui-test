import StyledBase from '../Base/StyledBase';

const StyledPrimary = StyledBase.extend`
  color: ${(props) => props.theme.colors.white};
  background: ${(props) => props.theme.colors.brand};
`;

export default StyledPrimary;
