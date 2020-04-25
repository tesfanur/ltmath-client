import { gql } from "apollo-boost";

export const SIGNUP_USER = gql`
  mutation($signupInput: userRegistrationInput) {
    signup(input: $signupInput) {
      token
    }
  }
`;
export const SIGNIN_USER = gql`
  mutation($signinInput: userSigninInput) {
    signin(input: $signinInput) {
      token
    }
  }
`;
