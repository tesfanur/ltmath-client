import React from "react";
import { Button } from "semantic-ui-react";
import styled from "styled-components";

const StyledButton = styled(Button)({
  color: "white!important",
  background: "#00CED1!important",
});

export const CustomStyledButton = (props) => {
  return (
    <StyledButton className={props.className}>{props.children}</StyledButton>
  );
};
