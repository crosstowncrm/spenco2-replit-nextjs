import React from 'react';
import Link from 'next/link';

const AboutContent = () => {
    return (
        <>
            <div className="marketing-about-area pb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="marketing-about-image">
                                <img src="/images/people/office-lobby.jpg" alt="image" />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="marketing-about-content">
                                <span className="sub-title">ABOUT SPENCO</span>
                                <h2>The Leading Edge of Commercial Real Estate</h2>
                                <p>Spencer Commercial Group uses experience and technology to achieve extraordinary results for commercial property investors.</p>
                                <p>We focus on the long-term returns of your commercial investments. Whether you are leasing warehouses, renting office space, investing in multifamily opportunities, or selling land for development, we have the expertise to help you succeed.</p>
                                
                                <Link href="/about-classic">
                                    <a className="default-btn marketing-color">
                                        Learn More <i className="fas fa-chevron-right"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutContent;