import "./CartItem.scss";
import prod from "../../../assets/products/earbuds-prod-1.webp";
import { MdClose } from "react-icons/md";

const CartItem = () => {
    return (
        <>
            <div className="cart-products">
                <div className="cart-product">
                    <div className="img-container">
                        <img src={prod} alt="prod" />
                    </div>
                    <div className="prod-details">
                        <span className="name">Product name</span>
                        <MdClose className="close-btn" />
                        <div className="quantity-buttons">
                            <span>-</span>
                            <span>3</span>
                            <span>+</span>
                        </div>
                        <div className="text">
                            <span>3</span>
                            <span>x</span>
                            <span className="highlight">&#8377;499</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CartItem;
