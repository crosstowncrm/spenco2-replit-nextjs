import React from 'react';
import Link from 'next/link';

const Footer = () => {

    const currentYear = new Date().getFullYear();
    
    return (
        <>
            <footer className="footer-area bg-faf7f2">
                <div className="container">
                    <div className="footer-top">
                        <div className="row align-items-center justify-content-between">
                            <div className="col-xl-6 col-lg-4 col-md-12">
                                <Link href="/">
                                    <a className="logo">
                                        <img src="/images/logo-black.png" alt="image" />
                                    </a>
                                </Link>
                            </div>

                            <div className="col-xl-6 col-lg-8 col-md-12">
                                <div className="content d-flex justify-content-between align-items-center">
                                    <h3>Bring Your Project To Startup Today</h3>

                                    <Link href="/contact">
                                        <a className="default-btn">Contact Us <i className="fas fa-chevron-right"></i></a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <h3>Contact Details</h3>

                                <ul className="footer-contact">
                                    <li><i className="fas fa-map-marker-alt"></i> 162 5th Ave, New York, NY 1010, United States</li>
                                    <li><i className="far fa-envelope"></i> <a href="mailto:hello@gbay.com">hello@gbay.com</a></li>
                                    <li><i className="fas fa-phone-volume"></i> <a href="tel:+44457895789">(+44) - 45789 - 5789</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-footer-widget pl-4">
                                <h3>Useful Links</h3>

                                <ul className="info-links">
                                    <li>
                                        <Link href="/">
                                            <a>Home</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/about-simple">
                                            <a>About</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/services">
                                            <a>Services</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/contact">
                                            <a>Contact Us</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <h3>Company</h3>

                                <ul className="info-links">
                                    <li>
                                        <Link href="/faq">
                                            <a>FAQ</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/blog">
                                            <a>News</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/privacy-policy">
                                            <a>Privacy Policy</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/terms-conditions">
                                            <a>Terms & Conditions</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <h3>Subscribe</h3>
                                <p>Subscribe to receive latest news and freebies</p>
                                
                                <form className="newsletter-form">
                                    <input type="email" className="input-newsletter" placeholder="Enter your email" name="EMAIL" required />
                                    <button type="submit">
                                        <i className="far fa-paper-plane"></i>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="copyright-area">
                    <div className="container">
                        <p>Copyright &copy; {currentYear} Gbay is Proudly Crafted by <a href="https://envytheme.com/" target="_blank">EnvyTheme</a></p>
                    </div>
                </div>
            </footer>
        </>
    )
     
}

export default Footer; 