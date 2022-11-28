import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  color: #FFFFFF;

`;

const Search = () => {  
  
  return (
    <Wrapper>
      <input placeholder='Search' />
    </Wrapper>
  )
};

export default Search;