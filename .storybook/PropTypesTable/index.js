import React, { Fragment } from 'react';
import { Wrapper, Row, Title, Description, Property, DefaultValue } from './Styled';

const getPropertyName = (propType) => {
  switch (propType.name) {
    case 'enum':
      return propType.value.reduce((acc, item, index) => `${acc} ${index !== 0 ? '|' : ''} ${item.value}`, 'oneOf');
    case 'union':
      return propType.value.reduce((acc, item, index) => `${acc} ${index !== 0 ? '|' : ''} ${getPropertyName(item)}`, '');
    default:
      return propType.name;
  }
};
const getProperty = (propType) => {
  return getPropertyName(propType);

};

const getDefaultValue = (defaultValue) => defaultValue && (
  <Fragment>
    / <DefaultValue>{defaultValue}</DefaultValue>
  </Fragment>
);

const TableComponent = ({ propDefinitions }) => {
  const props = propDefinitions.map(
    ({ property, propType, required, description, defaultValue }) => {
      return (
        <Row key={property}>
          <Title required={required}>{property}</Title>
          <Description>{description}</Description>
          <Property>
            {getProperty(propType)} {getDefaultValue(defaultValue)}
          </Property>
        </Row>
      );
    }
  );

  return (
    <Wrapper>
      {props}
    </Wrapper>
  );
};

export default TableComponent;
