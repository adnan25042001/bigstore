import "./SingleProduct.scss";
import ReletedProducts from "./RelatedProducts/RelatedProducts";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaPinterest,
    FaCartPlus,
} from "react-icons/fa";
import prod from "../../assets/products/headphone-prod-1.webp";

const SingleProduct = () => {
    return (
        <>
            <div className="single-product-main-content">
                <div className="layout">
                    <div className="single-product-page">
                        <div className="left">
                            <img src={prod} alt="prod" />
                        </div>
                        <div className="right">
                            <span className="name">Product name</span>
                            <span className="price">&#8377;499</span>
                            <span className="desc">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Officia aliquam delectus sint
                                hic deleniti provident. Reiciendis mollitia
                                placeat ex, vitae non optio quod debitis iste!
                                Eveniet doloribus dolores ullam nulla.
                            </span>
                            <div className="cart-buttons">
                                <div className="quantity-buttons">
                                    <span>-</span>
                                    <span>7</span>
                                    <span>+</span>
                                </div>
                                <button className="add-to-cart-button">
                                    <FaCartPlus size={20} />
                                    ADD TO CART
                                </button>
                            </div>
                            <span className="divider" />
                            <div className="info-item">
                                <span className="text-bold">
                                    Category: <span>Headphones</span>
                                </span>
                                <span className="text-bold">
                                    Share:{" "}
                                    <span className="social-icons">
                                        <FaFacebookF size={16} />
                                        <FaTwitter size={16} />
                                        <FaInstagram size={16} />
                                        <FaLinkedinIn size={16} />
                                        <FaPinterest size={16} />
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <ReletedProducts/>
                </div>
            </div>
        </>
    );
};

export default SingleProduct;
