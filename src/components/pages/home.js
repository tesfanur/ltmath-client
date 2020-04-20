import React from "react";
import styled from "styled-components";
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

function Home() {
  return <Title>Hello World, this is my first styled component!</Title>;
}

export default Home;
