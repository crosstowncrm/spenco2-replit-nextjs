import React from 'react';
import Link from 'next/link';

const MarketingProcess = () => {
    return (
        <>
            <div className="process-area pb-70">
                <div className="container">
                    <div className="section-title">
                        <span className="sub-title marketing-color">The Measured Approach</span>
                        <h2>Productivity-driven Marketing Process</h2>
                    </div>
                    
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-process-box">
                                <img src="/images/process/computer_640_292.jpg" alt="image" />
                                <h3>Technology</h3>
                                <p>Spencer Commercial is focused on maximizing client value through integration of best-in-class technology.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-process-box">
                                <img src="/images/process/network.jpg" alt="image" />
                                <h3>Network</h3>
                                <p>We drive value through industry-specific associations and our network of eXp Commercial agents.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-process-box">
                                <img src="/images/city/city-street_640.jpg" alt="image" />
                                <h3>Local Knowledge</h3>
                                <p>There is no substitute for having boots on the ground in the places you want to be.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MarketingProcess;