import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import copy from 'copy-to-clipboard';
import SyntaxHighlighter from 'react-syntax-highlighter';
import solarizedlight from 'react-syntax-highlighter/styles/hljs/solarized-light';

import Wrapper from './Wrapper';
import { CopyButton, SourceButton } from './StyledButton';

export default class SourceBlock extends PureComponent {
  static propTypes = {
    code: PropTypes.string.isRequired,
  };

  state = {
    active: false,
  };

  onCopyCode = () => copy(this.props.code);
  onToggleSourceBlock = () => this.setState((state) => ({ active: !state.active }))

  render() {
    const { code } = this.props;
    const { active } = this.state;

    return (
      <Wrapper>
        <CopyButton title="copy source code" onClick={this.onCopyCode} />
        <SourceButton title="view source code" onClick={this.onToggleSourceBlock} />
        {active && <SyntaxHighlighter showLineNumbers language="jsx" style={solarizedlight}>{code}</SyntaxHighlighter>}
      </Wrapper>
    );
  }
}
