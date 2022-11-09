import React from 'react';
import Link from 'next/link';

const PricingCardStyleThree = () => {
    return (
        <>
            <div className="pricing-area bg-f9f9f9 pt-100 pb-70">
                <div className="container">
                    <div className="section-title">
                        <span className="sub-title">OUR PRICING</span>
                        <h2>Simple Pricing Plan</h2>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="pricing-item startup-color">
                                <div className="pricing-header">
                                    <h3>Basic Plan</h3>
                                    <span className="price">$29<span>/year</span></span>
                                </div>
                                <ul className="features-list">
                                    <li>Increase Traffic 100%</li>
                                    <li>Content Optimization</li>
                                    <li>24x7 Great Support</li>
                                    <li className="unactive">100% Safe & Secure</li>
                                    <li className="unactive">No Hidden Charges</li>
                                </ul>
                                <Link href="#">
                                    <a className="default-btn">
                                        Choose Plan <i className="fas fa-chevron-right"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="pricing-item startup-color active">
                                <div className="ribbon"><span>Popular</span></div>
                                <div className="pricing-header">
                                    <h3>Ultra Plan</h3>
                                    <span className="price">$39<span>/year</span></span>
                                </div>
                                <ul className="features-list">
                                    <li>Increase Traffic 100%</li>
                                    <li>Content Optimization</li>
                                    <li>24x7 Great Support</li>
                                    <li>100% Safe & Secure</li>
                                    <li className="unactive">No Hidden Charges</li>
                                </ul>
                                <Link href="#">
                                    <a className="default-btn">
                                        Choose Plan <i className="fas fa-chevron-right"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="pricing-item startup-color">
                                <div className="pricing-header">
                                    <h3>Enterprise Plan</h3>
                                    <span className="price">$49<span>/year</span></span>
                                </div>
                                <ul className="features-list">
                                    <li>Increase Traffic 100%</li>
                                    <li>Content Optimization</li>
                                    <li>24x7 Great Support</li>
                                    <li>100% Safe & Secure</li>
                                    <li>No Hidden Charges</li>
                                </ul>
                                <Link href="#">
                                    <a className="default-btn">
                                        Choose Plan <i className="fas fa-chevron-right"></i>
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

export default PricingCardStyleThree;