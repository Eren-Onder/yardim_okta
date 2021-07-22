import React from "react";
import { Route, useHistory, Switch } from "react-router-dom";
import { OktaAuth } from "@okta/okta-auth-js";
import { Security, SecureRoute, LoginCallback } from "@okta/okta-react";
import { Container } from "semantic-ui-react";
import config from "./config";
import Home from "./Home";
import CustomLoginComponent from "./Login";
import Messages from "./Messages";
import Navbar from "./Navbar";
import Profile from "./Profile";
import ListAdd from "./components/ListAdd";

const oktaAuth = new OktaAuth(config.oidc);

const App = () => {
  const history = useHistory(); // example from react-router

  const customAuthHandler = () => {
    // Redirect to the /login page that has a CustomLoginComponent
    history.push("/login");
  };

  return (
    <Security oktaAuth={oktaAuth} onAuthRequired={customAuthHandler}>
      <Navbar />
      <Container text style={{ marginTop: "7em" }}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login/callback" component={LoginCallback} />
          <Route path="/login" component={CustomLoginComponent} />
          <SecureRoute path="/messages" component={Messages} />
          <SecureRoute path="/profile" component={Profile} />
          <SecureRoute path="/listAdd" component={ListAdd} />
        </Switch>
      </Container>
    </Security>
  );
};

export default App;
