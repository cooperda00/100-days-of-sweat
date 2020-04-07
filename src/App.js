//Modules
import React, { useState, useEffect } from "react";
//Styles
import "./base.css";
import styled from "styled-components";
import { flex, font, spacing } from "./Utilities";
//Components
import Days from "./components/Days";
import { Helmet } from "react-helmet";

function App() {
  const [showDays, setShowDays] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowDays(true);
    }, 3000);
  }, []);

  return (
    <StyledApp>
      <Helmet>
        <title># 100 Days of Sweat</title>
        <meta name="description" content="# 100 Days of Sweat Habit Tracker" />
      </Helmet>
      <div className="title-container">
        <h1 className="title">
          # 100 Days of Sweat{" "}
          <span role="img" aria-label="working out">
            🏋️
          </span>
        </h1>
      </div>
      <Days showDays={showDays} />
      {!showDays && <p className="loading">Loading...</p>}
    </StyledApp>
  );
}

const StyledApp = styled.div`
  ${flex("column", "flex-start", "center")};

  .title-container {
    ${flex("column", "center", "center")};
    height: 8vh;
    width: 100vw;
  }

  .title {
    ${font("XL")};
    padding: ${spacing.M};
    font-weight: 300;
  }

  .loading {
    ${font("L")};
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 50%;
    transform: translateX(-50%);
  }
`;

export default App;
