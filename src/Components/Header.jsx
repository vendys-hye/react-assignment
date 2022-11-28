import React, { useState } from 'react';
import styled from 'styled-components';
import { FaReact } from 'react-icons/fa';
import Search from './Search';

const Wrapper = styled.div`
  background-color: #20232a;
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  height: 56px;
  position: sticky;
  top: 0;
  max-width: 1280px;

  a {
    all: unset;
  }

  .react-icons {
    size: 30px;
    vertical-align: middle;
    color: #61dafb;
    margin: auto 5px 6px auto;
  }
`;

const Inner = styled.div`
  width: 150px;
  padding: 10px 0 10px 0;
  font-size: 18px;
  color: #FFFFFF;
  text-align: center;
  display: flex;

  div {
    flex: 1;
  }

  .react {
    font-size: 25px;
    font-weight: 800;
    color: #61dafb;
  }

  .active {
    color: #FFFFFF;
  }
`;

const Navi = styled.nav`
  display: flex;
  color: #FFFFFF;
  text-align: center;
  font-weight: 300;

  button {
    all: unset;
    width: 100px;
    :hover {
      cursor: pointer;
    }
  }
`;

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const handleActive = () => {
    setIsActive(!isActive);
  }

  return (
    <Wrapper>
      <Inner>
        <FaReact className='react-icons' />
        <a href='/' className={isActive ? 'react active' : 'react'} onClick={handleActive} >React</a>
      </Inner>
      <Navi>
        <button type="button" target="apple">문서 Apple</button>
        <button type="button" target="book">자습서 Book</button>
        <button type="button" target="cat">블로그 Cat</button>
        <button type="button" target="doodle">커뮤니티 Doodle</button>
      </Navi>
      <Search />
      <Inner>
        <a href='/'>18.2.0</a>
        <a href='/'>Languages</a>
        <a href='/'>GitHub</a>
      </Inner>
    </Wrapper>
  )
};

export default Header;