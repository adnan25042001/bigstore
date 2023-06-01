import "./Category.scss";
import { useNavigate } from "react-router-dom";

const Category = ({ categories }) => {
    const navigate = useNavigate();
    return (
        <>
            <div className="shop-by-category">
                <div className="categories">
                    {categories &&
                        categories.map((cat) => {
                            return (
                                <div
                                    key={cat?.id}
                                    className="category"
                                    onClick={() => {
                                        navigate(`/category/${cat?.id}`);
                                    }}
                                >
                                    <img
                                        src={
                                            cat?.attributes?.img?.data
                                                ?.attributes?.formats?.thumbnail
                                                ?.url
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
