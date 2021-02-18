import styled from 'styled-components';
import { rem } from 'polished'

const like = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+UGF0aCBDb3B5IDJAMSw1eDwvdGl0bGU+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iR3VpZGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMzEuMDAwMDAwLCAtODI4LjAwMDAwMCkiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSIjRkYwMDAwIiBzdHJva2Utd2lkdGg9IjIiPgogICAgICAgICAgICA8cGF0aCBkPSJNMjQ4LjQyODcxMiw4MzkuMDUzMzQ1IEwyNDEuMjY4MzMxLDg0Ni44ODUzNDggQzI0MS4xOTk4OTYsODQ2Ljk2MDU5NCAyNDEuMTAyNjQxLDg0NyAyNDEuMDAxODAyLDg0NyBDMjQwLjkwMDk0MSw4NDcgMjQwLjgwMzcwNyw4NDYuOTYwNTk0IDI0MC43MzUyNzIsODQ2Ljg4NTM0OCBMMjMzLjU3NDg5Miw4MzkuMDUzMzQ1IEMyMzEuNDc1MDM2LDgzNi43NjAzNDIgMjMxLjQ3NTAzNiw4MzMuMDMwNjU0IDIzMy41NzQ4OTIsODMwLjczNzY1MSBDMjM0LjU5Nzc5LDgyOS42MTYyMzIgMjM1Ljk2Mjg4Nyw4MjkgMjM3LjQxODAwNiw4MjkgQzIzOC43NTA2NzcsODI5IDI0MC4wMTEzMDcsODI5LjUxNTkyNSAyNDEuMDAxODAyLDgzMC40NjUzNTQgQzI0MS45OTIyOTcsODI5LjUxNTkyNSAyNDMuMjQ5MzIyLDgyOSAyNDQuNTgxOTkzLDgyOSBDMjQ2LjAzNzExMiw4MjkgMjQ3LjQwNTc5Miw4MjkuNjE2MjMyIDI0OC40MzIzMTgsODMwLjczNzY1MSBDMjUwLjUyNDk2Myw4MzMuMDMwNjU0IDI1MC41MjEzNTcsODM2Ljc2MDM0MiAyNDguNDI4NzEyLDgzOS4wNTMzNDUgWiIgaWQ9IlBhdGgtQ29weS0yIj48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4='
const likeHover = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzBweCIgaGVpZ2h0PSIzMHB4IiB2aWV3Qm94PSIwIDAgMzAgMzAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+UGF0aEAxLDV4PC90aXRsZT4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJHdWlkZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTgxLjAwMDAwMCwgLTk0Mi4wMDAwMDApIiBmaWxsPSIjRkYwMDAwIiBmaWxsLXJ1bGU9Im5vbnplcm8iPgogICAgICAgICAgICA8cGF0aCBkPSJNMTA4LjM4MTE4Nyw5NTguNzU1NTc1IEw5Ni40NDcyMTg5LDk3MS44MDg5MTMgQzk2LjMzMzE2MDQsOTcxLjkzNDMyNCA5Ni4xNzEwNjc3LDk3MiA5Ni4wMDMwMDI4LDk3MiBDOTUuODM0OTAxMiw5NzIgOTUuNjcyODQ1MSw5NzEuOTM0MzI0IDk1LjU1ODc4NjYsOTcxLjgwODkxMyBMODMuNjI0ODE5NSw5NTguNzU1NTc1IEM4MC4xMjUwNjAyLDk1NC45MzM5MDQgODAuMTI1MDYwMiw5NDguNzE3NzU2IDgzLjYyNDgxOTUsOTQ0Ljg5NjA4NSBDODUuMzI5NjUwOCw5NDMuMDI3MDUzIDg3LjYwNDgxMTMsOTQyIDkwLjAzMDAxMDUsOTQyIEM5Mi4yNTExMjc5LDk0MiA5NC4zNTIxNzc5LDk0Mi44NTk4NzQgOTYuMDAzMDAzLDk0NC40NDIyNTcgQzk3LjY1MzgyODEsOTQyLjg1OTg3NCA5OS43NDg4NzA0LDk0MiAxMDEuOTY5OTg4LDk0MiBDMTA0LjM5NTE4Nyw5NDIgMTA2LjY3NjMxOSw5NDMuMDI3MDUzIDEwOC4zODcxOTYsOTQ0Ljg5NjA4NSBDMTExLjg3NDkzOCw5NDguNzE3NzU2IDExMS44Njg5MjksOTU0LjkzMzkwNCAxMDguMzgxMTg3LDk1OC43NTU1NzUgWiIgaWQ9IlBhdGgiPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==';

export const Heart = styled.div`
    background: url('${like}') no-repeat center / 30px;

    width: ${rem('35px')};
    height: ${rem('35px')};
    cursor: pointer;
    transform: scale(1);
    transition: all .2s ease-in-out;

    &:focus,
    &:active {
        border: 0;
        box-shadow: none;
        outline: none;
    }

    &:hover {
        transform: scale(1.1);
        background: url('${likeHover}') no-repeat center / 30px;
    }

    
`;