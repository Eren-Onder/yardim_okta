import { useOktaAuth } from "@okta/okta-react";
import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { Button, Header } from "semantic-ui-react";
import Homes from "./pages/Homes.js";
import "./App.css";
import DataSearch from "./Datatable/datasearch.js";
import ListAdd from "./components/ListAdd.js";
import SearchHome from "./Datatable/searchhome.js";

const Home = () => {
  const history = useHistory();
  const { authState, oktaAuth } = useOktaAuth();
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    if (!authState.isAuthenticated) {
      // When user isn't authenticated, forget any user info
      setUserInfo(null);
    } else {
      oktaAuth.getUser().then((info) => {
        setUserInfo(info);
      });
    }
  }, [authState, oktaAuth]); // Update if authState changes

  const login = async () => {
    history.push("/login");
  };

  const resourceServerExamples = [
    {
      label: "Node/Express Resource Server Example",
      url: "https://github.com/okta/samples-nodejs-express-4/tree/master/resource-server",
    },
    {
      label: "Java/Spring MVC Resource Server Example",
      url: "https://github.com/okta/samples-java-spring/tree/master/resource-server",
    },
    {
      label: "ASP.NET Core Resource Server Example",
      url: "https://github.com/okta/samples-aspnetcore/tree/master/samples-aspnetcore-3x/resource-server",
    },
  ];

  if (authState.isPending) {
    return <div>Loading...</div>;
  }

  return (
    <div className="home-conteiner">
      <div>
        {authState.isAuthenticated && !userInfo && (
          <div>Loading user information...</div>
        )}

        {authState.isAuthenticated && userInfo && (
          <div>
            <p>
              Welcome, &nbsp;
              {userInfo.name}
            </p>
            <div>
              <SearchHome id="datasearch" />
            </div>

            <div>
              <Button>
                <Link to="/listAdd" className="nav-links">
                  Neu Add
                </Link>
              </Button>
            </div>
          </div>
        )}
        {!authState.isPending && !authState.isAuthenticated && <Homes />}
      </div>
    </div>
  );
};
export default Home;
