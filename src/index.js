// import React, { Fragment } from "react";
// import ReactDOM from "react-dom";
// // import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// // import { Router } from "@reach/router";
// // import Form from "./Form";
// import Home from "./components/pages/home";
// import About from "./components/pages/about";
// import App from "./App";
// /**
//  *   <Router>
//       <Form path="/" />
//     </Router>
//  */
// ReactDOM.render(
//   <Fragment>
//     <Home />
//     <About />
//     <App />
//   </Fragment>,
//   document.getElementById("root")
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

import React from "react";
import { render } from "react-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import App from "./App";

// Pass your GraphQL endpoint to uri
const client = new ApolloClient({
  // uri: "https://nx9zvp49q7.lp.gql.zone/graphql"
  uri: "http://localhost:5000/graphql"
});

const ApolloApp = AppComponent => (
  <ApolloProvider client={client}>
    <AppComponent />
  </ApolloProvider>
);

render(ApolloApp(App), document.getElementById("root"));
