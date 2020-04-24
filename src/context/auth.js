import React, { createContext, useReducer } from "react";
const AuthContext = createContext({
  user: null,
  signin: (userData) => {},
  signout: (userData) => {},
});

function authReducer(state, action) {
  switch (action.type) {
    case "SIGNIN":
      return {
        ...state,
        userData: action.payload,
      };
    case "SIGNOUT":
      return {
        ...state,
        userData: null,
      };

    default:
      return state;
  }
}

function AuthProvider(props) {
  const [state, dispatch] = useReducer(authReducer, { user: null });
  const signin = (userData) => {
    dispatch({
      type: "SIGNIN",
      payload: userData,
    });
  };

  const signout = () => {
    localStorage.removeItem("token");
    dispatch({
      type: "SIGNOUT",
    });
  };

  return <AuthContext.Provider value={{ user: state.user, signin, signout }} />;
}

export { AuthContext, AuthProvider };
