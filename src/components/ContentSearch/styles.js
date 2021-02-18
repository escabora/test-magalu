import styled from "styled-components";
import { rem } from "polished";

export const ContentSearch = styled.div`
  box-shadow: ${(props) =>
    props.page === "home"
      ? "0 3000px 0 3000px rgb(255 255 255 / 98%)"
      : "0 3000px 0 3000px rgb(231 246 231 / 94%)"};
  position: absolute;
  z-index: 10;
  background: ${(props) =>
    props.page === "home" ? "var(--color-white)" : "var(--color-green)"};
  top: ${(props) => (props.page === "home" ? "36vw" : "10vw")};
  padding: ${rem("20px")};
  width: 100%;
  max-width: ${rem("1350px")};
  box-sizing: border-box;

  @media screen and (max-width: 520px) {
    top: ${(props) => (props.page === "home" ? "70vh" : "36vh")};
  }
`;
