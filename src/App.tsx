import { useState } from 'react';
import './App.css';

const App: React.FC = () => {
  const [value, setValue] = useState(0);
  const countUp = () => {
    setValue(value + 1)
  };
  return (
    <div className="App">
      <p>{value}</p>
      <br />
      <button onClick={countUp}>countup</button>
    </div>
  );
}

export default App;
