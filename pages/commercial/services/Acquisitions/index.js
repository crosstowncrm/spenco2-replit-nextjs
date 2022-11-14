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
                pageTitle="Acquisitions" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Acquisitions" 
                BGImage="transparent-bg1" 
            />

            <div className="services-details-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="services-details-desc">
                                <h3>Commercial Real Estate Buyer/Tenant Representation</h3>
                                <p>When you are looking to put investment funds to work or buying/leasing a new building for your company&#39;s operations, we can assist you in gathering all the necessary information so that you can make an informed decision. We can help you analyze your real estate business goals and space needs to come up with the best overall business solution as part of our buyer and tenant services. Our team is composed of  seasoned professionals with a thorough understanding of markets and sectors. We draw upon this expertise when negotiating lease terms or purchase and sale agreements. Our company is ready to help you  find the industrial, office, land, or retail space that will help you meet your short and long-term business objectives.</p>
                                <img src="/images/services/services-img15.jpg" alt="image" />
                                <h3>The Buying Process for Commercial Real Estate</h3>
                                <p>No two transactions are the same, but Spencer Commercial Group works through a detailed process with each buyer we represent.</p>
                                <p>
                                    <strong>1. Determine Requirements</strong> Whether purchasing a commercial property as an investment or to support the operational needs of a business, it is critical to work through a discovery process with your agent to outline your needs and set the parameters for success. What is your budget? How much space is required? What are the geographic preferences and limitations? Are there any special features of particular interest? The point is to drill down the search for the right property, so we can make the best use of your time.<br />
                                    <strong>2. Identify Potential Properties</strong> Next, we will seek to identify properties that best fit your requirements. As a commercial real estate professional, your agent may use their knowledge of the local market to begin suggesting properties further supported by online databases and agent relationships.  This can be a complicated process, filtering the data from both public and proprietary databases.<br />
                                    <strong>3. View Properties</strong> Once a suitable property is located, the next step is going to the property for a formal showing. Your agent will get in touch with the listing agent to coordinate a showing. This will likely involve the buyer, buyer&#39;s agent, and the seller&#39;s agent.<br />
                                    <strong>4. Negotiate Purchase and Sale Agreement</strong> Preparing an offer is now necessary. Your agent can assist with recommendations regarding price, deposit, contingencies, or elaborating on other elements appropriate for the particular market or sector. Preparing  an offer has many legal considerations, so it is strongly recommended that an attorney be consulted before submitting it to the seller. Typically, the seller&#39;s lawyer will draft a purchase and sale agreement that clearly outlines the conditions of an offer based on the terms agreed to by buyer and seller. This should serve to protect the interest of all parties, nevertheless buyers should have the document reviewed by their own attorney.<br />
                                    <strong>5. Due Diligence</strong> The due diligence phase will start as soon as the purchase and sale agreement is signed and approved. The length of this period can range widely, depending on the conditions agreed to by buyer and seller. During this period  the buyer and their third-party inspectors perform comprehensive inspections of the property. According to the rules of the purchase and sale agreement, the buyer may be able to withdraw their offer if any unfavorable conditions are discovered. Likewise, some conditions may provide the opportunity for a seller to &#34;cure&#34; an exception.  The buyer has time throughout the due diligence process to secure funding for the purchase. <br />
                                    <strong>6. Closing</strong> The final step is the closing. This will often take place at the office of the buyer&#39;s lawyer or escrow agent. Frequently, the seller&#39;s lawyer will be present at the closing to execute the paperwork alongside your lawyer. Both  buyer and seller may frequently elect to pre-sign the paperwork or conduct the closing remotely, so no presence is required at the closing. tilities can be transferred to the purchasing entity once the transaction is complete. The seller will then, literally or figuratively, hand over the keys to your new commercial property.
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