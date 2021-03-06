import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import SignIn from './SignIn';
import SignUp from "./SignUp";
import UserEdit from "./UserEdit";
import CommentManagementService from "./CommentManageService";
import { createBrowserHistory } from "history";
import URLRegister from "./URL-Register";

export default function RouterApp() {

  const history = createBrowserHistory();

  const routes = (
    <Router history={history}>
      <Route exact path={"/"} component={SignIn} />
      <Route exact path={"/SignIn"} component={SignIn} />
      <Route exact path={"/SignUp"} component={SignUp} />
      <Route exact path={"/UserEdit"} component={UserEdit} />
      <Route exact path={"/URL-Register"} component={URLRegister} />
      <Route exact path={"/CommentManagementService"} component={CommentManagementService} />
    </Router>
  );

  return (
    <div>
      <Switch>
        {routes}
      </Switch>
    </div>
  );
}
