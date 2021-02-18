import styled from 'styled-components';
import { rem } from 'polished';

export const Title = styled.h2`
    margin-top: ${rem('80px')};
    margin-bottom: ${rem('60px')};
    font-size: var(--font-super-big);
    color: var(--color-grey);
    text-align: center;
`;

export const ContentFavorite = styled.div`
    padding: ${rem('20px')};
`;
