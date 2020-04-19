import React from "react";
import { render } from "react-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { InMemoryCache } from "apollo-cache-inmemory";
import "semantic-ui-css/semantic.min.css";
import App from "./App";

// Instantiate required constructor fields
const cache = new InMemoryCache();
// Pass your GraphQL endpoint to uri
//LOCAL URL "http://localhost:5000/graphql"
//heroku url "https://ltmath.herokuapp.com/graphql"
const client = new ApolloClient({
  uri: " http://localhost:5000/graphql",
  fetchOptions: {
    credentials: "include",
  },
  request: (operation) => {
    const token = localStorage.getItem("authorization");
    console.log({ token });
    operation.setContext({
      headers: {
        authorization: token,
      },
    });
  },
  onError: ({ networkError }) => {
    if (networkError) {
      console.log(`Network error occured, ${networkError}`);
      if (networkError.statusCode === 401) {
        //remove token
        localStorage.removeItem("authorization");
      }
      if (networkError.statusCode === 400) {
        console.log({ message: `Response was not successfull!` });
      }
    }
  },
  cache,
});

//HOC

const ApolloApp = (AppComponent) => (
  <ApolloProvider client={client}>
    <AppComponent />
  </ApolloProvider>
);

render(ApolloApp(App), document.getElementById("root"));
