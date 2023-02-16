import React from 'react';
import Link from 'next/link';

const SectorsSidebar = () => {
    return (
        <>
            <aside className="widget-area extra-padding">
                <div className="widget widget_search">
                    <form className="search-form">
                        <label>
                            <input type="search" className="search-field" placeholder="Search..." />
                        </label>
                        <button type="submit"><i className="fas fa-search"></i></button>
                    </form>
                </div>

                <div className="widget widget_service_categories">
                    <h3 className="widget-title">CRE Sectors</h3>

                    <ul>
                        <li>
                            <Link href="/commercial/services/multifamily">
                                <a>Multifamily <i className="fas fa-chevron-right"></i></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/commercial/services/office">
                                <a>Office <i className="fas fa-chevron-right"></i></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/commercial/services/retail">
                                <a>Retail <i className="fas fa-chevron-right"></i></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/commercial/services/land">
                                <a>Land <i className="fas fa-chevron-right"></i></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/commercial/services/industrial">
                                <a>Industrial <i className="fas fa-chevron-right"></i></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/commercial/services/self-storage">
                                <a>Self Storage <i className="fas fa-chevron-right"></i></a>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="widget widget_noke_posts_thumb">
                    <h3 className="widget-title">Popular Posts</h3>

                    <article className="item">
                        <Link href="/blog-details">
                            <a className="thumb">
                                <span className="fullimage cover bg1" role="img"></span>
                            </a>
                        </Link>
                        <div className="info">
                            <h4 className="title usmall">
                                <Link href="/blog-details">
                                    <a>Being The Best-Selling Smart Phone This Year</a>
                                </Link>
                            </h4>
                            <span className="date"><i className="far fa-calendar-alt"></i> Dec 15, 2020</span>
                        </div>
                    </article>

                    <article className="item">
                        <Link href="/blog-details">
                            <a className="thumb">
                                <span className="fullimage cover bg2" role="img"></span>
                            </a>
                        </Link>
                        <div className="info">
                            <h4 className="title usmall">
                                <Link href="/blog-details">
                                    <a>Love Songs Helped Me Through Heartbreak</a>
                                </Link>
                            </h4>
                            <span className="date"><i className="far fa-calendar-alt"></i> Dec 14, 2020</span>
                        </div>
                    </article>

                    <article className="item">
                        <Link href="/blog-details">
                            <a className="thumb">
                                <span className="fullimage cover bg3" role="img"></span>
                            </a>
                        </Link>
                        <div className="info">
                            <h4 className="title usmall">
                                <Link href="/blog-details">
                                    <a>Two Fashion Designers Busy With 2020 Winter Fashion</a>
                                </Link>
                            </h4>
                            <span className="date"><i className="far fa-calendar-alt"></i> Dec 13, 2020</span>
                        </div>
                    </article>

                    <article className="item">
                        <Link href="/blog-details">
                            <a className="thumb"><span className="fullimage cover bg4" role="img"></span></a>
                        </Link>
                        <div className="info">
                            <h4 className="title usmall">
                                <Link href="/blog-details">
                                    <a>Working in the Office is a Tradition For Women</a>
                                </Link>
                            </h4>
                            <span className="date"><i className="far fa-calendar-alt"></i> Dec 12, 2020</span>
                        </div>
                    </article>
                </div>

                <div className="widget widget_newsletter">
                    <h4>Subscribe To Our Newsletter</h4>
                    <p>Subscribe to our newsletter to get the new updates!</p>

                    <form className="newsletter-form">
                        <input type="email" className="input-newsletter" placeholder="Enter your email" name="EMAIL" required />
                        <button type="submit">Subscribe</button>
                    </form>
                </div>
            </aside>
        </>
    )
}

export default SectorsSidebar;