import { useEffect } from "react";

interface renderTimesObjectType {
  renderTimes: React.MutableRefObject<number>
}

const RenderTimes: React.FC<renderTimesObjectType> = ({renderTimes}) => {
  useEffect(() => {
    renderTimes.current = renderTimes.current + 1;
  })
  return (
    <div>render-times: {renderTimes.current}</div>
  )
}

export default RenderTimes;