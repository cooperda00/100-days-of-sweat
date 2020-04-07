//Modules
import React, { useState, useEffect } from "react";
//Styles
import styled from "styled-components";
import { grays, flex, font, boxShadow } from "../Utilities";
//Animations
import { motion, AnimatePresence } from "framer-motion";
//Audio
import click from "../audio/click.wav";

const Day = ({ day }) => {
  const [checked, toggleChecked] = useState(false);

  const clickSound = new Audio(click);

  useEffect(() => {
    const storedStatus = localStorage.getItem(day);
    if (storedStatus === "true") {
      toggleChecked(storedStatus);
    }
  }, [day]);

  return (
    <StyledDay
      onClick={() => {
        clickSound.play();
        toggleChecked(!checked);
        localStorage.setItem(day, !checked);
      }}
    >
      <p className="day">{day}</p>
      <div className="cross-container">
        <AnimatePresence>
          {checked && (
            <motion.span
              role="img"
              aria-label="cross"
              className="cross"
              transition={{ duration: 0.3 }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.5, 1],
              }}
              exit={{ opacity: 0 }}
            >
              &#10060;
            </motion.span>
          )}
        </AnimatePresence>
      </div>
    </StyledDay>
  );
};

const StyledDay = styled.article`
  ${flex("column", "center", "center")};
  height: 100%;
  width: 100%;
  /* border: 0.1rem solid ${grays[3]}; */
  box-shadow: ${boxShadow.dark};
  position: relative;
  cursor: pointer;

  .day {
    ${font("SSM")};
  }

  .cross-container {
    ${flex("column", "center", "center")};
    position: absolute;
    width: 100%;
    height: 100%;

    .cross {
      ${font("L")};
    }
  }
`;

export default Day;
