import styled from "styled-components";
import { theme } from "../config/theme";

const MainContent = styled.main`
  width: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;

  .small-width,
  .wide-width,
  .full-width {
    width: 100%;
    margin: 0 2rem;

    @media (max-width: ${theme.breakpoints.tablet}px) {
      margin: 0 1.2rem;
    }
  }

  .small-width {
    max-width: 900px;
  }

  .wide-width {
    max-width: 1200px;
  }

  .full-width {
    margin: 0;
  }
`;

export default MainContent;
