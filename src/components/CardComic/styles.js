import styled from 'styled-components';
import { rem } from 'polished'

export const Article = styled.article`
    width: 100%;
    max-width: ${rem('200px')};
    margin: 0 auto;
`;

export const ContentImage = styled.div`
    position: relative;
    width: 100%;
    height: ${rem('300px')};
    overflow: hidden;
    border-bottom: ${rem('5px')} solid var(--color-red);

    & > img {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%) scale(1);
        width: 100%;
        height: auto;
        max-width: none;
    }
`;

export const ContentDescription = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${rem('20px')} 0px;
`;

export const NameCharacter = styled.h2`
    width: 80%;
    font-weight: var(--font-normal);
    color: var(--color-grey-medium);
    font-size: var(--font-medium);
`;
