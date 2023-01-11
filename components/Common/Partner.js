import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation } from "swiper";

const Partner = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])

    return (
        <>
            <div className="partner-area ptb-100">
                <div className="container">
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
                                <img src="/images/partner/buildout.webp" alt="image" />
                            </a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="partner-item">
                            <a href="#" className="d-inline-block" target="_blank">
                                <img src="/images/partner/eXpDataServices_Color.png" alt="image" />
                            </a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="partner-item">
                            <a href="#" className="d-inline-block" target="_blank">
                                <img src="/images/partner/expressofferscolor.webp" alt="image" />
                            </a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="partner-item">
                            <a href="#" className="d-inline-block" target="_blank">
                                <img src="/images/partner/Reonomy_Logo_Logo.jpg" alt="image" />
                            </a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="partner-item">
                            <a href="#" className="d-inline-block" target="_blank">
                                <img src="/images/partner/radius-logo.svg" alt="image" />
                            </a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="partner-item">
                            <a href="#" className="d-inline-block" target="_blank">
                                <img src="/images/partner/eXpCommerical.png" alt="image" />
                            </a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="partner-item">
                            <a href="#" className="d-inline-block" target="_blank">
                                <img src="/images/partner/yardi-matrix.webp" alt="image" />
                            </a>
                        </div>
                    </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default Partner;