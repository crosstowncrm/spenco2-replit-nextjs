import React from 'react';
import Navbar from "../../../../components/_App/NavbarTwo";
import PageBannerStyleOne from "../../../../components/Common/PageBanner/PageBannerStyleOne";
import ServicesSidebar from '../../../../components/Services/ServicesSidebar';
import Footer from '../../../../components/_App/Footer';

const ServicesDetails = () => {
    return (
        <>
            <Navbar />

            <PageBannerStyleOne 
                pageTitle="Investor Services" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Investor Services" 
                BGImage="transparent-bg1" 
            />

            <div className="services-details-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="services-details-desc">
                                <h3>Commercial Real Estate Investments</h3>
                                <p>We take the time to completely understand and comprehend your business requirements, whether you are purchasing a property as an investment or are seeking for a more suitable property for your company&#39;s use. The requirements for site selection and occupancy vary by company. The property&#39;s price, location, intended uses, and required investment must all dovetail to ensure that capital is being put towards the most productive use. As a consequence, we only present you with investment opportunities that are actually a suitable fit.</p>
                                <img src="/images/services/services-img15.jpg" alt="image" />
                                <p>We work with you to evaluate your company goals, taking into account things like your financial situation, whether you plan to rent the space after you buy it, similar transactions and the availability of comparable assets in the market. In order to help you decide whether the market represents a suitable investment opportunity, we also assist you in evaluating commercial real markets and submarkets by offering information on comparable properties and emerging trends.</p>
                                <p>At Spencer Commercial Group, we are able to address your investment needs by leveraging the fastest growing international network of agents in the world. Our broad expertise in a variety of disciplines offers us an advantage when doing the due diligence needed to produce sound financial decisions. We help break down important economic concepts like Loan-to-Value (LTV), Cash on Cash, and Vacancy Rate, for instance, and can respond to your inquiries as often as necessary.</p>
                                
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