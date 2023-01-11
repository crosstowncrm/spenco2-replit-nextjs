// tag.service.js
import { gql } from "@apollo/client";
import apolloClient from "../utils/apolloClient";
import { GET_POSTS_BY_TAG, GET_ALL_TAG_SLUGS } from "../graphql/queries";

export async function getTags() {
  return apolloClient
    .query({
      query: GET_ALL_TAG_SLUGS
    })
    .then((result) => result.data.tags.data);
}

export async function getPostsByTag(slug) {
  return apolloClient
    .query({
      query: GET_POSTS_BY_TAG
    })
    .then((result) => {
      return result.data.posts;
    });
}