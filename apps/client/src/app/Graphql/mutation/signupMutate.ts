import { gql } from '@apollo/client';

export const allSignupMutation = {
  male: gql`
    mutation MyMutation($input: CreateMaleInput!) {
      createMale(input: $input) {
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
  `,
  female: gql`
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
  `,
  matchmaker: gql`
    mutation MyMutation($input: CreateMatchmakerInput!) {
      createMatchmaker(input: $input) {
        clientMutationId
      }
    }
  `,
};
