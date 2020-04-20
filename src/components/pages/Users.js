import React from "react";
import { Message, Container } from "semantic-ui-react";
import { useQuery } from "@apollo/react-hooks";
import GET_ALL_USERS from "../../operations/query/Users";

function Users() {
  const { loading, error, data } = useQuery(GET_ALL_USERS);
  console.log({ data });
  if (loading) return <p>Loading ...</p>;
  if (error)
    return (
      <Message
        error
        header="There's something wrong in fetching your request"
        content={error.message}
      />
    );
  return (
    <Container>
      <ul>
        {data.users.map(({ username, _id }) => {
          return <li key={_id}>{username}</li>;
        })}
      </ul>
    </Container>
  );

  //   return <div></div>;
}

export default Users;
