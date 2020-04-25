import React from "react";
import { useQuery, useApolloClient } from "@apollo/react-hooks";

import { Message, Container, List, Divider } from "semantic-ui-react";
import { GET_ALL_TOPICS } from "../../operations/query/Topics";

function Topics() {
  const client = useApolloClient();
  console.log({ client });
  const { loading, error, data } = useQuery(GET_ALL_TOPICS);
  // let { getAllTopics } = data.data;
  console.log("data", data);
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
  let topics = [];
  if (data.getAllTopics.length === 1) {
    topics = data.getAllTopics[0].topics;
    client.writeData({ data: { topics } });
  }

  return (
    <Container>
      <List>
        {topics.map(({ topic, _id }) => {
          return (
            <>
              <List.Item key={_id} href={`/topics/${_id}`}>
                {topic}
              </List.Item>
              <Divider />
            </>
          );
        })}
      </List>
    </Container>
  );
}
export default Topics;
