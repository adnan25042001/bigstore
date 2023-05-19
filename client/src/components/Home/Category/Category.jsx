import "./Category.scss";
import cat1 from "../../../assets/category/cat-1.jpg";

const Category = ({ categories }) => {
    return (
        <>
            <div className="shop-by-category">
                <div className="categories">
                    {categories &&
                        categories.map((ele) => {
                            return (
                                <div key={ele?.id} className="category">
                                    <img
                                        src={
                                            process.env.REACT_APP_BASE_URL +
                                            ele?.attributes?.img?.data
                                                ?.attributes?.url
                                        }
                                        alt="cat1"
                                    />
                                </div>
                            );
                        })}
                </div>
            </div>
        </>
    );
};

export default Category;
