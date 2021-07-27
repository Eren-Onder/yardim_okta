import { useOktaAuth } from "@okta/okta-react";
import React from "react";
import { useHistory, Link } from "react-router-dom";
import { Container, Icon, Image, Menu } from "semantic-ui-react";
import { VscSearch } from "react-icons/vsc";
import DataSearch from "./Datatable/datasearch";

import "./App.css";
const Navbar = () => {
  const history = useHistory();
  const { authState, oktaAuth } = useOktaAuth();

  const login = async () => history.push("/login");
  const logout = async () => oktaAuth.signOut();

  return (
    <div>
      <Menu fixed="top" inverted>
        <Container>
          <Menu.Item header>
            <VscSearch />
            &nbsp;
            <Link to="/datasearch">WO IST HILFE?</Link>
          </Menu.Item>
          {authState.isAuthenticated && (
            <Menu.Item id="messages-button">
              <Icon name="mail outline" />
              <Link to="/messages">Messages</Link>
            </Menu.Item>
          )}
          {authState.isAuthenticated && (
            <Menu.Item id="profile-button">
              <Link to="/profile">Profile</Link>
            </Menu.Item>
          )}
          {authState.isAuthenticated && (
            <Menu.Item id="logout-button" onClick={logout}>
              Logout
            </Menu.Item>
          )}
          {!authState.isPending && !authState.isAuthenticated && (
            <Menu.Item className="login" onClick={login}>
              Login
            </Menu.Item>
          )}
        </Container>
      </Menu>
    </div>
  );
};
export default Navbar;
