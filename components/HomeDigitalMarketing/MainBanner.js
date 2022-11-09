import React from 'react';
import Link from 'next/link';

const MainBanner = () => {
    return (
        <>
            <div className="marketing-banner-area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="marketing-banner-content">
                                <span className="sub-title">COMMERCIAL REAL ESTATE</span>
                                <h1>Local. Everywhere.</h1>
                                <p>We are a commercial real estate firm bringing buildings and brands to life. We make a difference in our communities applying our vision, values and connections to populate the landscape on behalf of our clients. We implement innovative marketing strategies that are often unexpected, yet effective.</p>

                                <Link href="/contact">
                                    <a className="default-btn marketing-color">
                                        Contact Us <i className="fas fa-chevron-right"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="marketing-banner-image">
                                <img src="/images/city-street-at-sunrise.jpg" alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="shape10">
                    <img src="/images/shape/shape10.png" alt="image" />
                </div>
            </div>
        </>
    )
}

export default MainBanner;