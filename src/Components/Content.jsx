import React from 'react';
import styled from 'styled-components';
import InnerContent from "./InnerContent";

const Wrapper = styled.div`
  height: 100%;
`;

const Content = () => {
  // <InnerContent target="book" />
  // <InnerContent target="cat" />
  // <InnerContent target="doodle" />

  return (
  <Wrapper>
    <InnerContent target="apple" />
    
  </Wrapper>
)
};

export default Content;