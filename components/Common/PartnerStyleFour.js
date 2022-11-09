import React from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

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

const PartnerStyleFour = () => {

    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])
    
    return (
        <>
            <div className="partner-area bg-1b2232 ptb-70">
                <div className="container">
                    {display ? <OwlCarousel 
                        className="partner-slides owl-carousel owl-theme"
                        {...options}
                    > 
                        <div className="partner-item">
                            <a href="#" className="d-inline-block" target="_blank">
                                <img src="/images/partner/partner-white1.png" alt="image" />
                            </a>
                        </div>

                        <div className="partner-item">
                            <a href="#" className="d-inline-block" target="_blank">
                                <img src="/images/partner/partner-white2.png" alt="image" />
                            </a>
                        </div>

                        <div className="partner-item">
                            <a href="#" className="d-inline-block" target="_blank">
                                <img src="/images/partner/partner-white3.png" alt="image" />
                            </a>
                        </div>

                        <div className="partner-item">
                            <a href="#" className="d-inline-block" target="_blank">
                                <img src="/images/partner/partner-white4.png" alt="image" />
                            </a>
                        </div>

                        <div className="partner-item">
                            <a href="#" className="d-inline-block" target="_blank">
                                <img src="/images/partner/partner-white5.png" alt="image" />
                            </a>
                        </div>

                        <div className="partner-item">
                            <a href="#" className="d-inline-block" target="_blank">
                                <img src="/images/partner/partner-white6.png" alt="image" />
                            </a>
                        </div>
                    </OwlCarousel> : ''}
                </div>
            </div>
        </>
    )
}

export default PartnerStyleFour;