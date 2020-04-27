import React, { createContext, useReducer } from "react";
import jwtDecode from "jwt-decode";

const initialState = {
  user: null,
};

if (localStorage.getItem("authorization")) {
  const decodedToken = jwtDecode(localStorage.getItem("authorization"));
  console.log({ decodedToken });

  if (decodedToken.exp * 1000 < Date.now()) {
    localStorage.removeItem("authorization");
  } else {
    initialState.user = decodedToken;
  }
}

const AuthContext = createContext({
  user: null,
  signin: (userData) => {},
  signout: () => {},
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
  // const [state, dispatch] = useReducer(authReducer, { user: null });
  const [state, dispatch] = useReducer(authReducer, initialState);
  const signin = (userData) => {
    console.log({ userDataFromAuthProvider: userData });
    localStorage.setItem("authorization", userData.token);
    dispatch({
      type: "SIGNIN",
      payload: userData,
    });
  };

  const signout = () => {
    localStorage.removeItem("authorization");
    dispatch({
      type: "SIGNOUT",
    });
  };

  return (
    <AuthContext.Provider
      value={{ user: state.user, signin, signout }}
      {...props}
    />
  );
}

export { AuthContext, AuthProvider };
