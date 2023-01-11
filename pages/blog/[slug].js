import React from 'react';
import Navbar from "../../components/_App/NavbarTwo";
import PageBannerStyleOne from "../../components/Common/PageBanner/PageBannerStyleOne";
import Link from 'next/link';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import Footer from '../../components/_App/Footer';
import BlogSidebar from '../../components/Blog/BlogSidebar';
//import Comments from '../../components/Blog/Comments';
import { GET_ALL_SLUGS, GET_INDIVIDUAL_POST } from '../../graphql/queries';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import { DateTime } from 'luxon';

const client = new ApolloClient({
    uri: "http://localhost:1337/graphql",
    cache: new InMemoryCache()
});

export default function Post({ post }) {
    return (
        <>
            <Navbar />

            <PageBannerStyleOne 
                pageTitle={post.title} 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Blog Details" 
                BGImage="transparent-bg1" 
            />

            <div className="blog-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="blog-details-desc">
                                <div className="article-image">
                                    <img src={post.postImage} alt="image" />
                                </div>

                                <div className="article-content">
                                    <div className="entry-meta">
                                        <ul>
                                            <li><i className="far fa-user-circle"></i> <Link href="/blog"><a>Chris Orwig</a></Link></li>
                                            <li><i className="far fa-calendar-alt"></i>{DateTime.now(post.updated).toFormat('MMMM dd, yyyy')}</li>
                                            <li>
                                                <i className="far fa-comment-alt"></i>
                                                <Link href="/blog"><a>04 Comments</a></Link>
                                            </li>
                                        </ul>
                                    </div>

                                    <MDXRemote {...post.content} />
                                </div>

                                <div className="article-footer">
                                    <div className="article-tags">
                                        <div className="d-flex align-items-center">
                                            <p>Tags:</p>
                                            {post.tags.map(item => {
                                                return (
                                                    <Link key={item.id} href={`/tags/${item.attributes.url}`}><a>{item.attributes.name}</a></Link>
                                                )
                                                
                                            })}
                                        </div>
                                    </div>                               
                                    <div className="article-share">
                                        <ul className="social">
                                            <li><span>Share:</span></li>
                                            <li><a href="#" className="facebook" target="_blank"><i className='fab fa-facebook-f'></i></a></li>
                                            <li><a href="#" className="twitter" target="_blank"><i className='fab fa-twitter'></i></a></li>
                                            <li><a href="#" className="linkedin" target="_blank"><i className='fab fa-linkedin-in'></i></a></li>
                                            <li><a href="#" className="instagram" target="_blank"><i className='fab fa-instagram'></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                        <div className="col-lg-4 col-md-12">
                            <div className="right-sidebar pl-20">
                                <BlogSidebar />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
 
            <Footer />
        </>
    )
}

export async function getStaticPaths() {

    const { data } = await client.query({ query: GET_ALL_SLUGS });

    const paths = data.posts.data.map((post) => {
        return { params: { slug: post.attributes.slug } }
    })  ;

    console.log(paths);

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {

    const { data } = await client.query({
        query: GET_INDIVIDUAL_POST,
        variables: { slugUrl: params.slug }
    });

    const attrs = data.posts.data[0].attributes;

    const image = attrs.blogImage.data.attributes;

    const postTags = attrs.tags.data;

    const html = await serialize(attrs.content);

    return {
        props: {
            post: {
                title: attrs.title,
                content: html,
                postImage: image.url,
                updated: attrs.updatedAt,
                tags:attrs.tags.data,
//                postTags: postTags.attributes,
//                postTagsUrl: attrs.tags.data.attributes.url
            }
        }
    }
}

