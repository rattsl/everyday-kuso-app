import { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState("");
  return (
    <div className="App">
      <h1>{text}</h1>
      <input type="text" placeholder="値を入力" onChange={e => setText(e.target.value)} />
    </div>
  );
}

export default App;
