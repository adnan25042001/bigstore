import "./Product.scss";
import {useNavigate} from "react-router-dom";

const Product = ({ productDetails }) => {
    const navigate = useNavigate()
    return (
        <>
            <div className="product-card" onClick={()=>{navigate(`/product/${productDetails?.id}`)}}>
                <div className="thumbnail">
                    <img
                        src={
                            process.env.REACT_APP_BASE_URL +
                            productDetails?.attributes?.img?.data[0]?.attributes
                                ?.url
                        }
                        alt="prod"
                    />
                </div>
                <div className="prod-details">
                    <span className="name">
                        {productDetails?.attributes?.title}
                    </span>
                    <span className="price">
                        &#8377;{productDetails?.attributes?.price}
                    </span>
                </div>
            </div>
        </>
    );
};

export default Product;
