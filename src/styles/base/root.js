import { createGlobalStyle } from 'styled-components';

const Root = createGlobalStyle`
    html {
        font-size: 100%;
        box-sizing: border-box;
        height: 100%;
    }
    body {
        box-sizing: border-box;
        overflow-x: hidden;
        overflow-y: scroll;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        font-family: var(--font-family);
        background-color: var(--color-white);
    }
    img{
        max-width: 100%
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
        margin: 0;
        padding: 0;
        border: 0;
    }

    a {
        text-decoration: inherit;
        color: inherit;
        &:hover {
            cursor: pointer;
        }
    }

    ul,
    ol {
        padding-left: 0;
        margin-top: 0;
        margin-bottom: 0;
        list-style: none;
    }
    img {
        max-width: 100%;
        height: auto;
        -ms-interpolation-mode: bicubic;
        display: inline-block;
        vertical-align: middle;
    }
    strong {
        font-weight: var(--font-bold);
    }

    em {
        font-style: italic;
    }
`;
export default Root;
