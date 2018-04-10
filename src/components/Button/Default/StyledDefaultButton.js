import StyledBaseButton from '../Base/StyledBaseButton';

const StyledDefaultButton = StyledBaseButton.extend`
  color: ${({ theme }) => theme.colors.text.dark};
  background: ${({ theme }) => theme.colors.third.lightest};

  :hover {
    ${'' /* background: ${({ theme }) => theme.colors.gray.lightest}; */}
  }
`;

export default StyledDefaultButton;
