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
    autoplayHoverPause: true,
    navText: [
        "<i class='flaticon-left-arrow'></i>",
        "<i class='flaticon-right-arrow'></i>"
    ]
};

const TestimonialStyleFour = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])

    return (
        <>
            <div className="testimonials-area ptb-100">
                <div className="container">
                    <div className="testimonials-inner ptb-100 bg-app-image">
                        {display ? <OwlCarousel 
                            className="testimonials-slides owl-carousel owl-theme"
                            {...options}
                        >
                            <div className="testimonials-item">
                                <i className="icon flaticon-quotation"></i>
                                <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Qui ipsum suspendisse ultrices gravida. Risus com modo viverra maecenas accumsan lacus vel facilisis.”</p>
                                <div className="info d-flex align-items-center justify-content-center">
                                    <img src="/images/user/user1.jpg" alt="image" />
                                    <div className="title">
                                        <h3>Allan Morris</h3>
                                        <span>Director</span>
                                    </div>
                                </div>
                            </div>
        
                            <div className="testimonials-item">
                                <i className="icon flaticon-quotation"></i>
                                <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Qui ipsum suspendisse ultrices gravida. Risus com modo viverra maecenas accumsan lacus vel facilisis.”</p>
                                <div className="info d-flex align-items-center justify-content-center">
                                    <img src="/images/user/user2.jpg" alt="image" />
                                    <div className="title">
                                        <h3>Sarah Taylor</h3>
                                        <span>CEO</span>
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

export default TestimonialStyleFour;