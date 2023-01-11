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

export { GET_ALL_POSTS, GET_INDIVIDUAL_POST, GET_ALL_SLUGS, GET_ALL_TAG_SLUGS, GET_POSTS_BY_TAG };