import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Container, Form, Header, Image } from "semantic-ui-react";

import letMathLogo from "../../img/ltMath.svg";
import { CustomStyledButton as SubmitButton } from "../styledcomponents/Button";
import { useMutation, useApolloClient } from "@apollo/react-hooks";
import SIGNUP_USER from "../../operations/mutation/signup";
import { useForm } from "../../utils/hooks";
import { AuthContext } from "../../context/auth";

/**
 *user registration function
 */
function Signup() {
  const authContext = useContext(AuthContext);
  const client = useApolloClient();
  const history = useHistory();
  console.log({ client, history });
  const [errors, setErrors] = useState({});
  const initialSate = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const { handleChange, handleSubmit, userInput } = useForm(cb, initialSate);
  let { username, email, password, confirmPassword } = userInput;
  const signupInput = { username, email, password, confirmPassword };
  // the signup mutation hook
  const [signup, { loading, error }] = useMutation(SIGNUP_USER, {
    variables: { signupInput },
    update(_, { data: { signin: userData } }) {
      //_ => proxy
      console.log({ userData });
      authContext.signin(userData);
      history.push("/");
    },
    onError(err) {
      console.log({
        errorFromOnErrorFunction: err,
        gqErrors: err.graphQLErrors,
        message: err.message,
      });
      // if (error.graphQLErrors.length > 0)
      if (err.graphQLErrors.length > 0)
        setErrors(err.graphQLErrors[0].extensions.errors);
      // if (error.message && error.message.indexOf("Networ") >= 0) {
      let { networkError } = err;
      console.log({ networkError });
      if (networkError) {
        setErrors({
          networkError:
            "There's network error when attempting to fetch resource.",
        });
      }

      // setErrors({ network: "Network error. Unable to fetch data." });
    },
  });
  console.dir({ signup });
  console.log({ typeofsignup: typeof signup, loading, error });
  function cb() {
    return signup;
  }
  console.log({ errors, errorObjectValues: Object.keys(errors).length });
  return (
    <Container style={{ width: "25%", alignItems: "center" }}>
      <Container
        style={{
          width: "65%",
          alignItems: "center",
          marginTop: "2.5rem",
          marginBottom: "2.5rem",
        }}
        fluid
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
          fluid
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
          fluid
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
          fluid
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
          fluid
        />
        <SubmitButton type="submit" className="fluid">
          Signup
        </SubmitButton>
      </Form>
    </Container>
  );
}

export default Signup;
