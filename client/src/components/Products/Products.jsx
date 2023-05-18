import "./Products.scss";
import Product from "./Product/Product";

const Products = (props) => {
    return (
        <>
            <div className="products-container">
                {!props.innerPage && (
                    <div className="sec-heading">{props.headingText}</div>
                )}
                <div className="products">
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                </div>
            </div>
        </>
    );
};

export default Products;
