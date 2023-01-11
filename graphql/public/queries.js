import { gql } from '@apollo/client';

const GET_ALL_FAQS = gql`
query {
    faqs {
      data {
        id
        attributes {
          faqFields {
            faqQuestion
            faqAnswer
            faqCategories
          }
        }
      }
    }
  }
`;

export { GET_ALL_FAQS }