import { gql } from '@apollo/client';

export const SIGNUP_FEMALE = gql`
  mutation MyMutation($input: CreateFemaleInput!) {
    createFemale(input: $input) {
      female {
        fathername
        firstname
        birthdate
        currentaddress
        educationname
        email
      }
    }
  }
`;

export const SIGNUP_MALE = gql`
  mutation MyMutation($input: CreateMaleInput!) {
    createMale (input: $input) {
      male {
        fathername
        firstname
        birthdate
        currentaddress
        educationname
        email
      }
    }
  }
`;