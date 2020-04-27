import React from "react";
import { useHistory } from "react-router-dom";

const Signout = () => {
  const history = useHistory();
  localStorage.removeItem("authorization");
  history.push("/signin");
  return <h1>Successfully logged out</h1>;
};

export default Signout;
