type ResultsStatePropsType = {
  results: {
    country: string
    cityName: string
    tempareture: string
    conditionText: string
    icon: string
  }
}

const Results = (props: ResultsStatePropsType) => {
  return (
    <div className="container">
      { props.results.cityName && <div>City: {props.results.cityName}</div>}
      { props.results.country && <div>Country: {props.results.country}</div>}
      { props.results.tempareture && <div>Tempareture: {props.results.tempareture}<span>度</span></div>}
      { props.results.conditionText && <div><img src={props.results.icon} /><span>{props.results.conditionText}</span></div>}
    </div>
  )
}

export default Results;