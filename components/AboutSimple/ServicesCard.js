import React from 'react';
import Link from 'next/link';

const ServicesCard = () => {
    return (
        <>
            <div className="services-area pb-70">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-process-box">
                                <img src="/images/process/process1.png" alt="image" />
                                <h3>
                                    <Link href="/services-details">
                                        <a>Marketing Plan</a>
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-process-box">
                                <img src="/images/process/process2.png" alt="image" />
                                <h3>
                                    <Link href="/services-details">
                                        <a>Marketing Execution</a>
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-process-box">
                                <img src="/images/process/process3.png" alt="image" />
                                <h3>
                                    <Link href="/services-details">
                                        <a>Growth & Scale</a>
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServicesCard;