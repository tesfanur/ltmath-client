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
import SIGNIN_USER from "../../operations/mutation/signin";
import "./sign-in.styles.scss";
import "./custom-button.styles.scss";
console.log({ SIGNIN_USER });
const initialSate = { username: "", password: "" };
const Signin = (props) => {
  const client = useApolloClient();
  // console.log({ client });
  const [userInput, setUserInput] = useState(initialSate);
  const [errors, setErrors] = useState([]);
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
      props.history.push("/");
    },
    onError(error) {
      console.log({ errorFromOnErrorSFunction: error });
      errors.push(error.graphQLErrors[0].message);
      setErrors(errors);
    },
  });
  if (errors) console.log({ errors });
  if (loading) return <div>loading...!</div>;
  // if (error) {
  //   console.log({ error_message: error });
  //   return (
  //     <Container style={{ marginTop: "10px", width: "50%" }}>
  //       <Message
  //         error
  //         header="There's something wrong in fetching your request"
  //         content={error.message}
  //       />
  //     </Container>
  //   );
  // }
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
        <Form.Field required>
          <label>Username</label>
          <Input
            icon="teal user"
            iconPosition="left"
            placeholder="Username"
            name="username"
            // error={errors.password ? true : false}
            value={username}
            onChange={handleChange}
          />
        </Form.Field>
        <Form.Field required>
          <label>Password</label>
          <Input
            icon="teal lock"
            iconPosition="left"
            placeholder="Password"
            type="password"
            // error={errors.username ? true : false}
            name="password"
            value={password}
            onChange={handleChange}
          />
        </Form.Field>
        <SubmitButton type="submit" className="fluid">
          Login
        </SubmitButton>
        {/* {error && error.message} */}
      </Form>
      {errors.length > 0 && (
        <div className="ui error message">
          <ul className="list">
            {errors.map((value, i) => {
              return <li key={i}>{value}</li>;
            })}
          </ul>
        </div>
      )}
    </Container>
  );
};

export default Signin;
