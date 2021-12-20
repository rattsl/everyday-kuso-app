import './App.css';
import { useState } from "react";
import Title from './components/Title';
import Form from './components/Form';
import Results from './components/Results';

type ResultStateType = {
  country: string
  cityName: string
  tempareture: string
  conditionText: string
  icon: string
}

function App() {
  const [city, setCity] = useState<string>("");
  const [results, setResults] = useState<ResultStateType>({
    country: "",
    cityName: "",
    tempareture: "",
    conditionText: "",
    icon: ""
  })
  const API_KEY = process.env.REACT_APP_API_KEY;
  const getWeather = (e: any) => {
    e.preventDefault();
    const apiURL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`;
    fetch(apiURL).then(res => res.json()).then(data => {setResults({
      country: data.location.country,
      cityName: data.location.name,
      tempareture: data.current.temp_c,
      conditionText: data.current.condition.text,
      icon: data.current.condition.icon
    })});
  };
  return (
    <div className="wrapper">
      <Title />
      <Form setCity={setCity} getWeather={getWeather}/>
      <Results results={results}/>
    </div>
  );
}

export default App;
