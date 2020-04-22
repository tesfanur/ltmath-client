import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Message, Container, Form, Header, Image } from "semantic-ui-react";

import letMathLogo from "../../img/ltMath.svg";
import { CustomStyledButton as SubmitButton } from "../styledcomponents/Button";
import { useMutation, useApolloClient } from "@apollo/react-hooks";
import SIGNUP_USER from "../../operations/mutation/signup";
const initialSate = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};
/**
 *user registration function
 */
function Signup() {
  const client = useApolloClient();
  const history = useHistory();
  console.log({ client, history });
  const [userInput, setUserInput] = useState(initialSate);
  const [errors, setErrors] = useState({});

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
    variables: { signupInput: { username, email, password, confirmPassword } },
    update(proxy, result) {
      console.log({ result });
      history.push("/");
    },
    onError(err) {
      console.log({ errorFromOnErrorSFunction: err });
      // if (error.graphQLErrors.length > 0)
      setErrors(err.graphQLErrors[0].extensions.errors);
    },
  });
  console.dir({ signup });
  console.log({ typeofsignup: typeof signup, loading, error });

  const handleSubmit = async (event, signup) => {
    event.preventDefault();
    try {
      const { data } = await signup();
      if (data) {
        console.log({ data });
        localStorage.setItem("authorization", data.signup.token);
      }
    } catch (error) {
      console.log({ error });
    }

    console.log({ signupFromHandlesubmit: signup });
    // setUserInput(initialSate);
    console.log({ ...userInput });
  };

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
      {Object.keys(errors).length > 0 && (
        <div className="ui error message" style={{ marginBottom: "20px" }}>
          <ul className="list">
            {Object.values(errors).map((value) => {
              return <li key={value}>{value}</li>;
            })}
          </ul>
        </div>
      )}
      <Form
        onSubmit={(event) => handleSubmit(event, signup)}
        style={{
          // background: "whitesmoke",
          borderRadius: "15px",
          marginBottom: "15vh",
        }}
        className={loading ? "loading" : ""}
      >
        <Form.Input
          label="Email"
          icon="mail teal"
          iconPosition="left"
          placeholder="Email"
          name="email"
          value={email}
          error={errors.email ? true : false}
          onChange={handleChange}
        />
        <Form.Input
          label="Username"
          icon="teal user"
          iconPosition="left"
          placeholder="Username"
          name="username"
          value={username}
          error={errors.username ? true : false}
          onChange={handleChange}
        />

        <Form.Input
          label="Password"
          icon="teal lock"
          iconPosition="left"
          placeholder="Password"
          type="password"
          name="password"
          value={password}
          error={errors.password ? true : false}
          onChange={handleChange}
        />
        <Form.Input
          label="Confirm Password"
          icon="teal lock"
          iconPosition="left"
          placeholder="Confirm Password"
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          error={errors.confirmPassword ? true : false}
          onChange={handleChange}
        />
        <SubmitButton type="submit" className="fluid">
          Signup
        </SubmitButton>
      </Form>
    </Container>
  );
}

export default Signup;
