import React, { useState } from 'react'
import Posts from "../../../components/Agent/Posts";
import AgentLayout from "../../../components/_App/AgentLayout";
import Navbar from "../../../components/_App/NavbarTwo";
import PageBannerStyleOne from "../../../components/Common/PageBanner/PageBannerStyleOne";
import Link from 'next/link';
import Footer from '../../../components/_App/Footer';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { AGENT_CONTENT_ALL_POSTS } from '../../../graphql/agent/content/queries';
import { DateTime } from 'luxon'

export default function PostsList({ posts }) {
    const [pageIndex, setPageIndex] = useState(1);
    return (
        <AgentLayout>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter mb-4">
                <span className="bg-clip-text py-2">
                    Posts
                </span>
            </h1>
            <Posts posts={posts} />
            
        </AgentLayout>
    );
};

export async function getServerSideProps() {

    const client = new ApolloClient({
        uri: "http://localhost:1337/graphql",
        cache: new InMemoryCache()
    });

    const { data } = await client.query({
        query: AGENT_CONTENT_ALL_POSTS
      })
 
    return {
        props: {
          posts: data.posts.data
        }
    }
}

