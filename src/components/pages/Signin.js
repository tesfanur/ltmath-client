import React, { useState } from "react";

function Signin() {
  const [userInput, setUserInput] = useState({ email: "", password: "" });
  const handleSubmit = event => {
    event.preventDefault();
    console.log({ ...userInput });
  };
  //destructure event object into target and then target into name and value
  const handleOnchange = ({ target: { name, value } }) => {
    setUserInput({
      ...userInput,
      [name]: value
    });
  };

  let { email, password } = userInput;
  console.log({ email, password });
  return (
    <div className="signin">
      <h1>I have already have an account</h1>
      <span>Signin with your email and password</span>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleOnchange}
          required
        />
        <label>Email</label>
        <br />
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleOnchange}
          required
        />
        <label>password</label>
        <br />
        <input type="submit" name="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Signin;
