import styled from 'styled-components';

const StyledButton = styled.button`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  margin: 0;
  padding: 0;

  font: inherit;
  color: inherit;
  background: transparent;
  border: 0;

  ${({ disabled }) => disabled && `
    cursor: auto;
    opacity: .5;
  `}

`;

export default StyledButton;
