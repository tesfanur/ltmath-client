import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

import Home from "./components/pages/home";
// import VisibleSidebar from "./components/pages/Sidebar";
import Users from "./components/pages/Users";
import Topics from "./components/pages/Topics";
import SubTopics from "./components/pages/SubTopics";
import About from "./components/pages/about";
import Signin from "./components/pages/Signin";
import Signup from "./components/pages/Signup";
import NavBar from "./components/NavBar";
import "./App.css";

//TODO: select option for subject topic and sub topic
export default function App() {
  return (
    <>
      <Router>
        <NavBar />
        <div>
          {/* <nav>
            <ul style={{ decoration: "none" }}>
              <li>
                <NavLink to="/">Home</NavLink>
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
          </nav> */}

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
    </>
  );
}
