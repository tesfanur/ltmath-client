import { gql } from "apollo-boost";

const GET_ALL_USERS = gql`
  query getAllUsers {
    users {
      _id
      username
      email
      usertype
    }
  }
`;
export default GET_ALL_USERS;
