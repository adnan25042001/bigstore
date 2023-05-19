import "./Home.scss";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Products from "../Products/Products";
import { useEffect, useContext } from "react";
import { fetchDataFromApi } from "../../utils/api";
import { Context } from "../../utils/context";

const Home = () => {
    const { categories, setCategories, products, setProducts } =
        useContext(Context);

    useEffect(() => {
        getCategories();
        getProducts();
    }, []);

    const getCategories = async () => {
        const res = await fetchDataFromApi("/api/categories?populate=*");
        setCategories(res?.data);
    };

    const getProducts = async () => {
        const res = await fetchDataFromApi("/api/products?populate=*");
        setProducts(res?.data);
    };

    return (
        <>
            <div>
                <Banner />
                <div className="main-content">
                    <div className="layout">
                        <Category categories={categories} />
                        <Products
                            headingText="Popular Products"
                            products={products}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
