import { createGlobalStyle } from 'styled-components';
import GlobalColors from './colors';
import GlobalSize from './size';
import GlobalFonts from './fonts';
import GlobalGap from './gap';

const GlobalSettings = createGlobalStyle`
    ${GlobalColors}
    ${GlobalFonts}
    ${GlobalSize}
    ${GlobalGap}
`;

export default GlobalSettings;
