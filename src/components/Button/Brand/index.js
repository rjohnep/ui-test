import { withTheme } from 'styled-components';

import Button from '../Base';
import StyledBrandButton from './StyledBrandButton';

@withTheme
export default class BrandButton extends Button {
  static displayName = 'BrandButton';
  styledTag = StyledBrandButton;
}
