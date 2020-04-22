import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/pages/Home";
// import VisibleSidebar from "./components/pages/Sidebar";
import Users from "./components/pages/Users";
import Topics from "./components/pages/Topics";
import SubTopics from "./components/pages/SubTopics";
import About from "./components/pages/About";
import Signin from "./components/pages/Signin";
import Signup from "./components/pages/Signup";
import NavBar from "./components/NavBar";

//TODO: select option for subject topic and sub topic
export default function App() {
  return (
    <>
      <Router>
        <NavBar />
        <AllRoutes />
      </Router>
    </>
  );
}

function AllRoutes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
      <Route exact path="/users">
        <Users />
      </Route>
      <Route exact path="/topics">
        <Topics />
      </Route>
      <Route exact path="/subtopics">
        <SubTopics />
      </Route>
      <Route exact path="/signin">
        <Signin />
      </Route>
      <Route exact path="/signup">
        <Signup />
      </Route>
    </Switch>
  );
}
