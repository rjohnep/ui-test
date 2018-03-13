import StyledBase from '../Base/StyledBase';

const StyledSecondary = StyledBase.extend`
  color: ${(props) => props.theme.colors.dimmed};
  background: ${(props) => props.theme.colors.white};
`;

export default StyledSecondary;
