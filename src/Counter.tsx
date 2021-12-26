interface NumberProps {
  number: number
}

const Counter: React.FC<NumberProps> = ({number}) => {
  return (
    <div>value: {number}</div>
  )
}

export default Counter;