import React, { useState } from 'react'
import Contacts from "../../../components/Agent/Contacts";
import AgentLayout from "../../../components/_App/AgentLayout";
import Navbar from "../../../components/_App/NavbarTwo";
import PageBannerStyleOne from "../../../components/Common/PageBanner/PageBannerStyleOne";
import Link from 'next/link';
import Footer from '../../../components/_App/Footer';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { GET_ALL_CONTACTS } from '../../../graphql/agent/queries';
import { DateTime } from 'luxon'

export default function ContactsList({ contacts }) {
    const [pageIndex, setPageIndex] = useState(1);
    return (
        <AgentLayout>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter mb-4">
                <span className="bg-clip-text py-2">
                    Contacts
                </span>
            </h1>
            <Contacts contacts={contacts} />
            
        </AgentLayout>
    );
};

export async function getServerSideProps() {

    const client = new ApolloClient({
        uri: "http://localhost:1337/graphql",
        cache: new InMemoryCache()
    });

    const { data } = await client.query({
        query: GET_ALL_CONTACTS
      })
 
    return {
        props: {
          contacts: data.contacts.data
        }
    }
}