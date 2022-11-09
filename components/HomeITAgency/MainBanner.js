import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const ModalVideo = dynamic(() => import('react-modal-video'), {
    ssr: false
});

const MainBanner = () => {

    return (
        <>
            <div className="it-agency-banner-area">
                <div className="it-agency-inner-banner jarallax">
                    <div className="container">
                        <div className="it-agency-banner-content">
                            <span className="sub-title">COMMERCIAL REAL ESTATE</span>
                            <h1>Local. Everywhere.</h1>
                            <p>We are a commercial real estate firm bringing buildings and brands to life. We make a difference in our communities applying our vision, values and connections to populate the landscape on behalf of our clients. We implement innovative marketing strategies that are often unexpected, yet effective.</p>

                            <Link href="/contact-2">
                                <a className="default-btn it-agency-color">
                                    Get Started <i className="fas fa-chevron-right"></i>
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="divider"></div>
                </div>

            </div>
        </>
    )
}

export default MainBanner;