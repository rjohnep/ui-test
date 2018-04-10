import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  padding: 10px;

  border-bottom: 1px solid rgba(0, 0, 0, 0.33);
`;

export const Title = styled.h3`
  margin: 0;
  width: 100%;
  ${({ required }) => required && `color: red;`}
`;

export const Description = styled.div`
  width: 70%;
`;

export const Property = styled.code`
  width: 30%;
  color: rgb(96, 149, 235);
  padding-left: 30px;
`;

export const DefaultValue = styled.code`
  padding: 3px;
  border-radius: 2px;
  color: #252525;
  background: #f3f3f3;  
`;
