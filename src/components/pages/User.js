import React from "react";
import { useParams } from "react-router-dom";
import {
  Message,
  Container,
  Card,
  Image,
  Header,
  Divider,
} from "semantic-ui-react";
import { useQuery } from "@apollo/react-hooks";

//person-icon-transparent.png
import personIcon from "../../img/person-icon-transparent.svg";
import { GET_USER_BY_ID } from "../../operations/query/User";

function User() {
  const { userId } = useParams();
  const { loading, error, data } = useQuery(GET_USER_BY_ID, {
    variables: { userId },
  });
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
  let {
    username,
    _id,
    email,
    usertype,
    createdAt,
    updatedAt,
  } = data.getUserByID;
  return (
    <Container style={{ marginTop: "10px", width: "50%" }}>
      <Header>User Profile</Header>
      <Card>
        <Image src={personIcon} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{username}</Card.Header>
          <Card.Meta>
            <span className="date">Joined on {Date(createdAt).toString()}</span>
            <Divider />
            <span className="date">
              Updated on {Date(updatedAt).toString()}
            </span>
          </Card.Meta>
          <Divider />
          <Card.Description>
            <b>{username}</b> is a {usertype.toLowerCase()}.
            <br /> Email: {email}
            <br /> User ID: {_id}
          </Card.Description>
        </Card.Content>
      </Card>
    </Container>
  );
}

export default User;
