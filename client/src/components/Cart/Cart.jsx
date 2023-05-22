import "./Cart.scss";
import CartItem from "./CartItem/CartItem";
import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";
import { useContext } from "react";
import { Context } from "../../utils/context";

const Cart = ({ setShowCart }) => {
    const { cartItems, cartSubTotal } = useContext(Context);
    return (
        <>
            <div className="cart-panel">
                <div className="opac-layer"></div>
                <div className="cart-content">
                    <div className="cart-header">
                        <span className="heading">Shopping Cart</span>
                        <span
                            className="close-btn"
                            onClick={() => {
                                setShowCart(false);
                            }}
                        >
                            <MdClose />
                            <span className="text">close</span>
                        </span>
                    </div>
                    {cartItems.length === 0 && (
                        <div className="empty-cart">
                            <BsCartX />
                            <span>No products in the cart.</span>
                            <button
                                className="return-cta"
                                onClick={() => {
                                    setShowCart(false);
                                }}
                            >
                                RETURN TO SHOP
                            </button>
                        </div>
                    )}
                    {cartItems.length > 0 && (
                        <>
                            <CartItem />
                            <div className="cart-footer">
                                <div className="subtotal">
                                    <span className="text">Subtotal:</span>
                                    <span className="text total">
                                        &#8377;{cartSubTotal}
                                    </span>
                                </div>
                                <div className="button">
                                    <button className="checkout-cta">
                                        Checkout
                                    </button>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
};

export default Cart;
