import React from "react";
import { ApolloConsumer } from "react-apollo";
import { withRouter } from "react-router-dom";

//TODO: write the proper code for user signout feature
//just you need to remove token from your store or session variable and
//redirect your user to the signin page ...
const handleSignout = (client, history) => {
  localStorage.removeItem("token");
  client.resetStore();
  history.push("/");
};
const signout = ({ history }) => {
  // eslint-disable-next-line no-unused-expressions
  <ApolloConsumer>
    {(client) => {
      return (
        <button onClick={() => handleSignout(client, history)}>signout</button>
      );
    }}
  </ApolloConsumer>;
};

export default withRouter(signout);
