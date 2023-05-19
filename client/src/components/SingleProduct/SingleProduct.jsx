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
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { useState } from "react";

const SingleProduct = () => {
    const [quantity, setQuantity] = useState(1);
    const { id } = useParams();

    const { data } = useFetch(`/api/products?populate=*&[filters][id]=${id}`);

    const increment = () => {
        setQuantity(quantity+1)
    }

    const decrement = () => {
        if(quantity > 1){
            setQuantity(quantity-1);
        }
    }

    return (
        <>
            <div className="single-product-main-content">
                <div className="layout">
                    <div className="single-product-page">
                        <div className="left">
                            <img src={process.env.REACT_APP_BASE_URL +
                            data?.[0]?.attributes?.img?.data[0]?.attributes
                                ?.url} alt="prod" />
                        </div>
                        <div className="right">
                            <span className="name">
                                {data?.[0]?.attributes?.title}
                            </span>
                            <span className="price">
                                &#8377;{data?.[0]?.attributes?.price}
                            </span>
                            <span className="desc">
                                {data?.[0]?.attributes?.desc}
                            </span>
                            <div className="cart-buttons">
                                <div className="quantity-buttons">
                                    <span onClick={decrement}>-</span>
                                    <span>{quantity}</span>
                                    <span onClick={increment}>+</span>
                                </div>
                                <button className="add-to-cart-button">
                                    <FaCartPlus size={20} />
                                    ADD TO CART
                                </button>
                            </div>
                            <span className="divider" />
                            <div className="info-item">
                                <span className="text-bold">
                                    Category: <span>{data?.[0]?.attributes?.categories?.data?.[0]?.attributes?.title}</span>
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
                    <ReletedProducts />
                </div>
            </div>
        </>
    );
};

export default SingleProduct;
