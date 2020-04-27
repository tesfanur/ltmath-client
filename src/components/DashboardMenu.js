import React, { useState, useContext } from "react";
import { NavLink, useHistory, Redirect } from "react-router-dom";
import { Dropdown, Menu } from "semantic-ui-react";
import { AuthContext } from "../context/auth";

export const DashboardMenu = () => {
  const history = useHistory();
  const { user } = useContext(AuthContext);
  console.log({ userFromDashboard: user });
  const [activeItem, setactiveItem] = useState({});

  if (!user) {
    history.push("/signin");
    return <Redirect to="/signin" />;
  }

  const handleItemClick = (e, { name }) => setactiveItem({ activeItem: name });

  return (
    <Menu vertical style={{ background: "#00CED1" }}>
      <Menu.Header as="h3">Choose One Action</Menu.Header>
      <Dropdown item text="Subjects">
        <Dropdown.Menu style={{ background: "#E5FFB5" }}>
          <Dropdown.Item
            onClick={handleItemClick}
            as={NavLink}
            to="/subjects"
            icon="list"
            text="Show All Subjects"
          />
          <Dropdown.Item
            onClick={handleItemClick}
            as={NavLink}
            to="/addsubject"
            icon="add"
            text="Add Subject"
          />
          <Dropdown.Item
            onClick={handleItemClick}
            as={NavLink}
            to="/editsubject"
            icon="edit"
            text="Edit Subject"
          />
          <Dropdown.Item
            onClick={handleItemClick}
            as={NavLink}
            to="/deletesubject"
            icon="trash"
            text="Delete Subject"
          />
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown item text="Topics">
        <Dropdown.Menu style={{ background: "#E5FFB5" }}>
          <Dropdown.Item
            onClick={handleItemClick}
            as={NavLink}
            to="/topics"
            icon="list"
            text="Show All Topics"
          />
          <Dropdown.Item
            onClick={handleItemClick}
            as={NavLink}
            to="/addtopic"
            icon="add"
            text="Add Topic"
          />
          <Dropdown.Item
            onClick={handleItemClick}
            as={NavLink}
            to="/edittopic"
            icon="edit"
            text="Edit Topic"
          />
          <Dropdown.Item
            onClick={handleItemClick}
            as={NavLink}
            to="/deletetopic"
            icon="trash"
            text="Delete Topic"
          />
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown item text="Sub Topics">
        <Dropdown.Menu style={{ background: "#E5FFB5" }}>
          <Dropdown.Item
            active={activeItem === "home"}
            onClick={handleItemClick}
            as={NavLink}
            to="subtopics"
            icon="list"
            text="Show All Sub Topics"
          />
          <Dropdown.Item
            active={activeItem === "addsubtopic"}
            onClick={handleItemClick}
            as={NavLink}
            to="/addsubtopic"
            icon="add"
            text="Add Sub Topic"
          />
          <Dropdown.Item
            active={activeItem === "editsubtopic"}
            onClick={handleItemClick}
            as={NavLink}
            to="/editsubtopic"
            icon="edit"
            text="Edit Sub Topic"
          />
          <Dropdown.Item
            active={activeItem === "deletesubtopic"}
            onClick={handleItemClick}
            as={NavLink}
            to="/deletesubtopic"
            icon="trash"
            text="Delete Sub Topic"
          />
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown item text="Quetions">
        <Dropdown.Menu style={{ background: "#E5FFB5" }}>
          <Dropdown.Item
            active={activeItem === "questions"}
            onClick={handleItemClick}
            as={NavLink}
            to="questions"
            icon="help"
            text="Show All Questions"
          />
          <Dropdown.Item
            active={activeItem === "addQuestion"}
            onClick={handleItemClick}
            as={NavLink}
            to="/addQuestion"
            icon="add"
            text="Add Question"
          />
          <Dropdown.Item
            active={activeItem === "editQuestion"}
            onClick={handleItemClick}
            as={NavLink}
            to="/editQuestion"
            icon="edit"
            text="Edit Question"
          />
          <Dropdown.Item
            active={activeItem === "deletequestion"}
            onClick={handleItemClick}
            as={NavLink}
            to="/deletequestion"
            icon="trash"
            text="Delete Question"
          />
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown item text="Users">
        <Dropdown.Menu style={{ background: "#E5FFB5" }}>
          <Dropdown.Item
            active={activeItem === "users"}
            onClick={handleItemClick}
            as={NavLink}
            to="/users"
            icon="list"
            text="Show All Users"
          />
          <Dropdown.Item
            active={activeItem === "deleteuser"}
            onClick={handleItemClick}
            as={NavLink}
            to="/deleteuser"
            icon="delete user"
            text="Delete User"
          />
          <Dropdown.Item
            active={activeItem === "edituser"}
            onClick={handleItemClick}
            as={NavLink}
            to="/edituser"
            icon="settings"
            text="Change User Role"
          />
        </Dropdown.Menu>
      </Dropdown>
    </Menu>
  );
};
// }
