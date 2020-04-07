//Modules
import React from "react"
//Styles
import styled from "styled-components"
import { maxContentWidth, font, spacing, flex } from "../Utilities"

export const StyledContainer = ({ children, background }) => {
  return (
    <StyledContentContainer background={background}>
      <StyledWrapper>{children}</StyledWrapper>
    </StyledContentContainer>
  )
}

const StyledContentContainer = styled.section`
  width: 100%;
  background: ${props => (props.background ? props.background : "white")};
  margin: 0 auto;
  padding: 5rem 0;
`

const StyledWrapper = styled.div`
  ${flex("column", "flex-start", "center")};
  width: 100%;
  max-width: ${maxContentWidth};
  margin: 0 auto;

  h1 {
    ${font("L")};
    font-weight: 300;
    letter-spacing: 0.1rem;
    text-align: center;
    padding: 0 ${spacing.M};
    margin: 0 ${spacing.S} ${spacing.M} ${spacing.S};

    @media (min-width: 500px) {
      ${font("XL")};
    }
  }

  .not-found-link {
    color: dodgerblue;
    cursor: pointer;
  }
`
