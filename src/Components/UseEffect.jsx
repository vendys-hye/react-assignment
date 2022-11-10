import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import first from '../assets/001.jpeg';
import second from '../assets/002.jpeg';
import third from '../assets/003.jpeg';
import fourth from '../assets/004.jpeg';
import fifth from '../assets/005.jpeg';
import sixth from '../assets/006.jpeg';
import seventh from '../assets/007.jpeg';


const Wrapper = styled.div`
  padding: 50px;
  width: 100%;

  .inner-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .click-change {
    display: flex;
    flex-direction: column;
    
    img {
      margin-top: 85px;
    }
  }
`

const Image = styled.img`
  width: 350px;
  height: 350px;
  margin: 35px;
  border-radius: 8px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
`

const Button = styled.button`
  width: 125px;
  height: 35px;
  margin-left: 150px;

  align-items: center;
  background-image: linear-gradient(135deg, #f34079 40%, #fc894d);
  border: 0;
  border-radius: 10px;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  font-family: "Codec cold",sans-serif;
  font-size: 16px;
  font-weight: 700;
  height: 54px;
  justify-content: center;
  letter-spacing: .4px;
  line-height: 1;
  max-width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 3px;
  text-decoration: none;
  text-transform: uppercase;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

:active {
  outline: 0;
}

:hover {
  outline: 0;
}

span {
  transition: all 200ms;
}

:hover span {
  transform: scale(.9);
  opacity: .75;
}

@media screen and (max-width: 991px) {
    font-size: 15px;
    height: 50px;

  span {
    line-height: 50px;
  }
}
`



const UseEffect = () => {
  const [img, setImg] = useState(first);
  const [timeImg, setTimeImg] = useState(third);
  const imgStd = [first, second, third, fourth, fifth, sixth, seventh];
  const [imgArr, setImgArr] = useState(imgStd[0]);


  // let i = 0;
  // console.log(imgStd[i]);
  // useEffect(() => {
  //   setInterval(() => {
  //     if (i !== 6) {
  //       i += 1;
  //       setImgArr(imgStd[i]);
  //     } else if (i === 6) {
  //       i = 0;
  //       setImgArr(imgStd[i]);
  //     }
  //   }, 3000);

  //   return (
  //     clearInterval()
  //   )
  // }, [imgArr]);

  useEffect(() => {
    setInterval(() => setTimeImg(fourth), 5000);

    return (
      clearInterval()
    )
  }, [timeImg]);

  const handleClick = () => {
    setImg(second);
  };

  return (
    <Wrapper>
      <div className="inner-wrapper">
        <div className="click-change">
          <Image src={img} />
          <Button onClick={handleClick}><span>CLICK</span></Button>
        </div>
        <div className="time-change">
          <Image src={timeImg} />
        </div>
        <div className="time-array-change">
          <Image src={imgArr} />
        </div>
      </div>
    </Wrapper>
  )
};

export default UseEffect;