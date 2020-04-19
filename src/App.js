import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import Home from "./components/pages/home";
import Users from "./components/pages/Users";
import Topics from "./components/pages/Topics";
import SubTopics from "./components/pages/SubTopics";
import About from "./components/pages/about";
import Signin from "./components/pages/Signin";
import Signup from "./components/pages/Signup";
import "./App.css";
//TODO: select option for subject topic and sub topic
export default function App() {
  return (
    <Router>
      <div className="container">
        <nav>
          <ul style={{ decoration: "none" }}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/users">Users</NavLink>
            </li>
            <li>
              <NavLink to="/topics">Topics</NavLink>
            </li>
            <li>
              <NavLink to="/subtopics">SubTopics</NavLink>
            </li>
            <li>
              <NavLink to="/signin">Signin</NavLink>
            </li>
            <li>
              <NavLink to="/signup">Signup</NavLink>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/topics">
            <Topics />
          </Route>
          <Route path="/subtopics">
            <SubTopics />
          </Route>

          <Route path="/signin">
            <Signin />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
