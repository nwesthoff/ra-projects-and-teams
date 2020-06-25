import styled from "styled-components";

const MainContent = styled.main`
  width: 100%;
  display: flex;
  flex-flow: column wrap;
  align-items: center;

  & > * {
    width: 100%;
    max-width: 900px;
  }
`;

export default MainContent;
