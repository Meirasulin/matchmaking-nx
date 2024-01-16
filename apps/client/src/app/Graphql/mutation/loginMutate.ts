import { gql } from '@apollo/client';


export const LOGIN_MUTATION = gql`
  mutation MyMutation($input: LoginInput!) {
    login(input: $input) {
      loginResponse {
        jwtToken
        userDetails
      }
    }
  }
`;
