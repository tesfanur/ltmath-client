import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Input, Menu, Sticky } from "semantic-ui-react";

import { useUserAuthState } from "../context/auth";

const PointingNavBar = () => {
  const { user, signout } = useUserAuthState();

  console.log({ userFromNavBar: user, signout });
  const location = useLocation();
  const makeWhiteText = { color: "white" };
  const pathname = location.pathname;
  // /login
  const path = pathname === "/" ? "home" : pathname.substr(1);
  console.log({ path });
  const [activeItem, setActiveItem] = useState(path);
  const handleItemClick = (e, { name }) => setActiveItem(name);
  /*menu bar to be rendered if user is not logged in*/
  function NavBarWithAuth() {
    return (
      <Sticky>
        <Menu
          pointing
          secondary
          stackable
          style={{
            background: "#00ced1",
            color: "white",
            marginBottom: "20px",
          }}
        >
          <Menu.Item
            name={`${user.username}`}
            style={{ ...makeWhiteText }}
            as={NavLink}
            to="/"
          />
          <Menu.Item
            style={{ ...makeWhiteText }}
            name="about"
            active={activeItem === "about"}
            onClick={handleItemClick}
            as={NavLink}
            to="/about"
          />
          <Menu.Item
            style={{ ...makeWhiteText }}
            name="contact us"
            active={activeItem === "contact us"}
            onClick={handleItemClick}
            as={NavLink}
            to="/contactus"
          />

          <Menu.Menu position="right">
            <Menu.Item
              style={{ ...makeWhiteText }}
              name="dashboard"
              active={activeItem === "dashboard"}
              onClick={handleItemClick}
              as={NavLink}
              to="/dashboard"
            />

            <Menu.Item>
              <Input icon="search" placeholder="Search..." />
            </Menu.Item>
            <Menu.Item
              style={{ ...makeWhiteText }}
              name="signout"
              onClick={signout}
              as={NavLink}
              to="/signin"
            />
          </Menu.Menu>
        </Menu>
      </Sticky>
    );
  }
  /*menu bar to be rendered if user is not logged in*/
  function NavBarWithoutAuth() {
    return (
      <Sticky>
        <Menu
          pointing
          secondary
          stackable
          style={{
            background: "#00ced1",
            color: "white",
            marginBottom: "20px",
          }}
        >
          <Menu.Item
            name="home"
            style={{ ...makeWhiteText }}
            active={activeItem === "home"}
            onClick={handleItemClick}
            as={NavLink}
            to="/"
          />
          <Menu.Item
            style={{ ...makeWhiteText }}
            name="about"
            active={activeItem === "about"}
            onClick={handleItemClick}
            as={NavLink}
            to="/about"
          />
          <Menu.Item
            style={{ ...makeWhiteText }}
            name="contact us"
            active={activeItem === "contact us"}
            onClick={handleItemClick}
            as={NavLink}
            to="/contactus"
          />
          <Menu.Menu position="right">
            <Menu.Item
              style={{ ...makeWhiteText }}
              name="signin"
              active={activeItem === "signin"}
              onClick={handleItemClick}
              as={NavLink}
              to="/signin"
            />
            <Menu.Item
              style={{ ...makeWhiteText }}
              name="signup"
              active={activeItem === "signup"}
              onClick={handleItemClick}
              as={NavLink}
              to="/signup"
            />
            <Menu.Item
              style={{ ...makeWhiteText }}
              name="dashboard"
              active={activeItem === "dashboard"}
              onClick={handleItemClick}
              as={NavLink}
              to="/dashboard"
            />
            <Menu.Item>
              <Input icon="search" placeholder="Search..." />
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </Sticky>
    );
  }
  if (user)
    console.log({
      usernameFromNav: user.username,
    });
  let menuBar = user ? <NavBarWithAuth /> : <NavBarWithoutAuth />;
  return menuBar;
};

export default PointingNavBar;
