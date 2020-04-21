import React, { useState } from "react";
import {
  Message,
  Container,
  Form,
  Header,
  Input,
  Image,
} from "semantic-ui-react";

import letMathLogo from "../../img/ltMath.svg";
import { CustomStyledButton as SubmitButton } from "../Button";
import { useMutation, useApolloClient } from "@apollo/react-hooks";
import SIGNUP_USER from "../../operations/mutation/signup";
// import FromInput from "./frominput";
// import CustomButon from "./customButton.jsx";
import "./sign-in.styles.scss";
import "./custom-button.styles.scss";
const initialSate = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};
function Signup() {
  const client = useApolloClient();
  console.log({ client });
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

  const handleSubmit = async (event, signup) => {
    event.preventDefault();
    //{ variables: { signupInput: { username, email, password } } }
    // signup().then(({ data }) => {
    //   console.log({ data });
    //   localStorage.setItem("authorization", data.signup.token);
    // });
    try {
      const { data } = await signup();
      if (data) {
        console.log({ data });
        localStorage.setItem("authorization", data.signin.token);
      }
    } catch (error) {
      console.log({ error });
    }

    console.log({ signupFromHandlesubmit: signup });
    // setUserInput(initialSate);
    console.log({ ...userInput });
  };
  // if loading, return a loading indicator
  if (loading) return <p>loading...</p>;
  if (error)
    return (
      <Container style={{ marginTop: "10px", width: "50%" }}>
        <Message
          error
          header="There's something wrong in fetching your request"
          content={error.message}
        />
      </Container>
    );

  return (
    <Container style={{ width: "25%", alignItems: "center" }}>
      <Container
        style={{
          width: "75%",
          alignItems: "center",
          marginTop: "2.5rem",
          marginBottom: "2.5rem",
        }}
      >
        <Header>
          <Image src={letMathLogo} style={{ width: "70%", color: "teal" }} />
          <Header.Subheader>
            Step by step Math Learning | Teaching web tool!
          </Header.Subheader>
        </Header>
      </Container>
      <Form
        onSubmit={(event) => handleSubmit(event, signup)}
        style={{
          // background: "whitesmoke",
          borderRadius: "15px",
        }}
      >
        <Form.Field>
          <label>Email</label>
          <Input
            icon="mail teal"
            iconPosition="left"
            placeholder="Email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Username</label>
          <Input
            icon="teal user"
            iconPosition="left"
            placeholder="Username"
            name="username"
            value={username}
            onChange={handleChange}
          />
        </Form.Field>

        <Form.Field>
          <label>Password</label>
          <Input
            icon="teal lock"
            iconPosition="left"
            placeholder="Password"
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Confirm Password</label>
          <Input
            icon="teal lock"
            iconPosition="left"
            placeholder="Confirm Password"
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleChange}
          />
        </Form.Field>
        <SubmitButton type="submit" className="fluid">
          Signup
        </SubmitButton>
      </Form>
    </Container>
  );
}

export default Signup;
