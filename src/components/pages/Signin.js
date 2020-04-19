import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import SIGNIN_USER from "../../operations/mutation/signin";
import FromInput from "./frominput";
import CustomButon from "./customButton.jsx";
import "./sign-in.styles.scss";
import "./custom-button.styles.scss";
console.log({ SIGNIN_USER });
const initialSate = { username: "", password: "" };
const Signin = () => {
  const [userInput, setUserInput] = useState(initialSate);
  const handleSubmit = (event, signin) => {
    event.preventDefault();
    // setUserInput(initialSate);
    signin().then(({ data }) => {
      console.log({ data });
      localStorage.setItem("token", data.signin.token);
    });
    console.log({ ...userInput });
  };
  //destructure event object into target and then target into name and value
  const handleChange = ({ target: { name, value } }) => {
    setUserInput({
      ...userInput,
      [name]: value,
    });
  };

  let { username, password } = userInput;

  // the signup mutation hook
  const [signin, { loading, error }] = useMutation(SIGNIN_USER, {
    variables: {
      signinInput: { username, password },
    },
  });
  if (loading) return <div>loading...!</div>;
  if (error) return <div>Something went wrong!</div>;
  console.log({ username, password, loading, errorType: typeof error });
  return (
    <div className="sign-in">
      <h1>I have already have an account</h1>
      <span>Signin with your email and password</span>
      <form
        className="signin-form"
        onSubmit={(event) => handleSubmit(event, signin)}
      >
        <FromInput
          type="username"
          name="username"
          value={username}
          onChange={handleChange}
          label="Username"
        />
        <FromInput
          type="password"
          name="password"
          value={password}
          label="Password"
          onChange={handleChange}
        />

        <CustomButon className="custom-button" type="submit" name="submit">
          Sign in
        </CustomButon>
        {error && <h1>{JSON.stringify(error)}</h1>}
      </form>
    </div>
  );
};

export default Signin;
