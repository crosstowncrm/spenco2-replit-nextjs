import React from 'react';
import Link from 'next/link';

const CTAArea = () => {
    return (
        <>
            <div className="cta-area ptb-100 jarallax">
                <div className="container">
                    <div className="cta-content">
                        <h2>Perfect For Creators Looking to Build Your Better Business</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                        <Link href="/contact">
                            <a className="default-btn">Contact Us <i className="fas fa-chevron-right"></i></a>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CTAArea;