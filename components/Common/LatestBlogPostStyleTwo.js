import React from 'react';
import Link from 'next/link';

const LatestBlogPostStyleTwo = () => {
    return (
        <>
            <div className="blog-area with-border pt-100 pb-70">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4 col-md-12">
                            <div className="blog-section-title">
                                <span className="sub-title marketing-color">LATEST BLOG</span>
                                <h2>Learn More From Our Latest Blog</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel.</p>

                                <Link href="/blog">
                                    <a className="default-btn marketing-color">
                                        View All Posts <i className="fas fa-chevron-right"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-8 col-md-12">
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <div className="single-post-item">
                                        <div className="post-image">
                                            <Link href="/blog-details">
                                                <a className="d-block">
                                                    <img src="/images/blog/blog-img4.jpg" alt="image" />
                                                </a>
                                            </Link>
                                        </div>
                                        <div className="post-content">
                                            <ul className="meta">
                                                <li><i className="far fa-calendar-alt"></i> Dec 02, 2020</li>
                                                <li>
                                                    <i className="far fa-user-circle"></i> 
                                                    <Link href="/blog"><a>Shelley Percy</a></Link>
                                                </li>
                                                <li>
                                                    <i className="fas fa-tag"></i> 
                                                    <Link href="/blog"><a>Growth</a></Link>
                                                </li>
                                            </ul>
                                            <h3>
                                                <Link href="/blog-details">
                                                    <a>How To INcrease Your Post Reach With This Simple Trick</a>
                                                </Link>
                                            </h3>
                                            <Link href="/blog-details">
                                                <a className="link-btn">
                                                    Read More <i className="fas fa-chevron-right"></i>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="single-post-item">
                                        <div className="post-image">
                                            <Link href="/blog-details">
                                                <a className="d-block">
                                                    <img src="/images/blog/blog-img5.jpg" alt="image" />
                                                </a>
                                            </Link>
                                        </div>
                                        <div className="post-content">
                                            <ul className="meta">
                                                <li><i className="far fa-calendar-alt"></i> Dec 03, 2020</li>
                                                <li>
                                                    <i className="far fa-user-circle"></i> 
                                                    <Link href="/blog"><a>Stevn Smith</a></Link>
                                                </li>
                                                <li>
                                                    <i className="fas fa-tag"></i> 
                                                    <Link href="/blog"><a href="blog-1.html">Content</a></Link>
                                                </li>
                                            </ul>
                                            <h3>
                                                <Link href="/blog-details">
                                                    <a>Top Lessons to Learn From Smith’s Marketing Strategy</a>
                                                </Link>
                                            </h3>
                                            
                                            <Link href="/blog-details">
                                                <a className="link-btn">
                                                    Read More <i className="fas fa-chevron-right"></i>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LatestBlogPostStyleTwo;