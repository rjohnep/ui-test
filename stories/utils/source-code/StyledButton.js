import React from 'react';
import styled, { css } from 'styled-components';

const sourceIcon = (props) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props} >
    <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"></path>
  </svg >
);

const copyIcon = (props) => (
  <svg viewBox="0 0 488.3 488.3" {...props}>
    <g>
      <path d="M314.25,85.4h-227c-21.3,0-38.6,17.3-38.6,38.6v325.7c0,21.3,17.3,38.6,38.6,38.6h227c21.3,0,38.6-17.3,38.6-38.6V124
        C352.75,102.7,335.45,85.4,314.25,85.4z M325.75,449.6c0,6.4-5.2,11.6-11.6,11.6h-227c-6.4,0-11.6-5.2-11.6-11.6V124
        c0-6.4,5.2-11.6,11.6-11.6h227c6.4,0,11.6,5.2,11.6,11.6V449.6z"/>
      <path d="M401.05,0h-227c-21.3,0-38.6,17.3-38.6,38.6c0,7.5,6,13.5,13.5,13.5s13.5-6,13.5-13.5c0-6.4,5.2-11.6,11.6-11.6h227
        c6.4,0,11.6,5.2,11.6,11.6v325.7c0,6.4-5.2,11.6-11.6,11.6c-7.5,0-13.5,6-13.5,13.5s6,13.5,13.5,13.5c21.3,0,38.6-17.3,38.6-38.6
        V38.6C439.65,17.3,422.35,0,401.05,0z" />
    </g>
  </svg>
);

const styledIcon = css`
  width: 16px;
  height: 16px;
  fill: #fff;
`;

const SourceIcon = styled(sourceIcon)`
  ${styledIcon}
`;
const CopyIcon = styled(copyIcon)`
  ${styledIcon}
`;

const StyledButton = styled.button`
  cursor: pointer;

  position: absolute;
  top: -28px;
  right: 0;

  padding: 4px;
  width: 24px;
  height: 24px;
  border: 0 none;
  background: #e6e6e6;
  border-radius: 50%;
  transition: background .3s;

  :hover {
    background: #ccc;
  }
`;

const StyledCopyButton = StyledButton.extend`
  right: 34px;
`;

const SourceButton = (props) => <StyledButton {...props}><SourceIcon /></StyledButton>;
const CopyButton = (props) => <StyledCopyButton {...props}><CopyIcon /></StyledCopyButton>;

export {
  SourceButton,
  CopyButton,
};
