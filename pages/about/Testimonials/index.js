import React from 'react';
import NavbarFive from "../../../components/_App/NavbarTwo";
import PageBannerStyleThree from "../../../components/Common/PageBanner/PageBannerStyleThree";
import PartnerStyleThree from '../../../components/Common/PartnerStyleThree';
import FooterFour from '../../../components/_App/Footer';

const OurClients = () => {
    return (
        <>
            <NavbarFive />

            <PageBannerStyleThree 
                pageTitle="Our Clients" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Our Clients" 
                BGImage="bg2" 
            />

            <div className="clients-area pt-100 pb-70 bg-f9f9f9">
                <div className="container">
                    <div className="section-title">
                        <span className="sub-title">CLIENTS</span>
                        <h2>Our Amazing Clients</h2>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                            <div className="single-clients-box">
                                <a href="#" className="d-block" target="_blank">
                                    <img src="/images/partner/partner1.png" alt="image" />
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                            <div className="single-clients-box">
                                <a href="#" className="d-block" target="_blank">
                                    <img src="/images/partner/partner2.png" alt="image" />
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                            <div className="single-clients-box">
                                <a href="#" className="d-block" target="_blank">
                                    <img src="/images/partner/partner3.png" alt="image" />
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                            <div className="single-clients-box">
                                <a href="#" className="d-block" target="_blank">
                                    <img src="/images/partner/partner4.png" alt="image" />
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                            <div className="single-clients-box">
                                <a href="#" className="d-block" target="_blank">
                                    <img src="/images/partner/partner5.png" alt="image" />
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                            <div className="single-clients-box">
                                <a href="#" className="d-block" target="_blank">
                                    <img src="/images/partner/partner6.png" alt="image" />
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                            <div className="single-clients-box">
                                <a href="#" className="d-block" target="_blank">
                                    <img src="/images/partner/partner1.png" alt="image" />
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                            <div className="single-clients-box">
                                <a href="#" className="d-block" target="_blank">
                                    <img src="/images/partner/partner2.png" alt="image" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <PartnerStyleThree />
  
            <FooterFour />
        </>
    )
}

export default OurClients;