import { useState } from 'react';
import './App.css';

function App() {
  const [status, setStatus] = useState("");
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStatus(e.target.value)
  }
  const srcUrl: string = `https://http.cat/${status}`;
  return (
    <div className="App">
      <img src={srcUrl} alt="" />
      <form onSubmit={e => e.preventDefault()}>
        <input type="text" onChange={e => handleOnChange(e)}/>
      </form>
    </div>
  );
}

export default App;
