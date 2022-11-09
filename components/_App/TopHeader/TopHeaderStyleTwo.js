import React from 'react';

const TopHeaderStyleTwo = () => {
    return (
        <>
            <div className="top-header-area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-4">
                            <ul className="top-header-social-links">
                                <li><a href="https://www.facebook.com/" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
                                <li><a href="https://www.instagram.com/" target="_blank"><i className="fab fa-instagram"></i></a></li>
                                <li><a href="https://twitter.com/" target="_blank"><i className="fab fa-twitter"></i></a></li>
                                <li><a href="https://www.linkedin.com/" target="_blank"><i className="fab fa-linkedin-in"></i></a></li>
                            </ul>
                        </div>

                        <div className="col-lg-7 col-md-8">
                            <div className="top-header-contact-info text-end">
                                <a href="mailto:hello@gbay.com" className="email">
                                    <i className="far fa-envelope"></i> hello@gbay.com
                                </a>
                                <a href="tel:+44-45789-5789" className="number">
                                    <i className="fas fa-phone-alt"></i> 
                                    (+44) - 45789 - 5789
                                </a>
                                <div className="lang-switcher">
                                    <label><i className="fas fa-globe"></i></label>
                                    <select>
                                        <option>English</option>
                                        <option>Spanish</option>
                                        <option>Russian</option>
                                        <option>French</option>
                                        <option>Arabic</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TopHeaderStyleTwo;