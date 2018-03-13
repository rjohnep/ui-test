import { withTheme } from 'styled-components';

import Button from '../Base';
import StyledPrimary from './StyledPrimary';

@withTheme
class PrimaryButton extends Button {
  static displayName = 'PrimaryButton';
  styledTag = StyledPrimary;
}

export default PrimaryButton;
