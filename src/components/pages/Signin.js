import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Container, Form, Header, Image } from "semantic-ui-react";
import letMathLogo from "../../img/ltMath.svg";
import { CustomStyledButton as SubmitButton } from "../styledcomponents/Button";
import { useMutation, useApolloClient } from "@apollo/react-hooks";
import SIGNIN_USER from "../../operations/mutation/signin";
console.log({ SIGNIN_USER });
const initialSate = { username: "", password: "" };
/**
 *
 * @param {*}
 */
const Signin = () => {
  const client = useApolloClient();
  const history = useHistory();
  console.log({ history });
  // console.log({ client });
  const [userInput, setUserInput] = useState(initialSate);
  const [errors, setErrors] = useState({});
  const handleSubmit = async (event, signin) => {
    event.preventDefault();
    try {
      const { data } = await signin();
      if (data) {
        // console.log({ data });
        localStorage.setItem("authorization", data.signin.token);
        client.writeData({ data: { data } });
      }
    } catch (error) {
      console.log({ error });
    }
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
    errorPolicy: "all",
    variables: {
      signinInput: { username, password },
    },
    update(proxy, result) {
      console.log({ result });
      history.push("/");
    },
    onError(error) {
      console.log({ errorFromOnErrorSFunction: error });
      setErrors(error.graphQLErrors[0].extensions.exception.errors);
    },
  });
  if (errors) console.log({ errors });

  console.log({ username, loading, errorType: typeof error });

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
        onSubmit={(event) => handleSubmit(event, signin)}
        className={loading ? "loading" : ""}
      >
        <Form.Input
          label="Username"
          icon="teal user"
          iconPosition="left"
          placeholder="Username"
          name="username"
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
          type="password"
          error={errors.password ? true : false}
          name="password"
          value={password}
          onChange={handleChange}
          // required
          // noValidate
        />
        <SubmitButton type="submit" className="fluid">
          Login
        </SubmitButton>
        {/* {error && error.message} */}
      </Form>
      {Object.keys(errors).length > 0 && (
        <div className="ui error message">
          <ul className="list">
            {Object.values(errors).map((value) => {
              return <li key={value}>{value}</li>;
            })}
          </ul>
        </div>
      )}
    </Container>
  );
};

export default Signin;
