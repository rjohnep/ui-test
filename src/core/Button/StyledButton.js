import styled from 'styled-components';
import theme from 'styled-theming';
import buttonConfigBase from './model';

theme('button', {
  text: {
    fontSize: '18px',
  },
  colors: {
    main: 'green',
  },
});

const StyledButton = styled.button`
  font-size: ${(props) => props.theme.button.text.fontSize};
  color: ${(props) => props.theme.button.colors.main};
`;

StyledButton.defaultProps = {
  theme: buttonConfigBase,
};

export default StyledButton;
