import React from 'react';
import Navbar from "../../../components/_App/NavbarTwo";
import PageBannerStyleOne from "../../../components/Common/PageBanner/PageBannerStyleOne";
import ServicesSidebar from '../../../components/Services/ServicesSidebar';
import Footer from '../../../components/_App/Footer';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { GET_ABOUT_OUR_COMPANY } from '../../../graphql/public/queries';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import { DateTime } from 'luxon';

export default function OurCompany({ company }) {
    return (
        <>
            <Navbar />

            <PageBannerStyleOne 
                pageTitle="About Spencer Commercial Group" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Our Company" 
                BGImage="transparent-bg1"
            />

            <div className="services-details-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="services-details-desc">
                                <MDXRemote {...company.experience} />
                                <img src={company.contentImage}  alt="image" />
                                <MDXRemote {...company.approach} />
                                <MDXRemote {...company.marketing} />
                                <MDXRemote {...company.consultation} />
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-12">
                            <ServicesSidebar />
                        </div>
                    </div>
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
        query: GET_ABOUT_OUR_COMPANY
      })

    const attrs = data.aboutOurCompany.data.attributes;
    //const fields = attrs.faqFields

    const htmlExperience = await serialize(attrs.experience);

    const htmlApproach = await serialize(attrs.approach);

    const htmlMarketing = await serialize(attrs.marketing);

    const htmlConsultation = await serialize(attrs.consultation);

    const bannerImage = attrs.bannerImage.data.attributes;

    const contentImage = attrs.contentImage.data.attributes;

    return {
        props: {
            company: {
                experience: htmlExperience,
                approach: htmlApproach,
                marketing: htmlMarketing,
                consultation: htmlConsultation,
                bannerImage: bannerImage.url,
                contentImage: contentImage.url,
            
          }
        }
    }
}