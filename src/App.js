import React from "react";
import { Header, Container } from "semantic-ui-react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/pages/home";
// import VisibleSidebar from "./components/pages/Sidebar";
import Users from "./components/pages/Users";
import Topics from "./components/pages/Topics";
import SubTopics from "./components/pages/SubTopics";
import About from "./components/pages/about";
import Signin from "./components/pages/Signin";
import Signup from "./components/pages/Signup";
import NavBar from "./components/NavBar";
// import { AuthContext, AuthProvider } from "./context/auth";
// import { AuthProvider } from "./context/auth";

//TODO: select option for subject topic and sub topic
export default function App() {
  // const [auth, setAuth] = useContext(AuthContext);
  return (
    <>
      {/* <AuthProvider> */}
      <Router>
        <NavBar />
        <AllRoutes />
      </Router>
      {/* </AuthProvider> */}
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
      <Route exact path="*">
        <PageNotFound />
      </Route>
    </Switch>
  );
}

function PageNotFound() {
  return (
    <Container
      style={{
        width: "75%",
        alignItems: "center",
        marginTop: "2.5rem",
        marginBottom: "2.5rem",
      }}
    >
      <Header>
        Page Not found!
        <Header.Subheader>Please type the address properly</Header.Subheader>
      </Header>
    </Container>
  );
}
