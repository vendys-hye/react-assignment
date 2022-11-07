import logo from './logo.svg';
import './App.css';
import Test from './TestComponent';
import ClassComponent from './ClassComponent'
import { useState } from 'react';

function App() {
  const [text, setText] = useState('test부모');
  const [x, setX] = useState(10);

  const handleClick = () => {
    setText('메롱메롱');
  }
  
  const handleClick2 = () => {
    setX(400);
  }
  // const a = 1;

  return (
  <div className="App">
      <button onClick={handleClick}>값 바꾸기</button>
      <button onClick={handleClick2}>x 바꾸기</button>
      <ClassComponent />
      <Test parma1={text} x={x}/>
    </div>
  );
}

export default App;
