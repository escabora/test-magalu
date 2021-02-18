import styled from 'styled-components';
import { rem } from 'polished'
import { center, flexCentered, flexSpaced } from '../../styles/tools';
import { Link } from 'react-router-dom';

export const HeaderContent = styled.header`
  ${center}
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

export const HeaderLogoLink = styled(Link)`
    width: 100%;
    max-width: ${rem('420px')};
    ${flexCentered}
    padding: ${rem('50px')} ${rem('0px')};

    & svg {
        width: 100%; 
    }
`;

export const HeaderContentInner = styled.header`
  ${center}
  display: flex;
  width: 100%;
  align-items: center;
  background: var(--color-green);
  flex-wrap: wrap;

  & ${HeaderLogoLink} {
    max-width: ${rem('290px')};
    margin-right: ${rem('40px')};
  }

`;

export const HeaderSearch = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    & > div {
        justify-content: center;
    }
`;

export const Title = styled.h2`
    font-size: var(--font-super-big);
    color: var(--color-grey-medium);
    font-weight: var(--font-bold);
    text-transform: uppercase;
    margin-bottom: ${rem('20px')};
`;

export const Description = styled.span`
    font-size: var(--font-big);
    color: var(--color-grey);
    margin-bottom: ${rem('20px')};
`;

export const GroupActions = styled.div`
    ${flexSpaced}
    width: 100%;
    max-width: ${rem('1350px')};
    margin-bottom: ${rem('40px')};

    & > div {
        max-width: 50%;
        display: flex;
    }

    @media screen and (max-width: 768px) {
        max-width: 95%;
    }
`;

export const TextResult = styled.span`
    font-size: var(--font-medium-big);
    color: var(--color-grey-lighter);
`;

export const ButtonFavorite = styled.button`
    display: flex;
    align-items: center;
    color: var(--color-pink-strong);
    transition: all .2s ease-in-out;
    cursor: pointer;

    &:hover {
        opacity: 0.6;
    }

    & > svg {
        margin-right: ${rem('10px')};
        width: ${rem('30px')};
        height: ${rem('30px')};
    }

    &:focus,
    &:active {
        border: 0;
        box-shadow: none;
        outline: none;
    }
`;