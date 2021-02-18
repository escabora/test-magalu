import styled from "styled-components";
import { rem } from "polished";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${rem("70px")};

  @media screen and (max-width: 520px) {
    grid-template-columns: repeat(1, 1fr);
    gap: ${rem("17px")};
  }
`;

export default Grid;
