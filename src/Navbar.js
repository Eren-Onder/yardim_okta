/*
 * Copyright (c) 2018, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */

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