import "./CartItem.scss";
import { MdClose } from "react-icons/md";
import { useContext } from "react";
import { Context } from "../../../utils/context";

const CartItem = () => {
    const { cartItems, handleRemoveFromCart, handleCartProductQuantity } =
        useContext(Context);
    return (
        <>
            <div className="cart-products">
                {cartItems &&
                    cartItems.map((prod) => {
                        return (
                            <div key={prod.id} className="cart-product">
                                <div className="img-container">
                                    <img
                                        src={
                                            prod?.attributes?.imgage?.data[0]
                                                ?.attributes?.formats?.thumbnail
                                                ?.url
                                        }
                                        alt="prod"
                                    />
                                </div>
                                <div className="prod-details">
                                    <span className="name">
                                        {prod.attributes.title}
                                    </span>
                                    <MdClose
                                        className="close-btn"
                                        onClick={() => {
                                            handleRemoveFromCart(prod);
                                        }}
                                    />
                                    <div className="quantity-buttons">
                                        <span
                                            onClick={() => {
                                                handleCartProductQuantity(
                                                    "dec",
                                                    prod
                                                );
                                            }}
                                        >
                                            -
                                        </span>
                                        <span>{prod.attributes.quantity}</span>
                                        <span
                                            onClick={() => {
                                                handleCartProductQuantity(
                                                    "inc",
                                                    prod
                                                );
                                            }}
                                        >
                                            +
                                        </span>
                                    </div>
                                    <div className="text">
                                        <span>{prod.attributes.quantity}</span>
                                        <span>x</span>
                                        <span className="highlight">
                                            &#8377;{prod.attributes.price}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
            </div>
        </>
    );
};

export default CartItem;
