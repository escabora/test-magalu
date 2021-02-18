import styled from "styled-components";
import { rem } from "polished";

export const Article = styled.article``;

export const ContentImage = styled.div`
  position: relative;
  width: 100%;
  height: ${rem("300px")};
  overflow: hidden;
  border-bottom: ${rem("5px")} solid var(--color-red);

  & > img {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) scale(1);
    height: 100%;
    width: auto;
    max-width: none;
    transition: all 0.2s ease-in-out;
  }

  &:hover {
    & > img {
      transform: translate(-50%, -50%) scale(1.2);
    }
  }
`;

export const ContentDescription = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${rem("20px")} 0px;
`;

export const NameCharacter = styled.h2`
  font-weight: var(--font-bold);
  color: var(--color-grey-medium);
  font-size: var(--font-big);
`;
