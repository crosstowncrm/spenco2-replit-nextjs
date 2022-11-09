import AgentLayout from "../../../components/_App/AgentLayout";
import { fetcher } from "../../../lib/api";

const Contact = ( contact ) => {
    return (
        <AgentLayout>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter mb-4">
                <span className="bg-clip-text py-2">
                {contact.attributes.firstName} {contact.attributes.lastName}
                </span>
            </h1>
        </AgentLayout>
    );
};

export async function getServerSideProps({ params }) {
    const { id } = params;
    const contactResponse = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/contacts/${id}`);
    return {
        props: {
            contact: contactResponse.id
        }
    }
}

export default Contact;