import React from "react";
import Link from '../../utils/ActiveLink';
import TopHeaderStyleTwo from "./TopHeader/TopHeaderStyleTwo";
import Image from 'next/image';

const NavbarFour = () => {
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

    const classOne = menu ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = menu ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

    return (
        <>
            <div className="header-area p-absolute">
                
                <TopHeaderStyleTwo />

                <div id="navbar" className="navbar-area color-white">
                    <div className="noke-nav">
                        <div className="container">
                            <nav className="navbar navbar-expand-md navbar-light">
                            <Link href="/">
                                <a onClick={toggleNavbar} className="navbar-brand">
                                    <Image src="/images/spenco-logo-white.svg" alt="logo" width={200} height={70} />
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
                                                <Link href="#" activeClassName="active">
                                                    <a onClick={e => e.preventDefault()} className="nav-link">
                                                        Services <i className="fas fa-chevron-right"></i>
                                                    </a>
                                                </Link>

                                                <ul className="dropdown-menu">
                                                <li className="nav-item">
                                                        <Link href="/commercial/services/acquisitions" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">Acquisitions</a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/commercial/services/dispositions" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">Dispositions</a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/commercial/services/investor-services" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">Investor Services</a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/commercial/services/market-analysis" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">Market Analysis</a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/commercial/services/site-selection" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">Site Selection</a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/commercial/services/1031-exchanges" activeClassName="active">
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
                                                        <Link href="/commercial/sectors/multifamily" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">Multifamily</a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/commercial/sectors/industrial" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">Industrial</a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/commercial/sectors/retail" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">Retail</a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/commercial/sectors/land" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">Land</a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/commercial/sectors/office" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">Office</a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/commercial/sectors/self-storage" activeClassName="active">
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
                                                <Link href="/our-clients" activeClassName="active">
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
                                            <div className="search-box">
                                                <input type="text" className="input-search" placeholder="Search" />
                                                <button type="submit"><i className="fas fa-search"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NavbarFour;