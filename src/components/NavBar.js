import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Input, Menu } from "semantic-ui-react";

const PointingNavBar = () => {
  const location = useLocation();
  const makeWhiteText = { color: "white" };
  const pathname = location.pathname;
  // /login
  const path = pathname === "/" ? "home" : pathname.substr(1);
  const [activeItem, setActiveItem] = useState(path);
  const handleItemClick = (e, { name }) => setActiveItem(name);

  return (
    <Menu pointing secondary style={{ background: "#00ced1", color: "white" }}>
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
        to="/contact"
      />
      <Menu.Item
        style={{ ...makeWhiteText }}
        name="logout"
        active={activeItem === "logout"}
        onClick={handleItemClick}
        as={NavLink}
        to="/logout"
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
  );
};

export default PointingNavBar;
