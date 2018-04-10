import { withTheme } from 'styled-components';

import Button from '../Base';
import StyledGhostButton from './StyledGhostButton';

@withTheme
export default class GhostButton extends Button {
  static displayName = 'GhostButton';
  styledTag = StyledGhostButton;
}
