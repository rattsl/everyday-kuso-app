import { useState } from 'react';
import './App.css';

function App() {
  const imageStyle: {[key: string]: string} = {
    width: "100%",
    maxWidth: "300px"
  }
  const buttonStyle: {[key: string]: string} = {
    display: "block",
    margin: "auto",
  }
  const [imageUrl, setImageUrl] = useState<string>("");
  const fetchAPI = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(res => res.json())
    .then(data => setImageUrl(data.message))
  };
  return (
    <div className="App">
      <img style={imageStyle} src={imageUrl}></img>
      <button style={buttonStyle} onClick={fetchAPI}>いぬ</button>
    </div>
  );
}

export default App;
