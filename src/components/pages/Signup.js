import React, { useState } from "react";
import FromInput from "./frominput";
import CustomButon from "./customButton.jsx";
import "./sign-in.styles.scss";
import "./custom-button.styles.scss";

const Signup = () => {
  const initialSate = { username: "", email: "", password: "" };
  const [userInput, setUserInput] = useState(initialSate);
  const handleSubmit = event => {
    event.preventDefault();
    setUserInput(initialSate);
    console.log({ ...userInput });
  };
  //destructure event object into target and then target into name and value
  const handleChange = ({ target: { name, value } }) => {
    setUserInput({
      ...userInput,
      [name]: value
    });
  };

  let { username, email, password } = userInput;
  console.log({ username, email, password });
  return (
    <div className="sign-in">
      <h1>Don't yoy have an account?</h1>
      <span>Signup with your Username, email and password</span>
      <form className="signup-form" onSubmit={handleSubmit}>
        <FromInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        />
        <FromInput
          type="text"
          name="username"
          value={username}
          onChange={handleChange}
          label="Username"
          required
        />
        <FromInput
          type="password"
          name="password"
          value={password}
          label="Password"
          onChange={handleChange}
          required
        />

        <CustomButon className="custom-button" type="submit" name="submit">
          Sign up
        </CustomButon>
      </form>
    </div>
  );
};

export default Signup;
