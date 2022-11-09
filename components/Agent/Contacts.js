import Link from "next/link";

const Contacts = ({ contacts }) => {
    return (
        <>
            <ul className="list-none space-y-4 text-4xl font-bold mb-3">
                {contacts &&
                    contacts.data.map((contact) => {
                        return (
                            <li key={contact.id}>
                                <Link href={`/agent/contact/` + contact.id}><a>{contact.attributes.firstName} {contact.attributes.lastName}</a></Link> 
                            </li>
                        );
                    })}
            </ul>
        </>
    );
};

export default Contacts;