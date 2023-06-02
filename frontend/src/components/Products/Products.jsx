import "./Products.scss";
import Product from "./Product/Product";

const Products = ({ headingText, products, innerPage }) => {
    return (
        <>
            <div className="products-container">
                {!innerPage && <div className="sec-heading">{headingText}</div>}
                <div className="products">
                    {products &&
                        products.map((prod) => {
                            return (
                                <Product key={prod?.id} productDetails={prod} />
                            );
                        })}
                </div>
            </div>
        </>
    );
};

export default Products;
