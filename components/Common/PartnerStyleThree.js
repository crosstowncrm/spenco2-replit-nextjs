import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation } from "swiper";

const options = {
    nav: false,
    loop: true,
    margin: 30,
    dots: false,
    autoplay: true,
    autoplayHoverPause: true,
    navText: [
        "<i class='flaticon-left-arrow'></i>",
        "<i class='flaticon-right-arrow'></i>"
    ],
    responsive: {
        0: {
            items: 2
        },
        576: {
            items: 3
        },
        768: {
            items: 4
        },
        992: {
            items: 5
        },
        1200: {
            items: 6
        }
    }
};

const PartnerStyleThree = () => {

    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])
    
    return (
        <>
            <div className="partner-area bg-1b2232 ptb-100">
                <div className="container">
                    <div className="section-title">
                        <span className="sub-title">OUR TRUSTED CLIENTS</span>
                        <h2>Trusted by 50k Clients</h2>
                    </div>

                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        slidesPerGroup={3}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        loopFillGroupWithBlank={true}
                        pagination={{
                            clickable: true,
                        }}
                    navigation={true}
                    modules={[Navigation]}
                    className="partner-slides mySwiper owl-carousel owl-theme"
                >
                        <SwiperSlide>
                        <div className="partner-item">
                            <a href="#" className="d-inline-block" target="_blank">
                                <img src="/images/partner/partner-white1.png" alt="image" />
                            </a>
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="partner-item">
                            <a href="#" className="d-inline-block" target="_blank">
                                <img src="/images/partner/partner-white2.png" alt="image" />
                            </a>
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="partner-item">
                            <a href="#" className="d-inline-block" target="_blank">
                                <img src="/images/partner/partner-white3.png" alt="image" />
                            </a>
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="partner-item">
                            <a href="#" className="d-inline-block" target="_blank">
                                <img src="/images/partner/partner-white4.png" alt="image" />
                            </a>
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="partner-item">
                            <a href="#" className="d-inline-block" target="_blank">
                                <img src="/images/partner/partner-white5.png" alt="image" />
                            </a>
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="partner-item">
                            <a href="#" className="d-inline-block" target="_blank">
                                <img src="/images/partner/partner-white6.png" alt="image" />
                            </a>
                        </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default PartnerStyleThree;