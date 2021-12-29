import styled from "styled-components";
import { BaseButton } from "./BaseButton"


interface ChildrenPropsType {
  children: string
}

export const SecondaryButton: React.FC<ChildrenPropsType> = ({children}) => {
  return (
    <SButton>{children}</SButton>
  )
}

const SButton = styled(BaseButton)`
  background-color: #11999e;
`