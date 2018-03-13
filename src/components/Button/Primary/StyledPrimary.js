import StyledButton from 'core/Button/StyledButton';
import buttonConfigBase from 'core/Button/model';

const StyledPrimary = StyledButton.extend`
  width: 200px;
`;

StyledPrimary.defaultProps = {
  theme: buttonConfigBase,
};

export default StyledPrimary;
