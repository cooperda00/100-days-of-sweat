import styled from "styled-components"
import { font, spacing, grays, flex } from "../Utilities"

export const StyledForm = styled.form`
  ${flex("column", "flex-start", "center")};
  width: 90%;

  @media (min-width: 1000px) {
    width: 50%;
  }

  .input-group {
    ${flex("column", "flex-start", "center")};
    margin-bottom: ${spacing.M};
    width: 100%;

    label {
      ${font("SM")};
      display: block;
      margin-bottom: ${spacing.S};
      width: 100%;
      /* max-width: 40rem; */
    }

    input,
    textarea {
      padding: ${spacing.S};
      ${font("S")};
      width: 100%;
      /* max-width: 50rem; */
      border: 1px solid ${grays[3]};
    }

    textarea {
      height: 20rem;
      resize: vertical;
    }
  }

  .error-message {
    ${font("S")};
    margin-top: ${spacing.S};
    color: darkred;
  }
`
