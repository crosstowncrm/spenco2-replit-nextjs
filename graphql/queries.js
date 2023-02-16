import { gql } from '@apollo/client';

const GET_ALL_SLUGS = gql`
query {
    posts {
      data {
        attributes {
          slug
        }
      }
    }
  }
`;

const GET_ALL_TAG_SLUGS = gql`
query {
    tags {
      data {
        attributes {
          name
          url
        }
      }
    }
  }
`;

const GET_ALL_SERVICE_SLUGS = gql`
  query {
    services {
      data {
        attributes {
          slug
        }
      }
    }
  }
`

const GET_ALL_SECTOR_SLUGS = gql`
  query {
    sectors {
      data {
        attributes {
          slug
        }
      }
    }
  }
`

const GET_ALL_POSTS = gql`
query {
  posts {
    data {
      attributes {
        title
        summary
        slug
        blogImage {
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
`;

const GET_INDIVIDUAL_POST = gql`
query ($slugUrl: String!) {
    posts(filters: { slug: { eq: $slugUrl } }) {
      data {
        attributes {
          title
          content
          updatedAt
          blogImage {
            data {
                attributes {
                    url
                }
            }
          }
          tags {
            data {
              id
              attributes {
                name
                url
              }
            }
          }
        }
      }
    }
  }
`;

const GET_POSTS_BY_TAG = gql`
  query ($slugUrl: String!) {
    tags(filters: { url: { eq: $slugUrl } }) {
      data {
        id
        attributes {
          name
          url
          posts {
            data {
              attributes {
                title
                slug
                summary
                updatedAt
                blogImage {
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
`;

const GET_ALL_SERVICES = gql`
  query {
    services {
      data {
        id
        attributes {
          serviceName
          slug
          serviceContent
          serviceSummary
          serviceBanner {
            data {
              attributes {
                url
              }
            }
          }
          updatedAt
        }
      }
    }
  }
`

const GET_SERVICE_BY_SLUG = gql`
  query ($slugUrl: String!) {
    services(filters: {slug: { eq: $slugUrl } }) {
      data {
        id
        attributes {
          serviceName
          slug
          serviceContent
          serviceSummary
          serviceBanner {
            data {
              attributes {
                url
              }
            }
          }
          updatedAt
        }
      }
    }
  }
`

const GET_ALL_SECTORS = gql`
  query {
    sectors {
      data {
        attributes {
          sectorName
          sectorSummary
          sectorContent
          slug
          updatedAt
          sectorBanner {
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

const GET_SECTOR_BY_SLUG = gql`
  query ($slugUrl: String!) {
    sectors(filters: {slug: { eq: $slugUrl } }) {
      data {
        id
        attributes {
          sectorName
          sectorSummary
          sectorContent
          slug
          updatedAt
          sectorBanner {
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


export { 
  GET_ALL_POSTS, 
  GET_INDIVIDUAL_POST, 
  GET_ALL_SLUGS, 
  GET_ALL_TAG_SLUGS, 
  GET_POSTS_BY_TAG,
  GET_ALL_SERVICE_SLUGS, 
  GET_ALL_SECTOR_SLUGS,
  GET_SERVICE_BY_SLUG,
  GET_ALL_SERVICES,
  GET_SECTOR_BY_SLUG,
  GET_ALL_SECTORS,
  };