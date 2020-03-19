import React, { useState } from "react";
import FromInput from "./frominput";
import CustomButon from "./customButton.jsx";
import "./sign-in.styles.scss";
import "./custom-button.styles.scss";

const Signin = () => {
  const initialSate = { email: "", password: "" };
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

  let { email, password } = userInput;
  console.log({ email, password });
  return (
    <div className="sign-in">
      <h1>I have already have an account</h1>
      <span>Signin with your email and password</span>
      <form className="signin-form" onSubmit={handleSubmit}>
        <FromInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
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
          Sign in
        </CustomButon>
      </form>
    </div>
  );
};

export default Signin;
