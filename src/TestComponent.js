import React from 'react';

const Test = ({ parma1, x }) => {
  // 움직여보자
  // 렌더링 조건 -> 
  // 1. 부모로 부터 props 넘어와서 내가 사용하면 -> 부모가 props 값을 변경하게 되면 리렌더링
  // 2. state 가 변경되면 리렌더링
  // 부모가 리렌더링 되면 자식 리렌더링

  return (
    <div className='wrapper' style={{ width: '100%' }}>
      <div style={{ position: 'absolute', left:0, top: '50%', left: x, width: 400, backgroundColor: 'red' }}>test다다다다다ㅏㄷ {parma1}
      </div>
    </div>
  )
};

export default Test;