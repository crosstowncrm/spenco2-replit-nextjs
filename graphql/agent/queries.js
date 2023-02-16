import { gql } from '@apollo/client';

const GET_ALL_CONTACTS = gql`
query {
    contacts {
      data {
        id
        attributes {
          firstName
          lastName
          emailPrimary
          mobilePhone
        }
      }
    }
  }
`;

const GET_ALL_CONTACT_IDS = gql`
query {
    contacts {
      data {
        id
        attributes {
          firstName
          lastName
          emailPrimary
          mobilePhone
        }
      }
    }
  }
`;

const GET_CONTACT_BY_ID = gql`
query Contacts($id: ID!) {
  contact(id: $id) {
      data {
        attributes {
          firstName
          lastName
          emailPrimary
          mobilePhone
          company {
            data {
              attributes {
                companyName
              }
            }
          }
          activities {
            data {
              attributes {
                updatedAt
                test {
                  __typename
                  ... on ComponentAgentNote {
                    noteText
                  }
                  __typename
                  ... on ComponentAgentEmail {
                    emailSubject
                    emailContent
                    sentTo
                    sentFrom
                    sentDate
                    emailAttachments {
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
          }
        }
      }
    }
  }
`
const GET_ALL_COMPANIES = gql`
query {
  companies {
    data {
      id 
      attributes {
        companyName
        companyUrl
        updatedAt
				streetAddress {
          __typename
          ... on ComponentAgentAddress {
            streetAddress
            streetAddressLine2
            city
            state
            postalCode
          }
        }
      }
    }
  }
}
`

const GET_ALL_COMPANY_IDS = gql`
query {
    companies {
      data {
        id
        attributes {
          companyName
        }
      }
    }
  }
`;

const GET_COMPANY_BY_ID = gql`
  query Companies($id: ID!){
    company(id: $id) {
      data {
        id 
        attributes {
          companyName
          companyUrl
          updatedAt
          contact {
            data {
              id
              attributes {
                firstName
                lastName
              }
            }
          }
          activities {
            data {
              id 
              attributes {
                test {
                  __typename
                  ... on ComponentAgentNote {
                    noteText
                  }
                  __typename
                  ... on ComponentAgentEmail {
                    sentTo
                    sentFrom
                    sentDate
                    emailSubject
                    emailContent
                  }
                }
              }
            }
          }
          streetAddress {
            __typename
            ... on ComponentAgentAddress {
              streetAddress
              streetAddressLine2
              city
              state
              postalCode
            }
          }
        }
      }
    }
  }
`


export { GET_ALL_CONTACTS, GET_CONTACT_BY_ID, GET_ALL_CONTACT_IDS, GET_ALL_COMPANIES, GET_ALL_COMPANY_IDS, GET_COMPANY_BY_ID }