import React from "react";
import styled from "styled-components";
import {
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar,
  Button,
} from "semantic-ui-react";

const StyledButton = styled(Button)({
  color: "white!important",
  background: "#2bbbc0!important",
});

export const TestStyledButton = () => {
  return (
    <div>
      <Button>This is normal semantic button</Button>
      <StyledButton>
        This is a semantic button that has been styled with syled components
      </StyledButton>
    </div>
  );
};

const VisibleSidebar = () => (
  <Sidebar.Pushable as={Segment}>
    <Sidebar
      as={Menu}
      animation="overlay"
      icon="labeled"
      inverted
      vertical
      visible
      width="thin"
    >
      <Menu.Item as="a">
        <Icon name="home" />
        Home
      </Menu.Item>
      <Menu.Item as="a">
        <Icon name="gamepad" />
        Games
      </Menu.Item>
      <Menu.Item as="a">
        <Icon name="camera" />
        Channels
      </Menu.Item>
      <Menu.Item as="a">
        <Icon name="sport" />
        Sports
      </Menu.Item>
      <Menu.Item as="a">
        <Icon name="lifestyles" />
        Life Styles
      </Menu.Item>
    </Sidebar>

    <Sidebar.Pusher>
      <Segment basic>
        <Header as="h3">Application Content</Header>
        <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
      </Segment>
    </Sidebar.Pusher>
  </Sidebar.Pushable>
);

export default VisibleSidebar;
