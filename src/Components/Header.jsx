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
  color: #FFFFFF;
  text-align: center;
  font-weight: 300;

  ul {
    display: flex;
    width: 500px;
    justify-content: center;
    :hover {
      cursor: pointer;
    }
  }

  li {
    list-style: none;
    width: 70px;
    position: relative;
    padding: 20px 0 20px 0;
    text-align: center;
  }

  li.menu-active {
    color: #61dafb;
  }

  li.menu-active .bar {
    border: 1px solid #61dafb;
    height: 1px;
    background-color: #61dafb;
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 97%;
  }
`;

const Header = () => {
  const [logoActive, setLogoActive] = useState(false);
  const [menuActive, setMenuActive] = useState(0);

  const handleLogoActive = () => {
    setLogoActive(!logoActive);
  }

  const handleMenuActive = (index) => {
    setMenuActive(index);
    console.log(index);
  }

  return (
    <Wrapper>
      <Inner>
        <FaReact className='react-icons' />
        <a href='/' className={logoActive ? 'react active' : 'react'} onClick={handleLogoActive} >React</a>
      </Inner>
      <Navi>
        <ul>
          <li 
            className={menuActive === 0 ? 'menu-active' : null} 
            onClick={() => handleMenuActive(0)}>
            문서
            <span className="bar" />
          </li>
          <li 
            className={menuActive === 1 ? 'menu-active' : null} 
            onClick={() => handleMenuActive(1)}>
            자습서
            <span className="bar" />
          </li>
          <li 
            className={menuActive === 2 ? 'menu-active' : null} 
            onClick={() => handleMenuActive(2)}>
            블로그
            <span className="bar" />
          </li>
          <li 
            className={menuActive === 3 ? 'menu-active' : null} 
            onClick={() => handleMenuActive(3)}>
            커뮤니티
            <span className="bar" />
          </li>
        </ul>
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