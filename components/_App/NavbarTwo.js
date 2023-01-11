import { signOut, useSession } from 'next-auth/react';
import React, { useState, useEffect } from "react";
import Link from '../../utils/ActiveLink';
import Image from 'next/image';

const NavbarTwo = () => {
    const [menu, setMenu] = React.useState(true)
 
    const toggleNavbar = () => {
        setMenu(!menu)
    }

    const { data: session } = useSession();

    useEffect(() => {
        if (session == null) return;
        console.log('session.jwt', session.jwt);
    }, [session]);

    React.useEffect(() => {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
    })

    // Search Modal
    const [isActiveSearchModal, setActiveSearchModal] = useState("false");
    const handleToggleSearchModal = () => {
        setActiveSearchModal(!isActiveSearchModal);
    };
 
    const classOne = menu ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = menu ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

    return (
        <>
            <div id="navbar" className="navbar-area marketing-color">
                <div className="noke-nav">
                    <div className="container-fluid">
                        <nav className="navbar navbar-expand-md navbar-light">
                            <Link href="/">
                                <a onClick={toggleNavbar} className="navbar-brand">
                                    <Image src="/images/spenco-logo.svg" alt="logo" width={200} height={70} />
                                </a>
                            </Link>

                            <button 
                                onClick={toggleNavbar} 
                                className={classTwo}
                                type="button" 
                                data-toggle="collapse" 
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                                aria-expanded="false" 
                                aria-label="Toggle navigation"
                            >
                                <span className="icon-bar top-bar"></span>
                                <span className="icon-bar middle-bar"></span>
                                <span className="icon-bar bottom-bar"></span>
                            </button>

                            <div className={classOne} id="navbarSupportedContent">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link href="#">
                                            <a onClick={e => e.preventDefault()} className="dropdown-toggle nav-link">
                                                About Us
                                            </a>
                                        </Link> 

                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link href="/about/OurCompany" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Our Company</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/about/Agents" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Agents</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/about/Teams" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Teams</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/about/Careers" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Careers</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/about/Testimonials" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Testimonials</a>
                                                </Link>
                                            </li>

                                        </ul>
                                    </li>

                                    <li className="nav-item">
                                        <Link href="#">
                                            <a onClick={e => e.preventDefault()} className="dropdown-toggle nav-link">
                                                Commercial
                                            </a>
                                        </Link>

                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link href="/commercial/Services" activeClassName="active">
                                                    <a onClick={e => e.preventDefault()} className="nav-link">
                                                        Services <i className="fas fa-chevron-right"></i>
                                                    </a>
                                                </Link>

                                                <ul className="dropdown-menu">
                                                    <li className="nav-item">
                                                        <Link href="/commercial/services/Acquisitions" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">Acquisitions</a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/commercial/services/Dispositions" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">Dispositions</a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/commercial/services/Investor_Services" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">Investor Services</a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/commercial/services/Market_Analysis" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">Market Analysis</a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/commercial/services/Site_Selection" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">Site Selection</a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/commercial/services/1031Exchanges" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">1031 Exchanges</a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li> 

                                            <li className="nav-item">
                                                <Link href="#" activeClassName="active">
                                                    <a onClick={e => e.preventDefault()} className="nav-link">
                                                        Sectors <i className="fas fa-chevron-right"></i>
                                                    </a>
                                                </Link>

                                                <ul className="dropdown-menu">
                                                    <li className="nav-item">
                                                        <Link href="/commercial/sectors/Multifamily" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">Multifamily</a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/commercial/sectors/Industrial" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">Industrial</a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/commercial/sectors/Retail" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">Retail</a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/commercial/sectors/Land" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">Land</a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/commercial/sectors/Office" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">Office</a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/commercial/sectors/Self_Storage" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">Self Storage</a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li> 
                                        
                                            <li className="nav-item">
                                                <Link href="/how-it-works" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Our Process</a>
                                                </Link>
                                            </li>
                                            
                                            <li className="nav-item">
                                                <Link href="#" activeClassName="active">
                                                    <a onClick={e => e.preventDefault()} className="nav-link">
                                                        Tools <i className="fas fa-chevron-right"></i>
                                                    </a>
                                                </Link>

                                                <ul className="dropdown-menu">
                                                    <li className="nav-item">
                                                        <Link href="/gallery-1" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">Calculator</a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/gallery-2" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">Analytics</a>
                                                        </Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link href="/gallery-3" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">Market Data</a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li> 

                                            <li className="nav-item">
                                                <Link href="/commercial/faq" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">FAQ</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                
                                    <li className="nav-item">
                                        <Link href="#">
                                            <a onClick={e => e.preventDefault()} className="dropdown-toggle nav-link">
                                                Residential
                                            </a>
                                        </Link> 

                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link href="/portfolio-grid-1" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Developer Platform</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/portfolio-grid-2" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Integrated Services</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/portfolio-grid-3" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Express Offers</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/portfolio-details" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">eXp Realty</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>                                    

                                    <li className="nav-item">
                                        <Link href="#">
                                            <a onClick={e => e.preventDefault()} className="dropdown-toggle nav-link">
                                                News
                                            </a>
                                        </Link> 

                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link href="/blog" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Recent Articles</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/blog-right-sidebar" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Case Studies</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/blog-details" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Transactions</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/blog-details" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Upcoming Events</a>
                                                </Link>
                                            </li>

                                        </ul>
                                    </li>

                                    <li className="nav-item">
                                        <Link href="#">
                                            <a onClick={e => e.preventDefault()} className="dropdown-toggle nav-link">
                                                Contact
                                            </a>
                                        </Link> 

                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link href="/contact" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Locations</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/contact-2" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Teams</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/contact-3" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Agents</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            
                                <div className="others-option d-flex align-items-center">
                                    <div className="option-item">
                                        <div className="search-icon" onClick={handleToggleSearchModal}>
                                            <i className="fas fa-search"></i>
                                        </div>
                                    </div>

                                    <div className="option-item">
                                        <div className="social-links">
                                            <span>
                                                <a href="https://www.facebook.com/SpencerCommercial" target="_blank">
                                                    <i className="fab fa-facebook-f"></i>
                                                </a>
                                            </span>
                                            <span>
                                                <a href="https://www.instagram.com/selfstoragebuyer/" target="_blank">
                                                    <i className="fab fa-instagram"></i>
                                                </a>
                                            </span>
                                            <span>
                                                <a href="https://twitter.com/buyselfstorage" target="_blank">
                                                    <i className="fab fa-twitter"></i>
                                                </a>
                                            </span>
                                            <span>
                                                <a href="https://www.linkedin.com/company/spencer-commercial-group" target="_blank">
                                                    <i className="fab fa-linkedin-in"></i>
                                                </a>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                {session ? (
                                    <button onClick={signOut}>Sign out</button>
                                    ) : (
                                    <Link href="/auth/sign-in">
                                        <button>Sign In</button>
                                    </Link>
                                )}
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
 
            {/* Search Form */}
            <div className={`search-overlay ${isActiveSearchModal ? "" : "search-overlay-active"}`}>
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="search-overlay-layer"></div>
                        <div className="search-overlay-layer"></div>
                        <div className="search-overlay-layer"></div>
                        
                        <div className="search-overlay-close" onClick={handleToggleSearchModal}>
                            <span className="search-overlay-close-line"></span>
                            <span className="search-overlay-close-line"></span>
                        </div>

                        <div className="search-overlay-form">
                            <form>
                                <input type="text" className="input-search" placeholder="Search here..." />
                                <button type="submit">
                                    <i className='bx bx-search-alt'></i>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Search Form */}
        </>
    );
}

export default NavbarTwo;