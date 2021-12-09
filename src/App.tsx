import { useState } from 'react';
import './App.css';
import Child from './Child';

const App = () => {
  const [flag, setFlag] = useState(false);
  const onClickButton = () => {
    setFlag(!flag);
  }
  return (
    <div className="App">
      <button onClick={onClickButton}>オンオフぼたん</button>
      <Child flag={flag}/>
    </div>
  );
}

export default App;
