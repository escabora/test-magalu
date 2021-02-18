import styled from "styled-components";
import { rem } from "polished";

export const Loading = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: ${rem("50px")} auto;

  div {
    width: ${rem("20px")};
    height: ${rem("20px")};
    border-radius: 50%;
    border: ${rem("12px")} solid var(--color-red);
    border-right-color: transparent;
    animation: loading 1s infinite;
  }

  @keyframes loading {
    to {
      transform: rotate(360deg);
    }
  }
`;
