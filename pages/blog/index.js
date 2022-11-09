import React from 'react';
import Navbar from "../../components/_App/NavbarTwo";
import PageBannerStyleOne from "../../components/Common/PageBanner/PageBannerStyleOne";
import Link from 'next/link';
import Footer from '../../components/_App/Footer';
import BlogSidebar from '../../components/Blog/BlogSidebar';

const BlogRightSidebar = () => {
    return (
        <>
            <Navbar />

            <PageBannerStyleOne 
                pageTitle="News and Insights" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="News and Insights" 
                BGImage="transparent-bg1" 
            />

            <div className="blog-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="row justify-content-center">
                                <div className="col-lg-6 col-md-6">
                                    <div className="single-post-item startup-color">
                                        <div className="post-image">
                                            <Link href="/blog-details">
                                                <a className="d-block">
                                                    <img src="/images/blog/blog-img6.jpg" alt="image" />
                                                </a>
                                            </Link>
                                        </div>

                                        <div className="post-content">
                                            <ul className="meta">
                                                <li><i className="far fa-calendar-alt"></i> Dec 02, 2020</li>
                                                <li><i className="far fa-user-circle"></i> <Link href="/blog"><a>Shelley Percy</a></Link></li>
                                            </ul>

                                            <h3>
                                                <Link href="/blog-details">
                                                    <a>Some Important Rules To Start a New Business</a>
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
                                    <div className="single-post-item startup-color">
                                        <div className="post-image">
                                            <Link href="/blog-details">
                                                <a className="d-block">
                                                    <img src="/images/blog/blog-img7.jpg" alt="image" />
                                                </a>
                                            </Link>
                                        </div>
                                        <div className="post-content">
                                            <ul className="meta">
                                                <li><i className="far fa-calendar-alt"></i> Dec 03, 2020</li>
                                                <li><i className="far fa-user-circle"></i> <Link href="/blog"><a>Stevn Smith</a></Link></li>
                                            </ul>
                                        
                                            <h3>
                                                <Link href="/blog-details">
                                                    <a>Why Would You Need Some New Business</a>
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
                                    <div className="single-post-item startup-color">
                                        <div className="post-image">
                                            <Link href="/blog-details">
                                                <a className="d-block">
                                                    <img src="/images/blog/blog-img8.jpg" alt="image" />
                                                </a>
                                            </Link>
                                        </div>
                                        <div className="post-content">
                                            <ul className="meta">
                                                <li><i className="far fa-calendar-alt"></i> Dec 02, 2020</li>
                                                <li><i className="far fa-user-circle"></i> <Link href="/blog"><a>David Warner</a></Link></li>
                                            </ul>
                                
                                            <h3>
                                                <Link href="/blog-details">
                                                    <a>Know Top Ten Rules For Corporate Business</a>
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
                                    <div className="single-post-item startup-color">
                                        <div className="post-image">
                                            <Link href="/blog-details">
                                                <a className="d-block">
                                                    <img src="/images/blog/blog-img9.jpg" alt="image" />
                                                </a>
                                            </Link>
                                        </div>
                                        <div className="post-content">
                                            <ul className="meta">
                                                <li><i className="far fa-calendar-alt"></i> Dec 02, 2020</li>
                                                <li><i className="far fa-user-circle"></i> <Link href="/blog"><a>Shelley Percy</a></Link></li>
                                            </ul>
                                
                                            <h3>
                                                <Link href="/blog-details">
                                                    <a>How Much Does it Cost to Build a Mobile App?</a>
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
                                    <div className="single-post-item startup-color">
                                        <div className="post-image">
                                            <Link href="/blog-details">
                                                <a className="d-block">
                                                    <img src="/images/blog/blog-img10.jpg" alt="image" />
                                                </a>
                                            </Link>
                                        </div>
                                        <div className="post-content">
                                            <ul className="meta">
                                                <li><i className="far fa-calendar-alt"></i> Dec 03, 2020</li>
                                                <li><i className="far fa-user-circle"></i> <Link href="/blog"><a>Stevn Smith</a></Link></li>
                                            </ul> 

                                            <h3>
                                                <Link href="/blog-details">
                                                    <a>Mobile Applications Are Tested in The First Stage</a>
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
                                    <div className="single-post-item startup-color">
                                        <div className="post-image">
                                            <Link href="/blog-details">
                                                <a className="d-block">
                                                    <img src="/images/blog/blog-img11.jpg" alt="image" />
                                                </a>
                                            </Link>
                                        </div>
                                        <div className="post-content">
                                            <ul className="meta">
                                                <li><i className="far fa-calendar-alt"></i> Dec 02, 2020</li>
                                                <li><i className="far fa-user-circle"></i> <Link href="/blog"><a>David Warner</a></Link></li>
                                            </ul>

                                            <h3>
                                                <Link href="/blog-details">
                                                    <a>Ten Tips to Approve Apps in Apps Store</a>
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
                                    <div className="single-post-item startup-color">
                                        <div className="post-image">
                                            <Link href="/blog-details">
                                                <a className="d-block">
                                                    <img src="/images/blog/blog-img12.jpg" alt="image" />
                                                </a>
                                            </Link>
                                        </div>
                                        <div className="post-content">
                                            <ul className="meta">
                                                <li><i className="far fa-calendar-alt"></i> Dec 02, 2020</li>
                                                <li><i className="far fa-user-circle"></i> <Link href="/blog"><a>David Warner</a></Link></li>
                                            </ul>

                                            <h3>
                                                <Link href="/blog-details">
                                                    <a>They Focus on Digital Products and Virtual Services</a>
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
                                    <div className="single-post-item startup-color">
                                        <div className="post-image">
                                            <Link href="/blog-details">
                                                <a className="d-block">
                                                    <img src="/images/blog/blog-img13.jpg" alt="image" />
                                                </a>
                                            </Link>
                                        </div>
                                        <div className="post-content">
                                            <ul className="meta">
                                                <li><i className="far fa-calendar-alt"></i> Dec 02, 2020</li>
                                                <li><i className="far fa-user-circle"></i> <Link href="/blog"><a>David Warner</a></Link></li>
                                            </ul>

                                            <h3>
                                                <Link href="/blog-details">
                                                    <a>How to Succeed As The First Time Any Business</a>
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
 
                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <div className="pagination-area text-center">
                                        <a href="#" className="next page-numbers">
                                            <i className="fas fa-chevron-left"></i>
                                        </a>
                                        <a href="#" className="page-numbers current" aria-current="page">1</a>
                                        <a href="#" className="page-numbers">2</a>
                                        <a href="#" className="page-numbers">3</a>
                                        <a href="#" className="page-numbers">4</a>
                                        <a href="#" className="next page-numbers">
                                            <i className="fas fa-chevron-right"></i>
                                        </a>
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

export default BlogRightSidebar;