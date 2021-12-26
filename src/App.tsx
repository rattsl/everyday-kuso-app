import { useRef } from 'react';
import { useState } from 'react';
import './App.css';
import Counter from './Counter';
import RenderTimes from './RenderTimes';

interface AppProps {
  message?: string,
  fuga?: string
}

const App: React.FC<AppProps> = ({message, fuga}) => {
  const [number, setNumber] = useState(0);
  const countUp = () => setNumber(number + 1);
  const countDown = () => setNumber(number - 1);
  const renderTimes = useRef(0);
  return (
    <div className="App">
      <h1>{message}</h1>
      <p>{fuga}</p>
      <Counter number={number}/>
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
      <RenderTimes renderTimes={renderTimes}/>
    </div>
  );
}

App.defaultProps = {
  message: "counter"
}

export default App;
