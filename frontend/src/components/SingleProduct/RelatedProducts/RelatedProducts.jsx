import useFetch from "../../../hooks/useFetch";
import Products from "../../Products/Products";

const RelatedProducts = ({ productId, categoryId }) => {
    const { data } = useFetch(
        `/api/products?populate=*&filters[id][$ne]=${productId}&filters[categories][id]=${categoryId}&pagination[start]=0&pagination[limit]=4`
    );
    console.log(data);
    return (
        <>
            <div className="related-products">
                {data && (
                    <Products products={data} headingText="Related Products" />
                )}
            </div>
        </>
    );
};

export default RelatedProducts;
