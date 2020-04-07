//Styles
import styled from "styled-components"
import { colors, grays } from "../Utilities"

export const StyledChevronDown = styled.div`
  width: 100%;
  height: 20vh;
  background: ${grays[1]};
  clip-path: polygon(50% 100%, 0 0, 100% 0);
`

export const StyledChevronUp = styled(StyledChevronDown)`
  clip-path: polygon(50% 0, 0 100%, 100% 100%);
  margin-bottom: -0.1rem;
`
