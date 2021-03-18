import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import { Home, SignIn, SignUp, Browse } from "./pages";
import { useAuthListener } from "./hooks";
import { IsUserRedirect, ProtectedRoute } from "./helpers/routes";

export function App() {
  const { user } = useAuthListener();

  return (
    <Router>
      <Switch>
        <IsUserRedirect
          path={ROUTES.SIGN_IN}
          user={user}
          loggedInPath={ROUTES.BROWSE}
        >
          <SignIn />
        </IsUserRedirect>

        <IsUserRedirect
          path={ROUTES.SIGN_UP}
          user={user}
          loggedInPath={ROUTES.BROWSE}
        >
          <SignUp />
        </IsUserRedirect>

        <ProtectedRoute path={ROUTES.BROWSE} user={user}>
          <Browse />
        </ProtectedRoute>

        <IsUserRedirect
          path={ROUTES.HOME}
          user={user}
          loggedInPath={ROUTES.BROWSE}
        >
          <Home />
        </IsUserRedirect>
      </Switch>
    </Router>
  );
}
