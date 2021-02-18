import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { App } from "../containers/App";
import { Home } from "../pages/Home";
import { Character } from "../pages/Character";

function Routes() {
  return (
    <Router basename="test-magalu">
      <App>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/character/:id" component={Character} />
        </Switch>
      </App>
    </Router>
  );
}

export default Routes;
