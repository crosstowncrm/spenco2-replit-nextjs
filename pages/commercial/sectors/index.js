import React from 'react';
import NavbarFour from "../../../components/_App/NavbarFour";
import PageBannerStyleThree from "../../../components/Common/PageBanner/PageBannerStyleThree";
import Link from 'next/link';
import FooterThree from '../../../components/_App/FooterThree';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { GET_ALL_SECTORS } from '../../../graphql/queries';
import { DateTime } from 'luxon'

export default function Sectors({ sectors }) {
    return (
        <>
            <NavbarFour />

            <PageBannerStyleThree 
                pageTitle="Sectors" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Sectors" 
                BGImage="bg5" 
            />

            <div className="services-area ptb-100">
                <div className="container">
                    <div className="section-title">
                        <span className="sub-title">WHAT WE DO</span>
                        <h2>Commercial Real Estate Market Sectors</h2>
                    </div>

                    <div className="row justify-content-center">
                        {sectors.map((val, i) => {
                        return (
                        <div key={i} className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-services-item">
                                <img src={val.attributes.sectorBanner.data.attributes.url} alt="image" />
                                <div className="content">
                                    <h3>
                                        <Link href={`/commercial/sectors/${val.attributes.slug}`}>
                                            <a>{val.attributes.sectorName}</a>
                                        </Link>
                                    </h3>
                                    <p>{val.attributes.sectorSummary}</p>
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
        query: GET_ALL_SECTORS
      })
 
    return {
        props: {
          sectors: data.sectors.data
        }
    }
}