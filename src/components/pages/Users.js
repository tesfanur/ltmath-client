import React from "react";
import { Message, Container } from "semantic-ui-react";
import { useQuery } from "@apollo/react-hooks";
import GET_ALL_USERS from "../../operations/query/users";

function Users() {
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
    <Container>
      <ul>
        {data.users.map(({ username, _id }) => {
          return (
            <li key={_id}>
              username: >{username}>id: ${_id}
            </li>
          );
        })}
      </ul>
    </Container>
  );

  //   return <div></div>;
}

export default Users;
