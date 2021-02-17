import React from "react";
import { render } from "react-dom";
import reportWebVitals from "./reportWebVitals";

import GlobalSettings from './styles/settings';
import GlobalStyles from './styles/generic';
import GlobalBase from './styles/base/root';

import { App } from "./App";
import configureStore from "./redux/store";

const store = configureStore();

render(
    <>
        <GlobalBase />
        <GlobalStyles />
        <GlobalSettings />
        <App store={store} />
    </>, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
