import React from 'react';
import Link from 'next/link';

const OurServices = () => {
    return (
        <>
            <div className="services-area pt-100 pb-70">
                <div className="container">
                    <div className="section-title">
                        <span className="sub-title marketing-color">WHAT WE DO</span>
                        <h2>All The Services That We Provide to Our Clients</h2>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-services-item">
                                <img src="/images/services/self-storage-acquisitions_600.jpg" alt="image" />
                                <div className="content">
                                    <h3>
                                        <Link href="/commercial/services/Acquisitions">
                                            <a>Acquisitions</a>
                                        </Link>
                                    </h3>
                                    <p>Our acquisitions associates will source, analyze, and perform the due diligence on equity investments for our clients.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-services-item">
                                <img src="/images/services/services-img5.jpg" alt="image" />
                                <div className="content">
                                    <h3>
                                        <Link href="/commercial/services/Dispositions">
                                            <a>Dispositions</a>
                                        </Link>
                                    </h3>
                                    <p>SPENCO guides clients through the disposition of real estate opportunities, employing industry-leading expertise together with cutting-edge technological platforms to capitalize on every transaction.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-services-item">
                                <img src="/images/services/services-img6.jpg" alt="image" />
                                <div className="content">
                                    <h3>
                                        <Link href="/commercial/services/Investor_Services">
                                            <a>Investor Services</a>
                                        </Link>
                                    </h3>
                                    <p>We work with both specialized and general portfolios, including self-storage, industrial, office, multifamily and single-family homes.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurServices;