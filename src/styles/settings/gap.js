import { css } from 'styled-components';
import { rem } from 'polished';

const GlobalGap = css`
  :root {
    --gap-half-min: ${rem('5px')};
    --gap-min: ${rem('10px')};
    --gap-med: ${rem('15px')};
    --gap-max: ${rem('20px')};
    --gap-super-max: ${rem('35px')};
  }
`;

export default GlobalGap;
