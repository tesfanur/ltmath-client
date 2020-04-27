import React, { useContext } from "react";
import styled from "styled-components";
import { Container, Header, Image } from "semantic-ui-react";
import { DashboardMenu } from "../DashboardMenu";

import { AuthContext } from "../../context/auth";
import letMathLogo from "../../img/ltMath.svg";
// import User from "./User";
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #2bbbc0;
`;

function Home() {
  const { user } = useContext(AuthContext);
  console.log({ userFromHomePage: user });
  return (
    <>
      <Title>Welcome to ltMath</Title>
      <Container
        style={{
          width: "75%",
          alignItems: "center",
          marginTop: "2.5rem",
          marginBottom: "2.5rem",
        }}
      >
        <Header>
          <Image src={letMathLogo} style={{ width: "10%", color: "teal" }} />
          <Header.Subheader>
            Step by step Math Learning | Teaching web tool!
            <h3>Hello {user ? user.username : ""} Welcome to ltMath</h3>
          </Header.Subheader>
        </Header>
        <DashboardMenu />
      </Container>
    </>
  );
}

export default Home;
