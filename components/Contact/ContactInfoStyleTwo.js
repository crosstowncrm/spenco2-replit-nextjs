import React from 'react';

const ContactInfoStyleTwo = () => {
    return (
        <>
            <div className="contact-area pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="single-contact-info-box text-center">
                                <div className="icon">
                                    <i className='fas fa-map-marker-alt'></i>
                                </div>
                                <h3>Address</h3>
                                <p><a href="#" target="_blank">246 W Willow St, Syracuse, NY 13202, United States</a></p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="single-contact-info-box text-center">
                                <div className="icon">
                                    <i className='fas fa-phone-volume'></i>
                                </div>
                                <h3>Phone</h3>
                                <p><a href="tel:+44587154756">Phone: +44 587 154756</a></p>
                                <p><a href="tel:+55587154756">Fax: +55 587 154756</a></p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="single-contact-info-box text-center">
                                <div className="icon">
                                    <i className='far fa-envelope'></i>
                                </div>
                                <h3>Email</h3>
                                <p><a href="mailto:hello@gbay.com">hello@gbay.com</a></p>
                                <p><a href="mailto:gbay@hello.com">gbay@hello.com</a></p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="single-contact-info-box text-center">
                                <div className="icon">
                                    <i className='fas fa-hourglass-half'></i>
                                </div>
                                <h3>Working Hours</h3>
                                <p>Sunday - Friday</p>
                                <p>8:00AM - 8:00PM</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactInfoStyleTwo;