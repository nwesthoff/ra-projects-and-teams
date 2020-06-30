import styled from "styled-components";
import { transparentize } from "polished";
import { theme } from "../config/theme";

const ColumnGrid = styled.div`
  display: flex;
  justify-content: space-between;
  flex-flow: wrap row;
  margin: 1.2rem 0;
  font-size: 1.2rem;
  line-height: 1.4;

  & > div {
    position: relative;
    margin: 1.2rem 0 0 1.2rem;
    flex-basis: ${(props: { cols: number }) =>
      `calc((100%/${props.cols ? props.cols : 3}) - 1.2rem)`};
    gap: 1.2rem;
    flex-grow: 1;
    min-width: 260px;
    max-width: 500px;
    figcaption {
      text-align: left;
    }
    img,
    video {
      display: block;
      width: 100%;
      height: auto;
    }

    .number {
      color: ${transparentize(0.8, theme.colors.text)};
      font-weight: 900;
      font-size: 3rem;
      position: absolute;
      top: -25px;
      left: -13px;
      z-index: 1;
    }

    h3 {
      position: relative;
      font-size: 1.2rem;
      letter-spacing: unset;
      margin-bottom: 0.4rem;
      margin-top: 0;
      z-index: 2;
    }
  }
`;

export default ColumnGrid;
