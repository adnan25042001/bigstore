import "./Category.scss";
import Products from "../Products/Products";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const Category = () => {
    const { id } = useParams();

    const { data } = useFetch(
        `/api/products?populate=*&[filters][categories][id]=${id}`
    );

    return (
        <>
            <div className="category-main-content">
                <div className="layout">
                    {data && (
                        <Products
                            headingText={
                                data?.[0]?.attributes?.categories?.data[0]
                                    ?.attributes?.title
                            }
                            products={data}
                        />
                    )}
                </div>
            </div>
        </>
    );
};

export default Category;
