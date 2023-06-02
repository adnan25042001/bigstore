import "./Search.scss";
import { MdClose } from "react-icons/md";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";

const Search = ({ setShowSearch }) => {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();
    const onChange = (event) => {
        setQuery(event.target.value);
    };
    let { data } = useFetch(
        `/api/products?populate=*&filters[title][$contains]=${query}`
    );
    if (!query.length) {
        data = null;
    }
    return (
        <>
            <div className="search-modal">
                <div className="form-field">
                    <input
                        type="text"
                        autoFocus
                        placeholder="Search for products"
                        value={query}
                        onChange={onChange}
                    />
                    <MdClose
                        onClick={() => {
                            setShowSearch(false);
                        }}
                    />
                </div>
                <div className="search-result-content">
                    <div className="search-results">
                        {data &&
                            data.map((prod) => {
                                return (
                                    <div
                                        key={prod.id}
                                        className="search-result-item"
                                        onClick={() => {
                                            navigate(`/product/${prod.id}`);
                                            setShowSearch(false);
                                        }}
                                    >
                                        <div className="img-container">
                                            <img
                                                src={
                                                    prod.attributes?.image
                                                        ?.data[0]?.attributes
                                                        ?.formats?.large?.url ||
                                                    prod.attributes?.image
                                                        ?.data[0]?.attributes
                                                        ?.formats?.medium
                                                        ?.url ||
                                                    prod.attributes?.image
                                                        ?.data[0]?.attributes
                                                        ?.formats?.small?.url
                                                }
                                                alt={prod.attributes.title}
                                            />
                                        </div>
                                        <div className="prod-details">
                                            <span className="name">
                                                {prod.attributes.title}
                                            </span>
                                            <span className="desc">
                                                {prod.attributes.title}
                                            </span>
                                        </div>
                                    </div>
                                );
                            })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Search;
