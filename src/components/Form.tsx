import { useState } from "react";

// type _Config = {
//   API_KEY: string;
// }

// const Config: _Config = {
//   API_KEY: process.env.REACT_APP_API_URL || ""
// }

const Form = () => {
  const [city, setCity] = useState<string>("");
  const getWeather = (e: any) => {
    e.preventDefault();
    const API_KEY = process.env.REACT_APP_API_KEY;
    const apiURL = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=London&aqi=no`;
    fetch(apiURL).then(res => res.json()).then(data => console.log(data));
  };
  return (
    <form >
      <input type="text" name="city" onChange={e => setCity(e.target.value)}/>
      <button type="submit" onClick={getWeather} >Get Weather</button>
      <div>{process.env.REACT_APP_API_KEY}</div>
    </form>
  )
};

export default Form;