import { gql } from "apollo-boost";

const SIGNUP_USER = gql`
  mutation($signupInput: userRegistrationInput) {
    signup(input: $signupInput) {
      token
    }
  }
`;
export default SIGNUP_USER;
