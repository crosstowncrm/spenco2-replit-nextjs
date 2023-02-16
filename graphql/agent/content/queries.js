import { gql } from '@apollo/client';


const AGENT_CONTENT_ALL_POSTS = gql`
query {
    posts {
      data {
        id
        attributes {
          title
          postType
          summary
          content
          createdAt
          updatedAt
          tags {
            data {
              attributes {
                name
              }
            }
          }
          summary
          blogImage {
            data {
              attributes {
                url
              }
            }
          }
          articleUrl
          articleDate
          articleExcerpt
          articlePublisher
        }
      }
    }
  }
`;

const AGENT_CONTENT_ALL_DRAFT_POSTS = gql`
query {
  posts(
    publicationState: PREVIEW
    pagination: { limit: 2 }
    filters: { publishedAt: { eq: null } }
  ) {
    data {
      id
      attributes {
        title
        postType
        summary
        postedBy {
          data {
            attributes {
              username
            }
          }
        }
        publishedAt
        slug
        content
        createdAt
        updatedAt
        tags {
          data {
            attributes {
              name
            }
          }
        }
        summary
        blogImage {
          data {
            attributes {
              url
            }
          }
        }
        articleUrl
        articleDate
        articleExcerpt
        articlePublisher
      }
    }
  }
}
`;

export { AGENT_CONTENT_ALL_POSTS, AGENT_CONTENT_ALL_DRAFT_POSTS }