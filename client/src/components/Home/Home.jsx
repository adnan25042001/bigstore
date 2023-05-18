import "./Home.scss";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Products from "../Products/Products";
import { useEffect } from "react";
import { fetchDataFromApi } from "../../utils/api";

const Home = () => {
    useEffect(() => {
        getCategories();
    }, []);

    const getCategories = async () => {
        fetchDataFromApi("/api/Categories").then((data) => console.log(data));
    };

    return (
        <>
            <div>
                <Banner />
                <div className="main-content">
                    <div className="layout">
                        <Category />
                        <Products headingText="Popular Products" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
