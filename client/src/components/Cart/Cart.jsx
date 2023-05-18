import "./Cart.scss";
import CartItem from "./CartItem/CartItem";

const Cart = () => {
    return (
        <>
            <div className="cart-content">
                <div className="cart-layout">
                    <div className="cart-items">
                        <CartItem/>
                        <CartItem/>
                        <CartItem/>
                        <CartItem/>
                        <CartItem/>
                        <CartItem/>
                    </div>
                    <div className="cart-total">
                        <div className="text">
                            <spna className="left">Shipping cost</spna>
                            <span className="right">&#8377;499</span>
                        </div>
                        <div className="text">
                            <spna className="left">Discount</spna>
                            <span className="right">&#8377;0</span>
                        </div>
                        <div className="text">
                            <spna className="left">Tax</spna>
                            <span className="right">0%</span>
                        </div>
                        <div className="total-text">
                            <spna className="left">Total</spna>
                            <span className="right">&#8377;499</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cart;
