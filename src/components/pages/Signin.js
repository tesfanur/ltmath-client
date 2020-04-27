import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Container, Form, Header, Image } from "semantic-ui-react";

import letMathLogo from "../../img/ltMath.svg";
import { CustomStyledButton as SubmitButton } from "../styledcomponents/Button";
import { useMutation, useApolloClient } from "@apollo/react-hooks";
import SIGNIN_USER from "../../operations/mutation/signin";
import { useForm } from "../../utils/hooks";
import { AuthContext } from "../../context/auth";
console.log({ SIGNIN_USER });

/**
 *
 * @param {*}
 */
const Signin = () => {
  const authContext = useContext(AuthContext);
  console.log({ authContextFromSignin: authContext });
  const client = useApolloClient();
  const history = useHistory();
  //TODO implement how to keep user same among different pages
  // const [name, setName] = useHistory("");
  console.log({ history, client });
  // console.log({ client });
  // const [userInput, setUserInput] = useState(initialSate);
  const [errors, setErrors] = useState({});

  const initialSate = { username: "", password: "" };
  const { handleChange, handleSubmit, userInput } = useForm(cb, initialSate);
  let { username, password } = userInput;
  // the signup mutation hook
  const [signin, { loading, error }] = useMutation(SIGNIN_USER, {
    errorPolicy: "all",
    variables: {
      signinInput: { username, password },
    },
    update(_, { data: { signin: userData } }) {
      //_ => proxy
      console.log({ userData });
      authContext.signin(userData);
      history.push("/");
    },
    onError(error) {
      console.log({
        errorFromOnErrorFunction: error,
        message: error.message,
      });
      if (error.graphQLErrors.length > 0)
        setErrors(error.graphQLErrors[0].extensions.errors);
      //if network error occured, attach it to the custom error object
      let { networkError } = error;
      console.log({ networkError });
      if (networkError) {
        setErrors({
          networkError:
            "There's network error when attempting to fetch resource.",
        });
      }
    },
  });
  //hoist signin function
  function cb() {
    return signin;
  }
  if (error) console.log({ error });
  return (
    <Container
      style={{
        width: "25%",
        alignItems: "center",
        marginTop: "2.5rem",
      }}
    >
      <Container
        style={{
          width: "65%",
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
        <div className="ui error message">
          <ul className="list">
            {Object.values(errors).map((value) => {
              return <li key={value}>{value}</li>;
            })}
          </ul>
        </div>
      )}

      <Form
        onSubmit={(event) => handleSubmit(event, signin)}
        className={loading ? "loading" : ""}
        fluid={true}
      >
        <Form.Input
          label="Username"
          icon="teal user"
          iconPosition="left"
          placeholder="Username"
          name="username"
          fluid
          error={errors.username ? true : false}
          value={username}
          onChange={handleChange}
          // required
        />
        <Form.Input
          label="Password"
          icon="teal lock"
          iconPosition="left"
          placeholder="Password"
          name="password"
          fluid
          type="password"
          error={errors.password ? true : false}
          value={password}
          onChange={handleChange}
          // required
          // noValidate
        />
        <SubmitButton type="submit" className="fluid">
          Login
        </SubmitButton>
      </Form>
    </Container>
  );
};

export default Signin;
