import React from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    items: 1,
    nav: true,
    loop: true,
    margin: 30,
    dots: false,
    autoplay: true,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    autoplayHoverPause: true,
    navText: [
        "<i class='flaticon-left-arrow'></i>",
        "<i class='flaticon-right-arrow'></i>"
    ]
};

const TestimonialStyleOne = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])

    return (
        <>
            <div className="startup-testimonials-area pb-100">
                <div className="container-fluid">
                    <div className="bg-f9f4f0">
                        {display ? <OwlCarousel 
                            className="startup-testimonials-slides owl-carousel owl-theme"
                            {...options}
                        >  
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-12">
                                    <div className="startup-testimonials-image">
                                        <img src="/images/testimonials/testimonials-img1.jpg" className="main-image" alt="image" />
                                        
                                        {/* Shape Images */}
                                        <div className="shape7">
                                            <img src="/images/shape/shape7.png" alt="image" />
                                        </div>
                                        <div className="shape8">
                                            <img src="/images/shape/shape8.png" alt="image" />
                                        </div>
                                        <div className="shape9">
                                            <img src="/images/shape/shape9.png" alt="image" />
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-12">
                                    <div className="startup-testimonials-content">
                                        <i className="icon flaticon-quotation"></i>
                                        <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus com modo viverra maecenas accumsan lacus vel facilisis.”</p>
                                        <div className="info">
                                            <h3>Richard Turner</h3>
                                            <span>Director</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-12">
                                    <div className="startup-testimonials-image">
                                        <img src="/images/testimonials/testimonials-img2.jpg" className="main-image" alt="image" />
                                        
                                        {/* Shape Images */}
                                        <div className="shape7">
                                            <img src="/images/shape/shape7.png" alt="image" />
                                        </div>
                                        <div className="shape8">
                                            <img src="/images/shape/shape8.png" alt="image" />
                                        </div>
                                        <div className="shape9">
                                            <img src="/images/shape/shape9.png" alt="image" />
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-12">
                                    <div className="startup-testimonials-content">
                                        <i className="icon flaticon-quotation"></i>
                                        <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus com modo viverra maecenas accumsan lacus vel facilisis.”</p>
                                        <div className="info">
                                            <h3>Sarah Taylor</h3>
                                            <span>CEO & Founder</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </OwlCarousel> : ''}
                    </div>
                </div>
            </div>
        </>
    )
}

export default TestimonialStyleOne;