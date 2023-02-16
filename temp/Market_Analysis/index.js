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
                pageTitle="Market Analysis" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Market Analysis" 
                BGImage="transparent-bg1" 
            />

            <div className="services-details-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="services-details-desc">
                                <h3>Market Analysis for Commercial Properties</h3>
                                <p>Even coming up with a simple definition for the market analysis for commercial property can be difficult at best, as expectations may vary widely based on location and market sector. Taking multifamily for example, factors to be evaluated may include cap rates going into the deal and at exit, rents (including expected growth), occupancy rates, expenses (both current and annual adjustments), and any expected capex for the site.</p>
                                <img src="/images/services/services-img15.jpg" alt="image" />
                                <h3>Major Components of Market Analysis</h3>
                                <p>A list of components to expect from a commercial property market analysis may include the following:</p>
                                <p><strong>1.</strong> Comparable Properties<br />
                                    <strong>2.</strong> Comparable Sales<br /> 
                                    <strong>3.</strong> Rent Trends<br />
                                    <strong>4.</strong> Expense Trends<br />
                                    <strong>5.</strong> Rent Roll and Probabilities of Renewal<br />
                                    <strong>6.</strong> Lease Terms<br />
                                    <strong>7.</strong> Absorption Data<br />
                                    <strong>8.</strong> Demographics and Population Trends<br />
                                    <strong>9.</strong> In-person Assessment
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