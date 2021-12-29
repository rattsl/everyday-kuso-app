import styled from "styled-components";
import { BaseButton } from "./BaseButton"

interface ChildrenPropsType {
  children: string
}

export const PrimaryButton: React.FC<ChildrenPropsType> = ({children}) => {
  return (
    <SButton>{children}</SButton>
  )
}

const SButton = styled(BaseButton)`
  background-color: #40514e;
`