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
import { useState, useContext } from "react";
import { Context } from "../../utils/context";

const SingleProduct = () => {
    const [quantity, setQuantity] = useState(1);
    const { id } = useParams();
    console.log(id);
    const { handleAddToCart } = useContext(Context);

    const { data } = useFetch(`/api/products?populate=*&[filters][id]=${id}`);

    const increment = () => {
        setQuantity((prevState) => prevState + 1);
    };

    const decrement = () => {
        if (quantity > 1) {
            setQuantity((prevState) => prevState - 1);
        }
    };

    return (
        <>
            <div className="single-product-main-content">
                <div className="layout">
                    <div className="single-product-page">
                        <div className="left">
                            <img
                                src={
                                    data?.[0]?.attributes?.image?.data[0]
                                        ?.attributes?.formats?.large?.url ||
                                    data?.[0]?.attributes?.image?.data[0]
                                        ?.attributes?.formats?.medium?.url ||
                                    data?.[0]?.attributes?.image?.data[0]
                                        ?.attributes?.formats?.small?.url
                                }
                                alt={data?.[0]?.attributes?.title}
                            />
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
                                <button
                                    className="add-to-cart-button"
                                    onClick={() => {
                                        handleAddToCart(data[0], quantity);
                                        setQuantity(1);
                                    }}
                                >
                                    <FaCartPlus size={20} />
                                    ADD TO CART
                                </button>
                            </div>
                            <span className="divider" />
                            <div className="info-item">
                                <span className="text-bold">
                                    Category:{" "}
                                    <span>
                                        {
                                            data?.[0]?.attributes?.categories
                                                ?.data?.[0]?.attributes?.title
                                        }
                                    </span>
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
                    <ReletedProducts
                        productId={id}
                        categoryId={
                            data?.[0]?.attributes?.categories?.data?.[0]?.id
                        }
                    />
                </div>
            </div>
        </>
    );
};

export default SingleProduct;
