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

const Partner = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])

    return (
        <>
            <div className="partner-area ptb-100">
                <div className="container">
                    {display ? <OwlCarousel 
                        className="partner-slides owl-carousel owl-theme"
                        {...options}
                    > 
                        <div className="partner-item">
                            <a href="#" className="d-inline-block" target="_blank">
                                <img src="/images/partner/buildout.webp" alt="image" />
                            </a>
                        </div>

                        <div className="partner-item">
                            <a href="#" className="d-inline-block" target="_blank">
                                <img src="/images/partner/eXpDataServices_Color.png" alt="image" />
                            </a>
                        </div>

                        <div className="partner-item">
                            <a href="#" className="d-inline-block" target="_blank">
                                <img src="/images/partner/expressofferscolor.webp" alt="image" />
                            </a>
                        </div>

                        <div className="partner-item">
                            <a href="#" className="d-inline-block" target="_blank">
                                <img src="/images/partner/Reonomy_Logo_Logo.jpg" alt="image" />
                            </a>
                        </div>

                        <div className="partner-item">
                            <a href="#" className="d-inline-block" target="_blank">
                                <img src="/images/partner/radius-logo.svg" alt="image" />
                            </a>
                        </div>

                        <div className="partner-item">
                            <a href="#" className="d-inline-block" target="_blank">
                                <img src="/images/partner/eXpCommerical.png" alt="image" />
                            </a>
                        </div>

                        <div className="partner-item">
                            <a href="#" className="d-inline-block" target="_blank">
                                <img src="/images/partner/yardi-matrix.webp" alt="image" />
                            </a>
                        </div>
                    </OwlCarousel> : ''}
                </div>
            </div>
        </>
    )
}

export default Partner;