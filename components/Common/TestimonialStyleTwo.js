import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation } from "swiper";

const TestimonialStyleTwo = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])

    return (
        <>
            <div className="marketing-testimonials-area pb-100">
                <div className="container">
                    <div className="section-title">
                        <span className="sub-title marketing-color">TESTIMONIALS</span>
                        <h2>What Our Customers Say</h2>
                    </div>

                    <Swiper navigation={true} modules={[Navigation]} className="marketing-testimonials-slides mySwiper owl-carousel owl-theme">
                    <SwiperSlide>  
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="marketing-testimonials-image">
                                    <img src="/images/sectors/selfStorage/Hialeah-Self-Storage.jpg" alt="image" />
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="marketing-testimonials-content">
                                    
                                    <p>“I would like to thank David and Monty for their key roles in completing the successful sale of our 96,000 square-foot self storage facility in Hialeah, Florida.  The TSAG team did a great job of keeping the transaction on track and providing the “grease” needed to reduce friction between seller and buyer when necessary.  The due diligence process was very thorough, you helped provided everything needed while handling any issues that arose.   During the period that the property was under contract, we experienced falling occupancy, as the new management company we had put in place prior to selling made changes in property operations that resulted in higher delinquency and evictions. Despite this significant problem, you kept the deal moving forward and ultimately got it closed with minimal damage.
We look forward to working with you again, should we decide to sell any other properties in our portfolio.”</p>
                                    <div className="info">
                                        <h3>Sandy Stice</h3>
                                        <span>Principal</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="marketing-testimonials-image">
                                    <img src="/images/sectors/selfStorage/Ray-Self-Storage-interior.jpg" alt="image" />
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="marketing-testimonials-content">
                                    
                                    <p>“My experience with David Spencer at The Storage Acquisition Group was much appreciated. He and the entire TSAG team communicated with me throughout the due diligence and closing and, when issues arose, they were professional, responsive, and willing to put in the work to get them resolved. David ensured he was always available to answer questions and keep the transaction moving forward. I received the full asking price for my facility and felt the process was open, honest, and collaborative. Working with David Spencer and The Storage Acquisition Group proved to be a wise choice and I would recommend working with him to anyone considering selling their self storage facility.”</p>
                                    <div className="info">
                                        <h3>Alan Ray</h3>
                                        <span>Partner</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default TestimonialStyleTwo;