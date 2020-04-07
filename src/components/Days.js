import React from "react";
//Styles
import styled from "styled-components";
import { spacing } from "../Utilities";
//Components
import Day from "./Day";
//Constants
import { days } from "../constants/days";

const Days = ({ showDays }) => {
  return (
    <StyledDays show={showDays ? true : false}>
      {days.map((day, i) => {
        return <Day key={i} day={day} />;
      })}
    </StyledDays>
  );
};

const StyledDays = styled.section`
  height: 92vh;
  width: 100vw;

  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(10, 1fr);
  grid-gap: ${spacing.S};

  padding: ${spacing.M};

  opacity: ${(props) => (props.show ? "1" : "0")};
`;

export default Days;
