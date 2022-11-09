import React from 'react';
import dynamic from 'next/dynamic';
const ModalVideo = dynamic(() => import('react-modal-video'), {
    ssr: false
});

const AboutContent = () => {
    // Popup Video
	const [isOpen, setIsOpen] = React.useState(true);
    const openModal = () => {
        setIsOpen(!isOpen);
    }
    return (
        <>
            <div className="startup-about-area ptb-100">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="startup-about-image">
                                <img src="/images/about/about-img1.jpg" alt="image" />
 
                                <div
                                    onClick={e => {e.preventDefault(); openModal()}} 
                                    className="video-btn popup-video"
                                > 
                                    <i className="fas fa-play"></i>
                                </div>

                                <div className="shape4">
                                    <img src="/images/shape/shape4.png" alt="image" />
                                </div>
                                <div className="shape5">
                                    <img src="/images/shape/shape5.png" alt="image" />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="startup-about-content">
                                <span className="sub-title">ABOUT GABY</span>
                                <h2>Before Starting Any New Business We Work With Different Plans</h2>

                                <p><strong>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsanss et iusto.</strong></p>

                                <p>Odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming.</p>

                                <ul className="features-list">
                                    <li>Safeguarding confidential customer data</li>
                                    <li>Balancing cyber security and ease of data sharing</li>
                                    <li>Detecting and responding to malware</li>
                                    <li>Meeting compliance requirements</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* If you want to change the video need to update videoID */}
            <ModalVideo 
                channel='youtube' 
                isOpen={!isOpen} 
                videoId='bk7McNUjWgw' 
                onClose={() => setIsOpen(!isOpen)} 
            />
        </>
    )
}

export default AboutContent;