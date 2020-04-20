import React, { useState } from "react";
import loadingImagePath from "../../img/short-paragraph.png";
import {
  List,
  Container,
  Dimmer,
  Loader,
  Image,
  Segment,
  Message,
} from "semantic-ui-react";

import { useQuery, useApolloClient } from "@apollo/react-hooks";
import { GET_ALL_SUB_TOPICS } from "../../operations/query/Topics";

const LoadingMessage = () => (
  <Container style={{ marginTop: "10px", width: "70%" }}>
    <Segment>
      <Dimmer active inverted>
        <Loader inverted>Loading</Loader>
      </Dimmer>
      <Image src={loadingImagePath} />
    </Segment>
  </Container>
);

function SubTopics() {
  const client = useApolloClient();
  console.log({ client });
  const [topicId, setTopicId] = useState("");
  const { data, loading, error } = useQuery(GET_ALL_SUB_TOPICS, {
    variables: { topicId: "5e984b1dedced960b8e2ce62" },
  });
  console.log("data", data, topicId, setTopicId);
  if (loading) return <LoadingMessage />;
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
  let topic,
    subTopics = [];

  if (data.getAllSubTopics.length === 1) {
    topic = data.getAllSubTopics[0].topic;
    subTopics = data.getAllSubTopics[0].subTopics;

    client.writeData({ data: { subTopics } });
  }
  return (
    <Container>
      <List>
        {subTopics.map(({ subTopic, _id }) => {
          return <List.Item key={_id}>{subTopic}</List.Item>;
        })}
      </List>
    </Container>
  );
}
export default SubTopics;
