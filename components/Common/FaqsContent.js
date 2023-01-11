import React from 'react';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { GET_ALL_FAQS } from '../../graphql/public/queries';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton
} from 'react-accessible-accordion';


export default function FaqsContent({ faqs }) {
    return (
        <>
          <div className="faq-area ptb-100">
                <div className="container">
                    <div className="section-title">
                        <span className="sub-title">FAQ</span>
                        <h2>Frequently Asked Questions</h2>
                    </div>

                    <Accordion allowZeroExpanded>
                        {faqs.map((val, i) => {
                            return (
                                <AccordionItem key={i}>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        {val.attributes.faqFields.faqQuestion}
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>{val.attributes.faqFields.faqAnswer}</p>
                                </AccordionItemPanel>
                                </AccordionItem>
                            )
                        })}
                    </Accordion>
                </div>
            </div>                      
        </>
    )
}

export async function getStaticProps() {

    const client = new ApolloClient({
        uri: "http://localhost:1337/graphql",
        cache: new InMemoryCache()
    });

    const { data } = await client.query({
        query: GET_ALL_FAQS
      })
 
    return {
        props: {
          faqs: data.faqs.data
        }
    }
}

