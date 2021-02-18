import styled from 'styled-components';
import { rem } from 'polished'
import { flexColumn } from '../../styles/tools';

export const ColumnRow = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const Column = styled.div`
    position: relative;
    width: ${props => props.widthDesk };
    ${flexColumn}
`;

export const NameSpace = styled.p`
    position: absolute;
    font-size: ${rem('120px')};
    width: 200%;
    left: 50%;
    top: 50%;
    transform: translate(-40%,-140%);
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: ${rem('27px')};
    z-index: 0;
    color: var(--color-white);
    text-shadow: 2px 4px 20px #afabab9e;
    opacity: 0.3;
`;

export const TitleName = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: ${rem('20px')};

    h2 {
        width: 70%;
        font-size: var(--font-super-big);
        color: var(--color-grey-medium);
        font-weight: var(--font-bold);
        text-transform: uppercase;
        
    }
    
`;

export const Description = styled.p`
    font-size: var(--font-big);
    color: var(--color-grey-lighter);
    margin-bottom: ${rem('20px')};
    line-height: ${rem('28px')};
`;

export const ImageFeature = styled.img`
    max-width: ${rem('540px')};
    z-index: 1;
`;

export const ContentStatus = styled.div`
    display: flex;
    flex-direction: column;

    & > div {
        display: flex;
        justify-content: space-between;
    }
`;

export const Status = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: ${rem('20px')};

    & > p {
        color: var(--color-grey-medium);
        margin-bottom: ${rem('10px')};
    }

    & > div {
        display: flex;
        align-items: baseline;
        width: 50%;

        & svg {
            margin-right: ${rem('10px')};
        }
        & p {
            color: var(--color-grey-medium);  
        }
    } 
`;

export const StatusRating = styled.div`
    max-width: ${rem('150px')};
    margin-bottom: ${rem('20px')};
    
    & p {
            color: var(--color-grey-medium);  
        }
`;

export const StatusComics = styled.p`
    color: var(--color-grey-medium); 
    margin-bottom: ${rem('20px')};
`;

export const TitleLaunch = styled.h2`
    margin-top: ${rem('200px')};
    margin-bottom: ${rem('40px')};
    font-size: var(--font-medium-big);
    font-weight: var(--font-bold);
    color: var(--color-grey-medium);
`;