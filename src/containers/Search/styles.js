import styled from "styled-components";
import { rem } from "polished";

const iconSearch =
  "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTlweCIgaGVpZ2h0PSIxOXB4IiB2aWV3Qm94PSIwIDAgMTkgMTkiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+U2hhcGVAMSw1eDwvdGl0bGU+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iR3VpZGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC05MC4wMDAwMDAsIC02MzQuMDAwMDAwKSIgZmlsbD0iI0ZGMDAwMCIgZmlsbC1ydWxlPSJub256ZXJvIj4KICAgICAgICAgICAgPHBhdGggZD0iTTEwOC42ODQyODYsNjUxLjIwMTY0NiBMMTA0LjAyNDYwNCw2NDYuNTM2MzUxIEMxMDYuMzY3NDYxLDY0My40ODY5NjggMTA2LjEzMzE3NSw2MzkuMDgyMzA1IDEwMy4zMjE3NDYsNjM2LjI5MzU1MyBDMTAxLjc4NTg3Myw2MzQuNzU1ODMgOTkuODA3NDYwNiw2MzQgOTcuODAzMDE2MSw2MzQgQzk1Ljc5ODU3MTYsNjM0IDkzLjgyMDE1ODksNjM0Ljc1NTgzIDkyLjI4NDI4NTgsNjM2LjI5MzU1MyBDODkuMjM4NTcxNCw2MzkuMzQyOTM2IDg5LjIzODU3MTQsNjQ0LjI5NDkyNSA5Mi4yODQyODU4LDY0Ny4zNDQzMDcgQzkzLjgyMDE1ODksNjQ4Ljg4MjAzIDk1Ljc5ODU3MTYsNjQ5LjYzNzg2IDk3LjgwMzAxNjEsNjQ5LjYzNzg2IEM5OS40NjkwNDc5LDY0OS42Mzc4NiAxMDEuMTM1MDgsNjQ5LjExNjU5OCAxMDIuNTE0NzYyLDY0OC4wNDgwMTEgTDEwNy4yMDA0NzcsNjUyLjY4NzI0MyBDMTA3LjQwODczMSw2NTIuODk1NzQ4IDEwNy42NjkwNDgsNjUzIDEwNy45NTUzOTcsNjUzIEMxMDguMjE1NzE1LDY1MyAxMDguNTAyMDY0LDY1Mi44OTU3NDggMTA4LjcxMDMxOCw2NTIuNjg3MjQzIEMxMDkuMTAwNzk0LDY1Mi4yOTYyOTYgMTA5LjEwMDc5NCw2NTEuNjE4NjU2IDEwOC42ODQyODYsNjUxLjIwMTY0NiBaIE05Ny42NDk2MTI5LDY0Ny4xOTQ0NDQgQzk2LjE1NTc5OTksNjQ3LjE5NDQ0NCA5NC43ODg1ODExLDY0Ni42MTI0NDMgOTMuNzI1MTg4OCw2NDUuNTc0OTYyIEM5MS41NzMwODUyLDY0My40MjQwODcgOTEuNTczMDg1Miw2MzkuOTA2NzczIDkzLjcyNTE4ODgsNjM3LjczMDU5NCBDOTQuNzYzMjYyMyw2MzYuNjkzMTEzIDk2LjE1NTc5OTksNjM2LjExMTExMSA5Ny42NDk2MTI5LDYzNi4xMTExMTEgQzk5LjE0MzQyNiw2MzYuMTExMTExIDEwMC41MTA2NDUsNjM2LjY5MzExMyAxMDEuNTc0MDM3LDYzNy43MzA1OTQgQzEwMi42Mzc0MjksNjM4Ljc2ODA3NSAxMDMuMTk0NDQ0LDY0MC4xNTk4MTcgMTAzLjE5NDQ0NCw2NDEuNjUyNzc4IEMxMDMuMTk0NDQ0LDY0My4xNDU3MzggMTAyLjYxMjExMSw2NDQuNTEyMTc3IDEwMS41NzQwMzcsNjQ1LjU3NDk2MiBDMTAwLjUzNTk2NCw2NDYuNjM3NzQ3IDk5LjExODEwNzEsNjQ3LjE5NDQ0NCA5Ny42NDk2MTI5LDY0Ny4xOTQ0NDQgWiIgaWQ9IlNoYXBlIj48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=";

export const InputSearch = styled.input`
  background: ${(props) =>
    props.page === "home"
      ? `var(--color-pink) url("${iconSearch}") no-repeat 35px center / 40px`
      : `var(--color-white) url("${iconSearch}") no-repeat 35px center / 40px`};

  color: ${(props) =>
    props.page === "home" ? "var(--color-pink-strong)" : "var(--color-gray)"};

  margin: ${rem("60px")} ${rem("15px")};
  padding: ${rem("25px")};
  padding-left: ${rem("100px")};
  font-size: var(--font-big);
  width: 100%;
  border-radius: ${rem("50px")};
  max-width: ${(props) =>
    props.page === "home" ? `${rem("860px")}` : `${rem("500px")}`};
  box-sizing: border-box;

  &::-webkit-input-placeholder {
    color: ${(props) =>
      props.page === "home" ? "var(--color-pink-strong)" : "var(--color-gray)"};
  }

  @media screen and (max-width: 520px) {
    background: ${(props) =>
      props.page === "home"
        ? `var(--color-pink) url("${iconSearch}") no-repeat 25px center / 24px`
        : `var(--color-white) url("${iconSearch}") no-repeat 25px center / 24px`};

    padding: ${rem("20px")};
    padding-left: ${rem("70px")};
  }
`;
