import React from 'react';
import NavbarFour from "../../../components/_App/NavbarFour";
import PageBannerStyleThree from "../../../components/Common/PageBanner/PageBannerStyleThree";
import Link from 'next/link';
import FooterThree from '../../../components/_App/FooterThree';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { GET_ALL_SERVICES } from '../../../graphql/queries';
import { DateTime } from 'luxon'

export default function Services({ services }) {
    return (
        <>
            <NavbarFour />

            <PageBannerStyleThree 
                pageTitle="Services" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Services" 
                BGImage="bg5" 
            />

            <div className="services-area ptb-100">
                <div className="container">
                    <div className="section-title">
                        <span className="sub-title">WHAT WE DO</span>
                        <h2>All The Services That We Provide to Our Clients</h2>
                    </div>

                    <div className="row justify-content-center">
                        {services.map((val, i) => {
                        return (
                        <div key={i} className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-services-item">
                                <img src={val.attributes.serviceBanner.data.attributes.url} alt="image" />
                                <div className="content">
                                    <h3>
                                        <Link href={`/commercial/services/${val.attributes.slug}`}>
                                            <a>{val.attributes.serviceName}</a>
                                        </Link>
                                    </h3>
                                    <p>{val.attributes.serviceSummary}</p>
                                </div>
                            </div>
                        </div>
                        )
                        })}

                    </div>
                </div>
            </div>
  
            <FooterThree />
        </>
    )
}

export async function getStaticProps() {

    const client = new ApolloClient({
        uri: "http://localhost:1337/graphql",
        cache: new InMemoryCache()
    });

    const { data } = await client.query({
        query: GET_ALL_SERVICES
      })
 
    return {
        props: {
          services: data.services.data
        }
    }
}