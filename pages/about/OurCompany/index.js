import React from 'react';
import Navbar from "../../../components/_App/NavbarTwo";
import PageBannerStyleOne from "../../../components/Common/PageBanner/PageBannerStyleOne";
import ServicesSidebar from '../../../components/Services/ServicesSidebar';
import Footer from '../../../components/_App/Footer';

const ServicesDetails = () => {
    return (
        <>
            <Navbar />

            <PageBannerStyleOne 
                pageTitle="About Spencer Commercial Group" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Our Company" 
                BGImage="transparent-bg1" 
            />

            <div className="services-details-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="services-details-desc">
                                <h3>Experience</h3>
                                <p>We apply creative solutions to real estate challenges. Time is always of the essence in the commercial real estate world, so you can’t afford to miss an opportunity. SPENCO positions itself at the heart of where you want to be, allowing you to capitalize on opportunities other companies miss. Our experts stand ready to help analyze every potential investment, identifying risks factors and ensuring that you maximize the likelihood of long-term positive returns.</p>
                                <img src="/images/services/services-img15.jpg" alt="image" />
                                <h3>Approach</h3>
                                <p>SPENCO is bringing a different mindset to meeting the requirements of commercial and residential investors. From our inception, SPENCO is casting aside the traditional thinking that has reinforced the status quo in the industry. We are an organization designed around a virtual platform, which allows our team members to situate themselves throughout our footprint, encouraging collaboration and time in the field.</p>
                                <h3>Marketing</h3>
                                <p>SPENCO is embracing the new world order of marketing. Real estate marketing, particularly on the commercial side, hasn’t always responded nimbly as the world has changed around it. We’re working directly with the companies leading change in the industry, while developing proprietary back end systems that will enable us to leverage these platforms for the mutual benefit of SPENCO and our clients.</p>
                                <h3>Consultation</h3>
                                <p>Schedule a consultation with one of our team members to discuss your commercial real estate project in more detail. We will take the time to learn about your business requirements and investment goals so we can tailor a solution that helps you meet these objectives efficiently and cost-effectively.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-12">
                            <ServicesSidebar />
                        </div>
                    </div>
                </div>
            </div>
 
            <Footer />
        </>
    )
}

export default ServicesDetails;