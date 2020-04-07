//Modules
import React from "react"
import { Link } from "gatsby"
//Styles
import styled from "styled-components"
import { grays, font, colors, flex, boxShadow } from "../Utilities"
//Icons
import { IoIosArrowRoundForward } from "react-icons/io"

//MAIN BUTTONS ******************************************
export const StyledButton = styled.button`
  ${font("S")}
  font-weight: 300;
  letter-spacing: 0.1rem;
  border: none;
  background: ${colors.secondary};
  padding: 1rem 2rem;
  color: black !important;
  cursor: pointer;
  transition: 0.4s;
  border-bottom: 0.3rem solid ${colors.secondaryD};
  text-align: center;
  box-shadow: ${boxShadow.dark};

  &:hover {
    background: ${colors.secondaryD};
  }
`

export const StyledOutButton = styled.a`
  ${font("S")}
  font-weight: 300;
  letter-spacing: 0.1rem;
  border: none;
  background: ${colors.secondary};
  padding: 1rem 2rem;
  color: black !important;
  cursor: pointer;
  transition: 0.4s;
  border-bottom: 0.3rem solid ${colors.secondaryD};
  text-align: center;
  box-shadow: ${boxShadow.dark};

  &:hover {
    background: ${colors.secondaryD};
  }
`

export const StyledCTA = styled(Link)`
  ${font("S")}
  font-weight: 300;
  letter-spacing: 0.1rem;
  border: none;
  background: ${colors.secondary};
  padding: 1rem 2rem;
  color: black !important;
  cursor: pointer;
  transition: 0.4s;
  border-bottom: 0.3rem solid ${colors.secondaryD};
  text-align: center;
  box-shadow: ${boxShadow.dark};

  &:hover {
    background: ${colors.secondaryD};
  }
`

//HOLLOW BUTTONS ******************************************
export const StyledHollowButton = styled(StyledButton)`
  background: none;
  border: 0.3rem solid ${grays[5]};

  &:hover {
    border: 0.3rem solid ${colors.primaryDD};
    background: white;
  }
`

export const StyledHollowAnchor = styled(StyledOutButton)`
  background: none;
  border: 0.3rem solid ${grays[5]};

  &:hover {
    border: 0.3rem solid ${colors.primaryDD};
    background: white;
  }
`

export const StyledHollowLink = styled(StyledCTA)`
  background: none;
  border: 0.3rem solid ${grays[5]};

  &:hover {
    border: 0.3rem solid ${colors.primaryDD};
    background: white;
  }
`

//ARROW BUTTON ******************************************
export const CardArrowButton = ({ text }) => {
  return (
    <StyledCardArrowButton>
      {text} <IoIosArrowRoundForward />
    </StyledCardArrowButton>
  )
}

export const CardArrowAnchor = ({ text, url }) => {
  return (
    <StyledCardArrowAnchor href={url}>
      {text} <IoIosArrowRoundForward />
    </StyledCardArrowAnchor>
  )
}

export const CardArrowLink = ({ text, path }) => {
  return (
    <StyledCardArrowLink to={path}>
      {text} <IoIosArrowRoundForward />
    </StyledCardArrowLink>
  )
}

const StyledCardArrowButton = styled.button`
  ${flex("row", "flex-start", "center")};
  ${font("S")};
  padding: 0;
  margin: 0;
  color: ${colors.primaryDD};

  svg {
    margin-left: 0.2rem;
    ${font("SM")};
    transition: 0.4s;
  }

  &:hover {
    svg {
      transform: translateX(0.4rem);
    }
  }
`

const StyledCardArrowAnchor = styled.a`
  ${flex("row", "flex-start", "center")};
  ${font("S")};
  padding: 0;
  margin: 0;
  color: ${colors.primaryDD} !important;

  svg {
    margin-left: 0.2rem;
    ${font("SM")};
    transition: 0.4s;
  }

  &:hover {
    svg {
      transform: translateX(0.4rem);
    }
  }
`

const StyledCardArrowLink = styled(Link)`
  ${flex("row", "flex-start", "center")};
  ${font("S")};
  padding: 0;
  margin: 0;
  color: ${colors.primaryDD} !important;

  svg {
    margin-left: 0.2rem;
    ${font("SM")};
    transition: 0.4s;
  }

  &:hover {
    svg {
      transform: translateX(0.4rem);
    }
  }
`

//ANIMATED ARROW BUTTONS

export const AnimatedArrowButton = ({ children }) => {
  return (
    <StyledAnimatedArrowButton>
      {children}
      <span />
    </StyledAnimatedArrowButton>
  )
}

export const AnimatedArrowAnchor = ({ children }) => {
  return (
    <StyledAnimatedArrowAnchor>
      {children}
      <span />
    </StyledAnimatedArrowAnchor>
  )
}

export const AnimatedArrowLink = ({ children }) => {
  return (
    <StyledAnimatedArrowLink>
      {children}
      <span />
    </StyledAnimatedArrowLink>
  )
}

const StyledAnimatedArrowButton = styled(StyledButton)`
  text-align: center;
  transition: 0.4s;
  cursor: pointer;
  margin: 5px;

  span {
    cursor: pointer;
    position: relative;
    transition: 0.4s;
  }

  span::after {
    content: " >>";
    position: absolute;
    opacity: 0;
    /* top: 0; */
    right: -20px;
    transition: 0.5s;
  }

  &:hover span {
    padding-right: 25px;
  }

  &:hover span:after {
    opacity: 1;
    right: 0;
  }
`

const StyledAnimatedArrowAnchor = styled(StyledOutButton)`
  text-align: center;
  transition: 0.4s;
  cursor: pointer;
  margin: 5px;

  span {
    cursor: pointer;
    position: relative;
    transition: 0.4s;
  }

  span::after {
    content: " >>";
    position: absolute;
    opacity: 0;
    right: -20px;
    transition: 0.5s;
  }

  &:hover span {
    padding-right: 25px;
  }

  &:hover span:after {
    opacity: 1;
    right: 0;
  }
`

const StyledAnimatedArrowLink = styled(StyledCTA)`
  text-align: center;
  transition: 0.4s;
  cursor: pointer;
  margin: 5px;

  span {
    cursor: pointer;
    position: relative;
    transition: 0.4s;
  }

  span::after {
    content: " >>";
    position: absolute;
    opacity: 0;
    right: -20px;
    transition: 0.5s;
  }

  &:hover span {
    padding-right: 25px;
  }

  &:hover span:after {
    opacity: 1;
    right: 0;
  }
`

//STRETCH BUTTONS
export const StyledStretchButton = styled(StyledButton)`
  transition: all 0.5s cubic-bezier(0.65, -0.25, 0.25, 1.95);

  &:hover,
  &:focus,
  &:active {
    background: ${colors.primary};
    letter-spacing: 0.125rem;
  }
`

export const StyledStretchAnchor = styled(StyledOutButton)`
  transition: all 0.5s cubic-bezier(0.65, -0.25, 0.25, 1.95);

  &:hover,
  &:focus,
  &:active {
    background: ${colors.primary};
    letter-spacing: 0.125rem;
  }
`

export const StyledStretchLink = styled(StyledCTA)`
  transition: all 0.5s cubic-bezier(0.65, -0.25, 0.25, 1.95);

  &:hover,
  &:focus,
  &:active {
    background: ${colors.primary};
    letter-spacing: 0.125rem;
  }
`

//WOBBLE BUTTONS

export const WobbleButton = ({ children }) => {
  return (
    <StyledWobbleButton>
      <span>{children}</span>
    </StyledWobbleButton>
  )
}

export const WobbleAnchor = ({ children }) => {
  return (
    <StyledWobbleAnchor>
      <span>{children}</span>
    </StyledWobbleAnchor>
  )
}

export const WobbleLink = ({ children }) => {
  return (
    <StyledWobbleLink>
      <span>{children}</span>
    </StyledWobbleLink>
  )
}

const StyledWobbleButton = styled(StyledButton)`
  @keyframes rotate {
    0% {
      transform: rotate(0deg) translate3d(0, 0, 0);
    }
    25% {
      transform: rotate(3deg) translate3d(0, 0, 0);
    }
    50% {
      transform: rotate(-3deg) translate3d(0, 0, 0);
    }
    75% {
      transform: rotate(1deg) translate3d(0, 0, 0);
    }
    100% {
      transform: rotate(0deg) translate3d(0, 0, 0);
    }
  }

  @keyframes storm {
    0% {
      transform: translate3d(0, 0, 0) translateZ(0);
    }
    25% {
      transform: translate3d(4px, 0, 0) translateZ(0);
    }
    50% {
      transform: translate3d(-3px, 0, 0) translateZ(0);
    }
    75% {
      transform: translate3d(2px, 0, 0) translateZ(0);
    }
    100% {
      transform: translate3d(0, 0, 0) translateZ(0);
    }
  }

  ${flex("row", "center", "center")};

  &:hover {
    animation: 0.7s rotate ease-in-out both;
    background: ${colors.primary};

    span {
      animation: 0.7s storm ease-in-out both;
      animation-delay: 0.06s;
    }
  }
`

const StyledWobbleAnchor = styled(StyledOutButton)`
  @keyframes rotate {
    0% {
      transform: rotate(0deg) translate3d(0, 0, 0);
    }
    25% {
      transform: rotate(3deg) translate3d(0, 0, 0);
    }
    50% {
      transform: rotate(-3deg) translate3d(0, 0, 0);
    }
    75% {
      transform: rotate(1deg) translate3d(0, 0, 0);
    }
    100% {
      transform: rotate(0deg) translate3d(0, 0, 0);
    }
  }

  @keyframes storm {
    0% {
      transform: translate3d(0, 0, 0) translateZ(0);
    }
    25% {
      transform: translate3d(4px, 0, 0) translateZ(0);
    }
    50% {
      transform: translate3d(-3px, 0, 0) translateZ(0);
    }
    75% {
      transform: translate3d(2px, 0, 0) translateZ(0);
    }
    100% {
      transform: translate3d(0, 0, 0) translateZ(0);
    }
  }

  ${flex("row", "center", "center")};

  &:hover {
    animation: 0.7s rotate ease-in-out both;
    background: ${colors.primary};

    span {
      animation: 0.7s storm ease-in-out both;
      animation-delay: 0.06s;
    }
  }
`

const StyledWobbleLink = styled(StyledCTA)`
  @keyframes rotate {
    0% {
      transform: rotate(0deg) translate3d(0, 0, 0);
    }
    25% {
      transform: rotate(3deg) translate3d(0, 0, 0);
    }
    50% {
      transform: rotate(-3deg) translate3d(0, 0, 0);
    }
    75% {
      transform: rotate(1deg) translate3d(0, 0, 0);
    }
    100% {
      transform: rotate(0deg) translate3d(0, 0, 0);
    }
  }

  @keyframes storm {
    0% {
      transform: translate3d(0, 0, 0) translateZ(0);
    }
    25% {
      transform: translate3d(4px, 0, 0) translateZ(0);
    }
    50% {
      transform: translate3d(-3px, 0, 0) translateZ(0);
    }
    75% {
      transform: translate3d(2px, 0, 0) translateZ(0);
    }
    100% {
      transform: translate3d(0, 0, 0) translateZ(0);
    }
  }

  ${flex("row", "center", "center")};

  &:hover {
    animation: 0.7s rotate ease-in-out both;
    background: ${colors.primary};

    span {
      animation: 0.7s storm ease-in-out both;
      animation-delay: 0.06s;
    }
  }
`
