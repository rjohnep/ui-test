import { withTheme } from 'styled-components';

import Button from '../Base';
import StyledDefault from './StyledDefault';

@withTheme
class DefaultButton extends Button {
  static displayName = 'DefaultButton';
  styledTag = StyledDefault;
}

export default DefaultButton;
