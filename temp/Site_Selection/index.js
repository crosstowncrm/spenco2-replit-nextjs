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
                pageTitle="Site Selection" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Site Selection" 
                BGImage="transparent-bg1" 
            />

            <div className="services-details-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="services-details-desc">
                                <h3>Commercial Property Site Selection Services</h3>
                                <p>The success of a development project, the profitability of a long-term real estate investment, and the success of business operations located on the property all depend on the site selection process. The life cycle of the property is impacted by site selection, which should take into account the real estate's original cost, the total cost of development, the cost of operation, and the contribution of the local, state, and regional communities to the success of the acquisition.</p>
                                <img src="/images/services/services-img15.jpg" alt="image" />
                                <h3>Steps for a Successful Process</h3>
                                <p><strong>1. Initial Project Plan</strong> Spencer Commercial Group will initially engage in a discovery process with your team. Primary considerations will include the budgets for both site acquisition and relocation, financing considerations, and the anticipated schedule.<br />
                                    <strong>2. Site Selection Plan</strong> We will then identify members of the project team, set expectations related to process and budget, and establish a detailed set of criteria on which the search will be based.<br /> 
                                    <strong>3. Site Search</strong> Properties will be extensively search to find potentiall suitable locations. Site tours will be coordinated with the project team. Pertinent data will be distributed to the team, including surveys and site plans.<br />
                                    <strong>4. Evaluation and Comparison</strong> Locations will be narrowed down to the top choices and detailed site evaluations will be conducted. A prioritized list will be objectively developed based on established site criteria.<br />
                                    <strong>5. Acquisition</strong> At this point, an offer will be prepared for the preferred location. Once all parties have come to terms, contracts will be signed and due diligence will begin. Financing will be secured during due diligence and ownership will be finalized at closing.
                                </p>
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