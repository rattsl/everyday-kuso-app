type FormPropsType = {
  setCity: React.Dispatch<React.SetStateAction<string>>
  getWeather: (e: any) => void
}

const Form = (props: FormPropsType) => {
  return (
    <form  className="container">
      <input type="text" name="city" onChange={e => props.setCity(e.target.value)}/>
      <button type="submit" onClick={props.getWeather} >Get Weather</button>
    </form>
  )
};

export default Form;