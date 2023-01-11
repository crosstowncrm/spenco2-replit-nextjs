import { gql } from '@apollo/client';

const GET_ALL_CONTACTS = gql`
query {
    contacts {
      data {
        id
        attributes {
          firstName
          lastName
        }
      }
    }
  }
`;

export { GET_ALL_CONTACTS }