import React from 'react';
import Link from 'next/link';

const RelatedProducts = () => {
    return (
        <>
            <div className="products-area with-top-border pt-100 pb-70">
                <div className="container">
                    <div className="section-title">
                        <h2>Related Products</h2>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                            <div className="single-products-box">
                                <div className="image">
                                    <Link href="/products-details">
                                        <a className="d-block">
                                            <img src="/images/products/products-img1.jpg" alt="image" />
                                        </a>
                                    </Link>

                                    <ul className="buttons-list">
                                        <li>
                                            <Link href="/cart">
                                                <a>
                                                    <i className="fas fa-shopping-cart"></i>
                                                    <span className="tooltip-label">Add to Cart</span>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="far fa-heart"></i>
                                                <span className="tooltip-label">Add to Wishlist</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="content">
                                    <h3>
                                        <Link href="/products-details">
                                            <a>Old West Clothing</a>
                                        </Link>
                                    </h3>
                                    <div className="rating">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                    <div className="price">
                                        <span className="new-price">$75.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                            <div className="single-products-box">
                                <div className="image">
                                    <Link href="/products-details">
                                        <a className="d-block">
                                            <img src="/images/products/products-img2.jpg" alt="image" />
                                        </a>
                                    </Link>

                                    <div className="new">New</div>
                                    <ul className="buttons-list">
                                        <li>
                                            <Link href="/cart">
                                                <a>
                                                    <i className="fas fa-shopping-cart"></i>
                                                    <span className="tooltip-label">Add to Cart</span>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="far fa-heart"></i>
                                                <span className="tooltip-label">Add to Wishlist</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="content">
                                    <h3>
                                        <Link href="/products-details">
                                            <a>Western Party Wear</a>
                                        </Link>
                                    </h3>
                                    <div className="rating">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star-half-alt"></i>
                                    </div>
                                    <div className="price">
                                        <span className="new-price">$90.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                            <div className="single-products-box">
                                <div className="image">
                                    <Link href="/products-details">
                                        <a className="d-block">
                                            <img src="/images/products/products-img3.jpg" alt="image" />
                                        </a>
                                    </Link>

                                    <ul className="buttons-list">
                                        <li>
                                            <Link href="/cart">
                                                <a>
                                                    <i className="fas fa-shopping-cart"></i>
                                                    <span className="tooltip-label">Add to Cart</span>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="far fa-heart"></i>
                                                <span className="tooltip-label">Add to Wishlist</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="content">
                                    <h3>
                                        <Link href="/products-details">
                                            <a>classNameic Western Clothing</a>
                                        </Link>
                                    </h3>
                                    <div className="rating">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="far fa-star"></i>
                                    </div>
                                    <div className="price">
                                        <span className="new-price">$60.00</span>
                                        <span className="old-price">$99.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                            <div className="single-products-box">
                                <div className="image">
                                    <Link href="/products-details">
                                        <a className="d-block">
                                            <img src="/images/products/products-img4.jpg" alt="image" />
                                        </a>
                                    </Link>

                                    <div className="sale">Sale!</div>
                                    <ul className="buttons-list">
                                        <li>
                                            <Link href="/cart">
                                                <a>
                                                    <i className="fas fa-shopping-cart"></i>
                                                    <span className="tooltip-label">Add to Cart</span>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="far fa-heart"></i>
                                                <span className="tooltip-label">Add to Wishlist</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="content">
                                    <h3>
                                        <Link href="/products-details">
                                            <a>Western Crochet Dresses</a>
                                        </Link>
                                    </h3>
                                    <div className="rating">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star-half-alt"></i>
                                        <i className="far fa-star"></i>
                                    </div>
                                    <div className="price">
                                        <span className="new-price">$50.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RelatedProducts;