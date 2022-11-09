import React from 'react';

const PageBannerStyleThree = ({pageTitle, homePageUrl, homePageText, activePageText, BGImage}) => {
    return (
        <>
            <div className={`page-title-area bg-image style-three jarallax ${BGImage}`}>
                <div className="container">
                    <div className="page-title-content">
                        <h2>{pageTitle}</h2>
                        <ul>
                            <li><a href={homePageUrl}>{homePageText}</a></li>
                            <li>{activePageText}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PageBannerStyleThree;