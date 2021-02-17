import React from 'react';
import ContainerWrapper from './styles';

const Container = ({ children, className }) => (
  <ContainerWrapper className={className}>
    {children}
  </ContainerWrapper>
);

export default Container;
