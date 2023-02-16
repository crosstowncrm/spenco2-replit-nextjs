import React from 'react';
import Navbar from "../../../components/_App/NavbarTwo";
import PageBannerStyleOne from "../../../components/Common/PageBanner/PageBannerStyleOne";
import Link from 'next/link';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import Footer from '../../../components/_App/Footer';
import SectorsSidebar from '../../../components/Sectors/SectorsSidebar';
//import Comments from '../../components/Blog/Comments';
import { GET_ALL_SECTOR_SLUGS, GET_SECTOR_BY_SLUG } from '../../../graphql/queries';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import { DateTime } from 'luxon';

const client = new ApolloClient({
    uri: "http://localhost:1337/graphql",
    cache: new InMemoryCache()
});

export default function Sector({ sector }) {
    return (
        <>
            <Navbar />

            <PageBannerStyleOne 
                pageTitle={sector.title}
                homePageUrl="/" 
                homePageText="Home" 
                activePageText={sector.title} 
                BGImage="transparent-bgindustrial1" 
            />

            <div className="services-details-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="services-details-desc">
                            <div className="article-content">
                                    <MDXRemote {...sector.content} />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-12">
                            <SectorsSidebar />
                        </div>
                    </div>
                </div>
            </div>
 
            <Footer />
        </>
    )
}

export async function getStaticPaths() {

    const { data } = await client.query({ query: GET_ALL_SECTOR_SLUGS });

    const paths = data.sectors.data.map((sector) => {
        return { params: { slug: sector.attributes.slug } }
    })  ;

    console.log(paths);

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {

    const { data } = await client.query({
        query: GET_SECTOR_BY_SLUG,
        variables: { slugUrl: params.slug }
    });

    const attrs = data.sectors.data[0].attributes;

//    const image = attrs.blogImage.data.attributes;

//    const postTags = attrs.tags.data;

    const html = await serialize(attrs.sectorContent);

    return {
        props: {
            sector: {
                title: attrs.sectorName,
                content: html,
                updated: attrs.updatedAt,
//                postTags: postTags.attributes,
//                postTagsUrl: attrs.tags.data.attributes.url
            }
        }
    }
}

