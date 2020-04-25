import React from "react";
// import { useParams } from "react-router-dom";
import { Message, Container, Divider, List, Icon } from "semantic-ui-react";
import { useQuery } from "@apollo/react-hooks";

import GET_ALL_USERS from "../../operations/query/Users";

function Users() {
  // const { userId } = useParams();
  const { loading, error, data } = useQuery(GET_ALL_USERS);
  console.log({ data });
  if (loading) return <p>Loading ...</p>;
  if (error)
    return (
      <Container style={{ marginTop: "10px", width: "50%" }}>
        <Message
          error
          header="There's something wrong in fetching your request"
          content={error.message}
        />
      </Container>
    );

  return (
    <Container style={{ width: "40%" }}>
      <List>
        {data.users.map(({ username, _id }) => {
          return (
            <>
              <List.Item
                key={_id}
                href={`/users/${_id}`}
                className="flex-list-item"
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100vw",
                  }}
                >
                  <div className="flex-item">{username}</div>
                  <div className="flex-item">
                    <Icon name="user delete" />
                  </div>
                </div>
              </List.Item>
              <Divider />
            </>
          );
        })}
      </List>
    </Container>
  );
}

export default Users;
