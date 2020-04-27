import { gql } from "apollo-boost";

export const GET_ALL_SUB_TOPICS = gql`
  query getAllSubTopics($topicId: ID) {
    getAllSubTopics(topicId: $topicId) {
      _id
      topic
      subTopics {
        _id
        subTopic
      }
    }
  }
`;
