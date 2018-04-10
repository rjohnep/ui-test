import { withTheme } from 'styled-components';

import BaseButton from '../Base';
import StyledNeutralButton from './StyledNeutralButton';

@withTheme
export default class NeutralButton extends BaseButton {
  static displayName = 'NeutralButton';
  styledTag = StyledNeutralButton;
}
