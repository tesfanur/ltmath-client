import { gql } from "apollo-boost";

export const GET_ALL_USERS = gql`
  query getAllUsers {
    users {
      _id
      username
      email
      usertype
    }
  }
`;

export const GET_USER_BY_ID = gql`
  query getUserByID($userId: ID) {
    getUserByID(userId: $userId) {
      _id
      username
      email
      usertype
      createdAt
      updatedAt
    }
  }
`;
export const GET_USER_BY_EMAIL = gql`
  query getUserByEmail($email: String) {
    getUserByEmail(email: $email) {
      _id
      username
      email
      usertype
    }
  }
`;
export const GET_USER_BY_USERNAME = gql`
  query getUserByUsername($username: String) {
    getUserByUsername(username: $username) {
      _id
      username
      email
      usertype
    }
  }
`;
