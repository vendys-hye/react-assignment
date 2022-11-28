import React from 'react';
import styled from 'styled-components';
import Apple from "./Apple";
import Cat from "./Cat";
import Book from "./Book";
import Doodle from "./Doodle";

const Wrapper = styled.div`
  height: 250px;
  border: 2px solid salmon;
`;

const InnerContent = ({ target }) => {
  const appleFlag = target === 'apple';
  const bookFlag = target === 'book';
  const catFlag = target === 'cat';
  const doodleFlag = target === 'doodle';

  return (
    <Wrapper>
      {appleFlag ? <Apple /> : null}
      {bookFlag ? <Book /> : null}
      {catFlag ? <Cat /> : null}
      {doodleFlag ? <Doodle /> : null}
    </Wrapper>
  )
};

export default InnerContent;