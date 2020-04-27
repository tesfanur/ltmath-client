import { gql } from "apollo-boost";

const SIGNIN_USER = gql`
  mutation($signinInput: userSigninInput) {
    signin(input: $signinInput) {
      token
      username
      email
    }
  }
`;
export default SIGNIN_USER;
