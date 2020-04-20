import React, { useState } from "react";
import {
  Message,
  Container,
  Form,
  Button,
  Header,
  Icon,
  Input,
} from "semantic-ui-react";
import { useMutation, useApolloClient } from "@apollo/react-hooks";
import SIGNIN_USER from "../../operations/mutation/signin";
// import FromInput from "./frominput";
// import CustomButon from "./customButton.jsx";
import "./sign-in.styles.scss";
import "./custom-button.styles.scss";
console.log({ SIGNIN_USER });
const initialSate = { username: "", password: "" };
const Signin = () => {
  const client = useApolloClient();
  console.log({ client });
  const [userInput, setUserInput] = useState(initialSate);
  const handleSubmit = async (event, signin) => {
    event.preventDefault();
    try {
      const { data } = await signin();
      if (data) {
        console.log({ data });
        localStorage.setItem("authorization", data.signin.token);
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
    // onError(error) {
    //   console.log({ error });
    // },
  });
  if (loading) return <div>loading...!</div>;
  if (error) {
    console.log({ error_message: error });
    return (
      <Container style={{ marginTop: "10px", width: "50%" }}>
        <Message
          error
          header="There's something wrong in fetching your request"
          content={error.message}
        />
      </Container>
    );
  }
  console.log({ username, password, loading, errorType: typeof error });

  return (
    <Container style={{ width: "30%", alignItems: "center" }}>
      <Header as="h2" icon>
        <Icon name="unlock alternate" />
        Login
        <Header.Subheader>To use ltMath.</Header.Subheader>
      </Header>
      <Form onSubmit={(event) => handleSubmit(event, signin)}>
        <Form.Field required>
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
        <Form.Field required>
          <label>Password</label>
          <Input
            icon="teal lock"
            iconPosition="left"
            placeholder="Password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </Form.Field>
        <Button type="submit" primary>
          Login
        </Button>
        {error && error.message}
      </Form>
    </Container>
  );

  // return (
  //   <Container className="sign-in">
  //     <h1>I have already have an account</h1>
  //     <span>Signin with your email and password</span>
  //     <form
  //       className="signin-form"
  //       onSubmit={(event) => handleSubmit(event, signin)}
  //     >
  //       <FromInput
  //         type="username"
  //         name="username"
  //         value={username}
  //         onChange={handleChange}
  //         label="Username"
  //       />
  //       <FromInput
  //         type="password"
  //         name="password"
  //         value={password}
  //         label="Password"
  //         onChange={handleChange}
  //       />

  //       <CustomButon className="custom-button" type="submit" name="submit">
  //         Sign in
  //       </CustomButon>
  //       {error && <h1>{JSON.stringify(error)}</h1>}
  //     </form>
  //   </Container>
  // );
};

export default Signin;
