import { useState } from "react";

const Form = () => {
  const [city, setCity] = useState("");
  return (
    <form >
      <input type="text" name="city" onChange={e => setCity(e.target.value)}/>
      {city}
      <button>Get Weather</button>
    </form>
  )
}

export default Form;