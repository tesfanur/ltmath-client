import React, { useState } from "react";
import FromInput from "./frominput";
import CustomButon from "./customButton.jsx";
import "./sign-in.styles.scss";
import "./custom-button.styles.scss";

function Signin() {
  const [userInput, setUserInput] = useState({ email: "", password: "" });
  const handleSubmit = event => {
    event.preventDefault();
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
}

export default Signin;
