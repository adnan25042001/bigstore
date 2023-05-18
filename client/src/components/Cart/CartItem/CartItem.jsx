import "./CartItem.scss";
import prod from "../../../assets/products/speaker-prod-1.webp";

const CartItem = () => {
    return (
        <>
            <div className="cart-item">
                <div className="left">
                    <img src={prod} alt="prod" />
                    <div className="quantity-buttons">
                        <span>-</span>
                        <span>2</span>
                        <span>+</span>
                    </div>
                </div>
                <div className="right">
                    <span className="name">Product name</span>
                    <span className="desc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Officia aliquam delectus sint hic deleniti provident.
                        Reiciendis mollitia placeat ex, vitae non optio quod
                        debitis iste! Eveniet doloribus dolores ullam nulla.
                    </span>
                    <div className="product-total">
                        <span className="price">Price: &#8377;499</span>
                        <span className="total">Total: &#8377;998</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CartItem;
