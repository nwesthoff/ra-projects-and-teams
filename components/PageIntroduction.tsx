import styled from "styled-components";
import { theme } from "../config/theme";

const PageIntroduction = styled.div`
  && {
    width: 100%;
    max-width: 1200px;
  }

  h1 {
    font-size: 6rem;
    line-height: 1em;
    max-width: 780px;
  }

  p {
    border-left: 1px solid #979797;
    padding-left: 3rem;
    max-width: 630px;
    color: white;
  }

  @media (max-width: ${theme.breakpoints.tablet}px) {
    h1 {
      font-size: 3rem;
    }
  }
`;

export default PageIntroduction;
