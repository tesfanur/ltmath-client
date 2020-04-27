import { gql } from "apollo-boost";

export const GET_ALL_TOPICS = gql`
  query {
    getAllTopics {
      # subjectId
      _id
      topics {
        _id
        topic
      }
    }
  }
`;
export const GET_TOPIC_BY_ID = gql`
  query getTopicById($topicId: ID) {
    getTopicById(topicId: $topicId) {
      _id
      topic
    }
  }
`;
