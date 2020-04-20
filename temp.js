//TODO: handle graphql error both on the graphql api side and front end side start with the signin and signup feature
let usersigninformjsx = ` console.log({ username, password, loading, errorType: typeof error });
  return (
    <Container className="sign-in">
      <h1>I have already have an account</h1>
      <span>Signin with your email and password</span>
      <form
        className="signin-form"
        onSubmit={(event) => handleSubmit(event, signin)}
      >
        <FromInput
          type="username"
          name="username"
          value={username}
          onChange={handleChange}
          label="Username"
        />
        <FromInput
          type="password"
          name="password"
          value={password}
          label="Password"
          onChange={handleChange}
        />

        <CustomButon className="custom-button" type="submit" name="submit">
          Sign in
        </CustomButon>
        {error && <h1>{JSON.stringify(error)}</h1>}
      </form>
    </Container>
  );`;

let userSignupAndloginIconSets = `
//semantic-ui icons
        <Icon name="mail" />
        <Icon name="user" />
        <Icon name="lock" />
        <Icon name="unlock" />
        <Icon name="unlock alternate" />        
          <Icon name="lock" circular color="teal" />`;
