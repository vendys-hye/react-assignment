import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  color: #FFFFFF;

`;

const Search = () => {  
  const [value, setValue] = useState('');
  
  const handleValue = (e) => {
    console.log(e.target.value);
    setValue(e.target.value);
  }
  
  return (
    <Wrapper>
      <input placeholder='Search' value={value} onChange={handleValue} />
      <button>Search</button>
    </Wrapper>
  )
};

export default Search;