import React from 'react';
import NavbarFour from "../../../components/_App/NavbarFour";
import PageBannerStyleThree from "../../../components/Common/PageBanner/PageBannerStyleThree";
import Link from 'next/link';
import FooterThree from '../../../components/_App/FooterThree';

const Services2 = () => {
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
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-services-item">
                                <img src="/images/services/services-img4.jpg" alt="image" />
                                <div className="content">
                                    <h3>
                                        <Link href="/services-details">
                                            <a>Digital Marketing</a>
                                        </Link>
                                    </h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur elit adipiscing labore et dolore magna aliqua.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-services-item">
                                <img src="/images/services/services-img5.jpg" alt="image" />
                                <div className="content">
                                    <h3>
                                        <Link href="/services-details">
                                            <a>Strategy & Planning</a>
                                        </Link>
                                    </h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur elit adipiscing labore et dolore magna aliqua.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-services-item">
                                <img src="/images/services/services-img6.jpg" alt="image" />
                                <div className="content">
                                    <h3>
                                        <Link href="/services-details">
                                            <a>Search Engine Optimization</a>
                                        </Link>
                                    </h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur elit adipiscing labore et dolore magna aliqua.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-services-item">
                                <img src="/images/services/services-img1.jpg" alt="image" />
                                <div className="content">
                                    <h3>
                                        <Link href="/services-details">
                                            <a>Start Up Advisory Solutions</a>
                                        </Link>
                                    </h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur elit adipiscing labore et dolore magna aliqua.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-services-item">
                                <img src="/images/services/services-img2.jpg" alt="image" />
                                <div className="content">
                                    <h3>
                                        <Link href="/services-details">
                                            <a>Business Incorporation</a>
                                        </Link>
                                    </h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur elit adipiscing labore et dolore magna aliqua.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-services-item">
                                <img src="/images/services/services-img3.jpg" alt="image" />
                                <div className="content">
                                    <h3>
                                        <Link href="/services-details">
                                            <a>Consulting Services</a>
                                        </Link>
                                    </h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur elit adipiscing labore et dolore magna aliqua.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="pagination-area text-center">
                                <a href="#" className="next page-numbers">
                                    <i className="fas fa-chevron-left"></i>
                                </a>
                                <a href="#" className="page-numbers current">1</a>
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
            </div>
  
            <FooterThree />
        </>
    )
}

export default Services2;