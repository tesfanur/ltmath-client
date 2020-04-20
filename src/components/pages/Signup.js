import React, { useState } from "react";
import { Message, Container } from "semantic-ui-react";
import { useMutation } from "@apollo/react-hooks";
import SIGNUP_USER from "../../operations/mutation/signup";
import FromInput from "./frominput";
import CustomButon from "./customButton.jsx";
import "./sign-in.styles.scss";
import "./custom-button.styles.scss";
const initialSate = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};
function Signup() {
  const [userInput, setUserInput] = useState(initialSate);

  //destructure event object into target and then target into name and value
  const handleChange = ({ target: { name, value } }, signup) => {
    setUserInput({
      ...userInput,
      [name]: value,
    });
  };

  let { username, email, password, confirmPassword } = userInput;
  const signupInput = { username, email, password };
  console.log({ username, email, password, signupInput });
  // the signup mutation hook
  const [signup, { loading, error }] = useMutation(SIGNUP_USER, {
    variables: { signupInput: { username, email, password } },
  });
  console.dir({ signup });
  console.log({ typeofsignup: typeof signup, loading, error });

  const handleSubmit = (event, signup) => {
    event.preventDefault();
    //{ variables: { signupInput: { username, email, password } } }
    signup().then(({ data }) => {
      console.log({ data });
      localStorage.setItem("authorization", data.signup.token);
    });
    console.log({ signupFromHandlesubmit: signup });
    // setUserInput(initialSate);
    console.log({ ...userInput });
  };
  // if loading, return a loading indicator
  if (loading) return <p>loading...</p>;
  if (error)
    return (
      <Message
        error
        header="There's something wrong in fetching your request"
        content={error.message}
      />
    );
  return (
    <Container>
      <h1>Don't you have an account?</h1>
      <span>Signup with your Username, email and password</span>
      <form
        className="signup-form"
        onSubmit={(event) => handleSubmit(event, signup)}
      >
        <FromInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
        />
        <FromInput
          type="text"
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
        <FromInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          label="Confirm Password"
          onChange={handleChange}
        />

        <CustomButon className="custom-button" type="submit" name="submit">
          Sign up
        </CustomButon>
      </form>
    </Container>
  );
}

export default Signup;
