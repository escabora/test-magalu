import styled from 'styled-components';
import { rem } from 'polished';

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: ${rem('70px')};
`;

export default Grid;
