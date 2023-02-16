import { gql } from '@apollo/client';

const GET_ALL_FAQS = gql`
  query {
    faqs {
      data {
        attributes {
          faqQuestion
          faqAnswer
          faqCategory
        }
      }
    }
  }
`;

const GET_ABOUT_OUR_COMPANY = gql`
  query {
    aboutOurCompany {
      data {
        attributes {
          experience
          approach
          marketing
          consultation
          bannerImage {
            data {
              attributes {
                url
              }
            }
          }
          contentImage {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`

export { GET_ALL_FAQS, GET_ABOUT_OUR_COMPANY }