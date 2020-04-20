import React from "react";
import { useQuery } from "@apollo/react-hooks";

import { Message, Container } from "semantic-ui-react";
import { GET_ALL_TOPICS } from "../../operations/query/Topics";

function Topics() {
  const { loading, error, data } = useQuery(GET_ALL_TOPICS);
  // let { getAllTopics } = data.data;
  console.log("data", data);
  if (loading) return <p>Loading ...</p>;
  if (error)
    return (
      <Message
        error
        header="There's something wrong in fetching your request"
        content={error.message}
      />
    );
  let topics = [];
  if (data.getAllTopics.length === 1) topics = data.getAllTopics[0].topics;
  return (
    <Container>
      <ul className="container">
        {topics.map(({ topic, _id }) => {
          return <li key={_id}>{topic}</li>;
        })}
      </ul>
    </Container>
  );
}
export default Topics;
