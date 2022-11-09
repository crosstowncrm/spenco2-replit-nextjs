import Contacts from "../../../components/Agent/Contacts";
import AgentLayout from "../../../components/_App/AgentLayout";
import { fetcher } from "../../../lib/api";
import useSWR from 'swr';
import { useState } from "react";

const ContactsList = ({ contacts }) => {
    const [pageIndex, setPageIndex] = useState(1);
    const { data } = useSWR(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/contacts?pagination[page]=${pageIndex}&pagination[pageSize]=3`, 
        fetcher, 
        {
            fallbackData: contacts
        }
    );
    return (
        <AgentLayout>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter mb-4">
                <span className="bg-clip-text py-2">
                    Contacts
                </span>
            </h1>
            <Contacts contacts={data} />
            <div className="space-x-2 space-y-2">
                <button
                    className={`md:p-2 rounded py-2 text-black text-white p-2 ${
                    pageIndex === 1 ? 'bg-gray-300' : 'bg-blue-400'
                    }`}
                    disabled={pageIndex === 1}
                    onClick={() => setPageIndex(pageIndex - 1)}
                >
                    {' '}
                    Previous
                </button>
                <button
                    className={`md:p-2 rounded py-2 text-black text-white p-2 ${
                    pageIndex === (data && data.meta.pagination.pageCount)
                      ? 'bg-gray-300'
                      : 'bg-blue-400'
                    }`}
                    disabled={pageIndex === (data && data.meta.pagination.pageCount)}
                    onClick={() => setPageIndex(pageIndex + 1)}
                >
                  Next
                </button>
                <span>{`${pageIndex} of ${
                  data && data.meta.pagination.pageCount
                }`}</span>
            </div>
        </AgentLayout>
    );
};

export async function getStaticProps() {
    const contactsResponse = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/contacts?pagination[page]=1&pagination[pageSize]=3`);
    console.log(contactsResponse);
    return {
        props: {
            contacts: contactsResponse
        }
    };
};

export default ContactsList;