import { css } from 'styled-components';
import { rem } from 'polished';

const GlobalSize = css`
  :root {
    --font-small: ${rem('14px')};
    --font-medium: ${rem('16px')};
    --font-big: ${rem('18px')};
    --font-medium-big: ${rem('23px')};
    --font-super-big: ${rem('40px')};

    --overlay: 1;
    --minicart: 2;
  }
`;

export default GlobalSize;
