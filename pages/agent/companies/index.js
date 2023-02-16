import React, { useState } from 'react'
import Companies from "../../../components/Agent/Companies";
import AgentLayout from "../../../components/_App/AgentLayout";
import Navbar from "../../../components/_App/NavbarTwo";
import PageBannerStyleOne from "../../../components/Common/PageBanner/PageBannerStyleOne";
import Link from 'next/link';
import Footer from '../../../components/_App/Footer';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { GET_ALL_COMPANIES } from '../../../graphql/agent/queries';
import { DateTime } from 'luxon'

export default function ContactsList({ companies }) {
    const [pageIndex, setPageIndex] = useState(1);
    return (
        <AgentLayout>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter mb-4">
                <span className="bg-clip-text py-2">
                    Companies
                </span>
            </h1>
            <Companies companies={companies} />
            
        </AgentLayout>
    );
};

export async function getServerSideProps() {

    const client = new ApolloClient({
        uri: "http://localhost:1337/graphql",
        cache: new InMemoryCache()
    });

    const { data } = await client.query({
        query: GET_ALL_COMPANIES
      })
 
    return {
        props: {
          companies: data.companies.data
        }
    }
}