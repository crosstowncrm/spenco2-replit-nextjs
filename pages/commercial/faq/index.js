import React from 'react';
import NavbarTwo from '../../../components/_App/NavbarTwo';
import PageBannerStyleFour from "../../../components/Common/PageBanner/PageBannerStyleThree"; 
//import FaqsContent from '../../../components/Common/FaqsContent';
import Footer from '../../../components/_App/Footer';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { GET_ALL_FAQS } from '../../../graphql/public/queries';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton
} from 'react-accessible-accordion';

export default function FaqPage({ faqs }) {
    console.log(faqs);
    return (
        <>
            <NavbarTwo />

            <PageBannerStyleFour 
                pageTitle="Frequently Asked Questions" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="FAQ" 
                BGImage="bg1" 
            />
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
                                        test question
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>{val.attributes.faqFields.faqAnswer}</p>
                                    <p>test</p>
                                </AccordionItemPanel>
                                </AccordionItem>
                            )
                        })}
                    </Accordion>
                </div>
            </div>
 
            <Footer />
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

    //const attrs = data.faqs.data.attributes;
    //const fields = attrs.faqFields
 
    return {
        props: {
          faqs: data.faqs.data
        }
    }
}