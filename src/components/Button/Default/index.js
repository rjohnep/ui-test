import { withTheme } from 'styled-components';

import Button from '../Base';
import StyledDefaultButton from './StyledDefaultButton';

@withTheme
export default class DefaultButton extends Button {
  static displayName = 'DefaultButton';
  styledTag = StyledDefaultButton;
}
