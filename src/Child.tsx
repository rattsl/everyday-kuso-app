interface Props {
  flag: boolean;
}

const Child: React.FC<Props> = (props) => {
  const { flag } = props;
  return (
    <>
      {flag ? (
        <div>おんっす</div>
      ) : (
        <div>おふです</div>
      ) }
    </>
  )
}

export default Child;