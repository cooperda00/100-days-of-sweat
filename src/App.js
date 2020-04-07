//Modules
import React from "react";
//Styles
import styled from "styled-components";
import { flex } from "./Utilities";
//Components
import Days from "./components/Days";
//Base CSS
import "./base.css";

function App() {
  return (
    <StyledApp>
      <h1 className="title">#100 Days of Sweat</h1>
      <Days />
    </StyledApp>
  );
}

const StyledApp = styled.div`
  ${flex("column", "flex-start", "center")};

  .title {
    height: 3vh;
    width: 100vw;
    text-align: center;
  }
`;

export default App;
