import React, { useState } from "react";
import Link from '../../utils/ActiveLink';
import Image from 'next/image';

const AgentNavbarTwo = () => {
    const [menu, setMenu] = React.useState(true)
 
    const toggleNavbar = () => {
        setMenu(!menu)
    }

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
                                                Contacts
                                            </a>
                                        </Link> 

                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link href="/agent/contacts" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Contacts</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/about/Agents" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Companies</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/about/Teams" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Households</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/about/Careers" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Activity Feed</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/about/Testimonials" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Lists</a>
                                                </Link>
                                            </li>

                                        </ul>
                                    </li>

                                    <li className="nav-item">
                                        <Link href="#">
                                            <a onClick={e => e.preventDefault()} className="dropdown-toggle nav-link">
                                                Properties
                                            </a>
                                        </Link>

                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link href="/about/OurCompany" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Listings</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/about/Agents" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Properties</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/about/Teams" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Portfolios</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/about/Careers" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Spaces</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/about/Testimonials" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Transactions</a>
                                                </Link>
                                            </li>

                                        </ul>
                                    </li>
                                
                                    <li className="nav-item">
                                        <Link href="#">
                                            <a onClick={e => e.preventDefault()} className="dropdown-toggle nav-link">
                                                Marketing
                                            </a>
                                        </Link> 

                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link href="/about/OurCompany" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Articles</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/about/Agents" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Social Media</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/about/Teams" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Email</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/about/Careers" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Templates</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/about/Testimonials" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Newsletters</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/about/Testimonials" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Landing Pages</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/about/Testimonials" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Signs</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/about/Testimonials" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Business Cards</a>
                                                </Link>
                                            </li>

                                        </ul>
                                    </li>                                    

                                    <li className="nav-item">
                                        <Link href="#">
                                            <a onClick={e => e.preventDefault()} className="dropdown-toggle nav-link">
                                                Sales
                                            </a>
                                        </Link> 

                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link href="/blog" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Deals</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/blog-right-sidebar" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Tasks</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/blog-details" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Leads</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/blog-details" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Documents</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/blog-details" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Playbooks</a>
                                                </Link>
                                            </li>

                                        </ul>
                                    </li>

                                    <li className="nav-item">
                                        <Link href="#">
                                            <a onClick={e => e.preventDefault()} className="dropdown-toggle nav-link">
                                                Automation
                                            </a>
                                        </Link> 

                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link href="/contact" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Sequences</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/contact-2" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Workflows</a>
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

export default AgentNavbarTwo;