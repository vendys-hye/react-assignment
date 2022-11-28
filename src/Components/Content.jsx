import React from 'react';
import styled from 'styled-components';
import InnerContent from "./InnerContent";

const Wrapper = styled.div`
  min-height: 1500px;
`;

const Content = () => {
  return (
  <Wrapper>
    <InnerContent target="apple" />
    <InnerContent target="book" />
    <InnerContent target="cat" />
    <InnerContent target="doodle" />
  </Wrapper>
)
};

export default Content;