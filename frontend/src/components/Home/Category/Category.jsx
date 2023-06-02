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
                                                ?.attributes?.formats?.large
                                                ?.url ||
                                            cat?.attributes?.img?.data
                                                ?.attributes?.formats?.medium
                                                ?.url ||
                                            cat?.attributes?.img?.data
                                                ?.attributes?.formats?.small
                                                ?.url
                                        }
                                        alt={cat?.attributes?.title}
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
