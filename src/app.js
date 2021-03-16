import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import { Home, SignIn, SignUp, Browse } from "./pages";

export function App() {
  return (
    <Router>
      <Switch>
        <Route path={ROUTES.SIGN_IN}>
          <SignIn />
        </Route>
        <Route path={ROUTES.SIGN_UP}>
          <SignUp />
        </Route>
        <Route path={ROUTES.BROWSE}>
          <Browse />
        </Route>
        <Route path={ROUTES.HOME}>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
