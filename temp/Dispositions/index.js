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
                pageTitle="CRE Dispositions" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Dispositions" 
                BGImage="transparent-bg1" 
            />

            <div className="services-details-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="services-details-desc">
                                <h3>Investment Sales Services</h3>
                                <p>The team at Spencer Commercial Group provides significant expertise in the valuation and sale of office, industrial, flex, retail, land, and other types commercial real estate assets. We combine local knowledge and a deep understanding of capital markets with the most recent market data accessible through eXp Commercial&#39;s comprehensive platform.</p>
                                <img src="/images/services/services-img15.jpg" alt="image" />
                                <h3>Sale Process</h3>
                                <p>Selling commercial real estate is inherently different than selling residential property.  Buyers of commercial property generally consider the transaction through the lens of recurring income, future gains, or both. Although the process is generally less driven by emotions than residential transactions, assets in highly sought markets and sectors may generate significant buyer interest, possibly even leading to a bidding war.</p>
                                <p>The individuals and companies purchasing commercial assets are generally expecting a more sophisticated and business-like process. A professional marketing package focused on relevant data is essential to presenting a property in the best possible light. The following steps should be expected:</p>
                                <p><strong>1. Goal Analysis</strong> The agent will engage proactively with the seller&#39;s team, working through a series of questions aimed at structuring a listing and transaction in the best interests of the client and ensuring the greatest likelihood of reaching a successful closing.<br />
                                    <strong>2. Asset Valuation</strong> While locating sales comparables may be part of the appraisal process, the main concern of commercial real estate investors is the income the building produces or the future value of the asset. A commercial building&#39;s worth is directly proportional to its income, and it is calculated by multiplying net operating income by the cap rate, as determined by market, sector, and asset quality. <br /> 
                                    <strong>3. Marketing Collateral</strong> The next stage is development of a polished marketing package that shines the best possible light on the asset. By providing all the information to potential investors at once rather than in pieces, the decision-making process can be accelerated. <br />
                                    <strong>4. Qualify Potential Buyers</strong> We take client properties directly to our database of qualified buyers. The property will also be marketed across the nation, not just to buyers but to agents specializing in the relevant market or sector. Potential buyers are interviewed to ensure that they are qualified and interested in carrying the transaction to closing. SPENCO presents the property to qualified buyers, making every effort to accurately portray location, terms, and potential so that the value is evident to all parties.<br />
                                    <strong>5. Confidentiality Agreement</strong> In cases where the owner may want to maintain the privacy of transaction and/or operational data, a Confidentiality Agreement, or Non-Disclosure Agreement, will be required for all interested parties. A well-crafted NDA should help protect the interests of the seller in the case of future litigation.<br />
                                    <strong>6. Offer Process</strong> At this stage, the potential buyer should have complete access to marketing collateral. Site visits can be coordinated as necessary. In some cases, a meeting between  seller and buyer may be advantageous for moving the project forward. This will be coordinated by the listing agent either through the buyer&#39;s agent or directly with the buyer when they are not represented by anther agent. The buyer will work with the broker to create an offer, which may include the following: purchase price, terms, earnest money, due diligence, contingencies, etc. All offers will be presented to the seller.<br />
                                    <strong>7. Due Diligence</strong> Once all parties agree to terms and sign a contract, the due diligence process will be initiated. To the extent practicable, tenants should remain unaware of the building&#39;s status until the purchase is finalized. Third-party inspectors will  need to inspect the property. Spencer Commercial group seeks to be  a valuable asset for the buyer conduit for information during this procedure, which raises the possibility that the transaction will reach a successful conclusion.<br />
                                    <strong>8. Closing</strong> The goal of all parties in the transaction should be an organized, pleasant, and smooth closing process.<br />
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