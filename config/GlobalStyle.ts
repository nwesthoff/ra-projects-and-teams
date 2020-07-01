import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";
import { transparentize } from "polished";

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'IBM Plex Serif', serif;
    scroll-behavior: smooth;
    box-sizing: border-box;
  }

  body {
    color: white;
    background-color: ${theme.colors.background};
    margin: 0;
    padding: 0;
    font-size: 1.3rem;
    line-height: 1.5em;

    @media (max-width: ${theme.breakpoints.phone}px){
      font-size: 1rem;
      line-height: 1.3em;
    }
  }

  p {
    color: ${theme.colors.text};

    @media (max-width: ${theme.breakpoints.phone}px){
      font-size: 1rem;
      line-height: 1.4em;
    }
  }

  a {
    color: white;
  }

  blockquote {
    background: ${transparentize(0.92, theme.colors.primary)};
    border-left: 2px solid ${theme.colors.primary};
    padding: 1.4rem 2rem 1.6rem;
    margin: 2.4rem 0;

    p {
      font-family: 'IBM Plex Serif', serif;
      font-style: italic;
      font-size: 1.6rem;
      line-height: 1.4em;
      margin: 0;
      color: white;

      &:before {
        content: "“";
        opacity: 70%;
      }

      &:after {
        content: "”";
        opacity: 70%;
      }
    }


    ul {
      margin: .8rem 0 0;
      padding: 0;
    }

    li {
      text-align: end;
      display: block;
      color: ${theme.colors.text};
      font-size: 1.2rem;
      font-style: normal;

      &:before {
        content: "— "
      }
    }

    @media (max-width: ${theme.breakpoints.phone}px) {
      margin: 2rem 0;
      padding: 0.4rem 1.2rem .8rem;  

      p {
        font-size: 1.2rem;
        line-height: 1.2em;
      }

      li {
        font-size: 1rem;
      }
    }
  }

  li {
    color: ${theme.colors.text};
  }

  b, em {
    color: white;
  }

  figure {
    margin: 1.2rem 0 0;
    display: flex;
    align-items: center;
    flex-flow: column;
  }

  img, video {
    width: 100%;
    max-width: 100%;
    height: auto;
  }

  figcaption {
    margin: 1.2rem 1.2rem 2rem;
    text-align: center;
    font-style: italic;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'IBM Plex Sans', sans-serif;
  }

  h2 {
    font-size: 2.5rem;
    line-height: 1.2;
    margin: 5rem 0 1.2rem;
  }

  h3 {
    color: ${theme.colors.primary};
    font-size: 1.6rem;
    margin: 2rem 0 -.8rem;
    line-height: 1.2;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  
  h4, h5, h6 {
    color: white;
    font-size: 1.2rem;
  }

  /* TABLE STYLES */

  table {
    margin-bottom: 20px;
    width: 100%;
  }

  th {
    color: rgb(255, 63, 86);
    font-weight: 600;
    text-align: left;
    background: #222;
  }

  table th,
  table td {
    padding: 8px;
    line-height: 1.5rem;
  }

  table tr:nth-child(even) {
    background: #121212;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  /* FLICKITY */

  .flickity-enabled {
    position: relative;
  }

  .flickity-enabled:focus {
    outline: none;
  }

  .flickity-viewport {
    position: relative;
    height: 100%;
  }

  .flickity-slider {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  /* draggable */

  .flickity-enabled.is-draggable {
    -webkit-tap-highlight-color: transparent;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .flickity-enabled.is-draggable .flickity-viewport {
    cursor: move;
    cursor: -webkit-grab;
    cursor: grab;
  }

  .flickity-enabled.is-draggable .flickity-viewport.is-pointer-down {
    cursor: -webkit-grabbing;
    cursor: grabbing;
  }

  /* ---- flickity-button ---- */

  .flickity-button {
    position: absolute;
    background: hsla(0, 0%, 100%, 0.75);
    border: none;
    color: #333;
  }

  .flickity-button:hover {
    background: white;
    cursor: pointer;
  }

  .flickity-button:focus {
    outline: none;
    box-shadow: 0 0 0 5px #19f;
  }

  .flickity-button:active {
    opacity: 0.6;
  }

  .flickity-button:disabled {
    opacity: 0.3;
    cursor: auto;
    /* prevent disabled button from capturing pointer up event. #716 */
    pointer-events: none;
  }

  .flickity-button-icon {
    fill: #333;
  }

  /* ---- previous/next buttons ---- */

  .flickity-prev-next-button {
    top: 50%;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    /* vertically center */
    transform: translateY(-50%);
  }

  .flickity-prev-next-button.previous {
    left: 10px;
  }
  .flickity-prev-next-button.next {
    right: 10px;
  }
  /* right to left */
  .flickity-rtl .flickity-prev-next-button.previous {
    left: auto;
    right: 10px;
  }
  .flickity-rtl .flickity-prev-next-button.next {
    right: auto;
    left: 10px;
  }

  .flickity-prev-next-button .flickity-button-icon {
    position: absolute;
    left: 20%;
    top: 20%;
    width: 60%;
    height: 60%;
  }

  /* ---- page dots ---- */

  .flickity-page-dots {
    position: absolute;
    width: 100%;
    bottom: -25px;
    padding: 0;
    margin: 0;
    list-style: none;
    text-align: center;
    line-height: 1;
  }

  .flickity-rtl .flickity-page-dots {
    direction: rtl;
  }

  .flickity-page-dots .dot {
    display: inline-block;
    width: 10px;
    height: 10px;
    margin: 0 8px;
    background: #333;
    border-radius: 50%;
    opacity: 0.25;
    cursor: pointer;
  }

  .flickity-page-dots .dot.is-selected {
    opacity: 1;
  }
`;

export default GlobalStyle;
