import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Paperbase from "./Paperbase";
import Signin from "./Signin";
export default class extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/dashboard*"
            render={props => <Paperbase {...props} />}
          />
          <Route path="/" render={props => <Signin {...props} />} />
        </Switch>
      </BrowserRouter>
    );
  }
}
