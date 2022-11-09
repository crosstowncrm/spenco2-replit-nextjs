import React from 'react';
import NavbarFour from "../../components/_App/NavbarFour";
import PageBannerStyleThree from "../../components/Common/PageBanner/PageBannerStyleThree";
import FooterThree from '../../components/_App/FooterThree';
import GoogleMap from '../../components/Contact/GoogleMap'; 
import ContactInfoStyleTwo from '../../components/Contact/ContactInfoStyleTwo';
import ContactFormStyleTwo from '../../components/Contact/ContactFormStyleTwo';

const Contact2 = () => {
    return (
        <>
            <NavbarFour />

            <PageBannerStyleThree 
                pageTitle="Contact Us" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Contact Us" 
                BGImage="bg1" 
            />

            <ContactInfoStyleTwo />

            <ContactFormStyleTwo />

            <GoogleMap />
      
            <FooterThree />
        </>
    )
}

export default Contact2;