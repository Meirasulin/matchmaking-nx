import { gql } from '@apollo/client';
// export const FEMALE_LOGIN_MUTATION = gql`
//   mutation MyMutation($input: FemaleLoginTokenInput!) {
//     femaleLoginToken(input: $input) {
//       userLoginInfo
//     }
//   }
// `;

// export const MATCHMAKER_LOGIN_MUTATION = gql`
//   mutation MyMutation($input: MakerLoginTokenInput!) {
//     makerLoginToken(input: $input) {
//       userLoginInfo
//     }
//   }
// `;

// export const MALE_LOGIN_MUTATION = gql`
//   mutation MyMutation($input: MaleLoginTokenInput!) {
//     maleLoginToken(input: $input) {
//       userLoginInfo
//     }
//   }
// `;
export const LOGIN_MUTATION = gql`
  mutation MyMutation($input: LoginTokenInput!) {
    loginToken(input: $input) {
      userLoginInfo
    }
  }
`;
