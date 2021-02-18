import styled from 'styled-components';
import { rem } from 'polished'

export const ReadMore = styled.button`
    background: var(--color-white);
    color: var(--color-grey-medium); 
    display: block;
    width: ${rem('300px')};
    border-radius: ${rem('30px')};
    padding: ${rem('20px')};
    margin: ${rem('50px')} auto;
    text-transform: uppercase;
    border: 3px solid var(--color-red);
    transition: all .2s ease-in-out;
    cursor: pointer;

    &:hover {
        background: var(--color-red);
        color: var(--color-white);
    }

`;