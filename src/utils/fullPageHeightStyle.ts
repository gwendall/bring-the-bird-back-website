import { css } from "styled-components";

const fullPageHeightStyle = css`
  height: 100%;
  min-height: 100vh;
  @supports (-webkit-touch-callout: none) {
    min-height: fill-available;
  }
`;

export default fullPageHeightStyle;