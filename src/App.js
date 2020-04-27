import React from "react";
import { Header, Container } from "semantic-ui-react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/pages/home";
import Users from "./components/pages/Users";
import User from "./components/pages/User";
import Topics from "./components/pages/Topics";
import Subjects from "./components/pages/Subjects";
import SubTopics from "./components/pages/SubTopics";
import About from "./components/pages/about";
import Signin from "./components/pages/Signin";
import Signup from "./components/pages/Signup";
import Signout from "./components/pages/signout";
import Dashboard from "./components/pages/Dashboard";
import NavBar from "./components/NavBar";
import AuthRoute from "./utils/authRoute";
import { AuthProvider } from "./context/auth";
import Contact from "./components/pages/Contact";

//TODO: select option for subject topic and sub topic
export default function App() {
  // const [auth, setAuth] = useContext(AuthContext);
  return (
    <>
      <AuthProvider>
        <Router>
          <NavBar />
          <AllRoutes />
        </Router>
      </AuthProvider>
    </>
  );
}

function AllRoutes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contactus" component={Contact} />
      <Route path="/users" component={Users} />
      <Route path="/users/:userId" component={User} />
      <Route path="/topics" component={Topics} />
      <Route path="/subjects" component={Subjects} />
      <Route path="/topics/:topicId" component={SubTopics} />
      <AuthRoute path="/signup" component={Signup} />
      <AuthRoute path="/signin" component={Signin} />
      <Route path="/signout" component={Signout} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="*" component={PageNotFound} />
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
