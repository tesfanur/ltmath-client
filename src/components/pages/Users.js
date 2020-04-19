import React from "react";
import { useQuery } from "@apollo/react-hooks";
import GET_ALL_USERS from "../../operations/query/Users";

function Users() {
  const { loading, error, data } = useQuery(GET_ALL_USERS);
  console.log({ data });
  if (loading) return <p>Loading ...</p>;
  if (error) return <h1>You are not allowed to view users</h1>;

  return (
    <div className="container">
      <ul>
        {data.users.map(({ username, _id }) => {
          return <li key={_id}>{username}</li>;
        })}
      </ul>
    </div>
  );

  //   return <div></div>;
}

export default Users;
