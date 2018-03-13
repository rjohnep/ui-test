import { withTheme } from 'styled-components';

import BaseButton from '../Base';
import StyledSecondary from './StyledSecondary';

@withTheme
class SecondaryButton extends BaseButton {
  static displayName = 'SecondaryButton';
  styledTag = StyledSecondary;
}

export default SecondaryButton;
