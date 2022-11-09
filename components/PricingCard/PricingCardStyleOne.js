import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const PricingCardStyleOne = () => {
    return (
        <>
            <div className="pricing-area pt-100 pb-70">
                <div className="container">
                    <div className="section-title">
                        <span className="sub-title marketing-color">SECTORS</span>
                        <h2>SPENCO and eXp Commercial have expertise in all of the major CRE asset classes</h2>
                    </div>

                    <div className="row justify-content-center">
                        
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-post-item startup-color">
                                <div className="post-image">
                                    <Link href="/blog-details">
                                        <a className="d-block">
                                            <img src="/images/sectors/multifamily/apartment_1920.jpg" alt="image" />
                                        </a>
                                    </Link>
                                </div>
                                            
                                <div className="post-content">
                                    <h3>
                                        <Link href="/blog-details">
                                            <a>Multifamily</a>
                                        </Link>
                                    </h3>

                                    <Link href="/blog-details">
                                        <a className="link-btn">
                                            Learn More <i className="fas fa-chevron-right"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        
                        
                        
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-post-item startup-color">
                                <div className="post-image">
                                    <Link href="/blog-details">
                                        <a className="d-block">
                                            <img src="/images/sectors/office/office_reflection_1920.jpg" alt="image" />
                                        </a>
                                    </Link>
                                </div>
                                            
                                <div className="post-content">
                                    <h3>
                                        <Link href="/blog-details">
                                            <a>Office</a>
                                        </Link>
                                    </h3>

                                    <Link href="/blog-details">
                                        <a className="link-btn">
                                            Learn More <i className="fas fa-chevron-right"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-post-item startup-color">
                                <div className="post-image">
                                    <Link href="/blog-details">
                                        <a className="d-block">
                                            <img src="/images/sectors/industrial/production_1920.jpg" alt="image" />
                                        </a>
                                    </Link>
                                </div>
                                            
                                <div className="post-content">
                                    <h3>
                                        <Link href="/blog-details">
                                            <a>Industrial</a>
                                        </Link>
                                    </h3>

                                    <Link href="/blog-details">
                                        <a className="link-btn">
                                            Learn More <i className="fas fa-chevron-right"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-post-item startup-color">
                                <div className="post-image">
                                    <Link href="/blog-details">
                                        <a className="d-block">
                                            <img src="/images/sectors/land/road-fields-1920.jpg" alt="image" />
                                        </a>
                                    </Link>
                                </div>
                                            
                                <div className="post-content">
                                    <h3>
                                        <Link href="/blog-details">
                                            <a>Land</a>
                                        </Link>
                                    </h3>

                                    <Link href="/blog-details">
                                        <a className="link-btn">
                                            Learn More <i className="fas fa-chevron-right"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-post-item startup-color">
                                <div className="post-image">
                                    <Link href="/blog-details">
                                        <a className="d-block">
                                            <img src="/images/sectors/retail/shopping_1920.jpg" alt="image" />
                                        </a>
                                    </Link>
                                </div>
                                            
                                <div className="post-content">
                                    <h3>
                                        <Link href="/blog-details">
                                            <a>Retail</a>
                                        </Link>
                                    </h3>

                                    <Link href="/blog-details">
                                        <a className="link-btn">
                                            Learn More <i className="fas fa-chevron-right"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-post-item startup-color">
                                <div className="post-image">
                                    <Link href="/blog-details">
                                        <a className="d-block">
                                            <img src="/images/sectors/selfStorage/Stokado.jpg" alt="image" />
                                        </a>
                                    </Link>
                                </div>
                                            
                                <div className="post-content">
                                    <h3>
                                        <Link href="/blog-details">
                                            <a>Self-storage</a>
                                        </Link>
                                    </h3>

                                    <Link href="/blog-details">
                                        <a className="link-btn">
                                            Learn More <i className="fas fa-chevron-right"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PricingCardStyleOne;