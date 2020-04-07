//Modules
import React, { useState, useEffect } from "react";
//Styles
import styled from "styled-components";
import { grays, flex, font } from "../Utilities";

const Day = ({ day }) => {
  const [checked, toggleChecked] = useState(false);

  useEffect(() => {
    const storedStatus = localStorage.getItem(day);
    if (storedStatus === "true") {
      toggleChecked(storedStatus);
    }
  }, []);

  return (
    <StyledDay
      onClick={() => {
        toggleChecked(!checked);
        localStorage.setItem(day, !checked);
      }}
    >
      <p className="day">{day}</p>
      {checked && (
        <span role="img" aria-label="cross" className="cross">
          &#10060;
        </span>
      )}
    </StyledDay>
  );
};

const StyledDay = styled.article`
  ${flex("column", "center", "center")};
  height: 100%;
  width: 100%;
  border: 0.1rem solid ${grays[3]};
  position: relative;
  cursor: pointer;

  .day {
    ${font("SSM")};
  }

  .cross {
    ${font("L")};
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export default Day;
