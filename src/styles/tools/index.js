import { css } from 'styled-components';
import { rem } from 'polished';

export const center = () => css`
  margin-left: auto;
  margin-right: auto;
`;

export const flexCentered = () => css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const flexColumn = () => css`
  display: flex;
  flex-direction: column;
`;

export const flexSpaced = () => css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const flexAround = () => css`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const Container = () => css`
  width: 100%;
  max-width: ${rem('1135px')};
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 768px) {
    padding: 0 var(--gap-med);
  }
`;
