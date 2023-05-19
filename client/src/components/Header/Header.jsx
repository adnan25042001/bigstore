import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
import Search from "./Search/Search";
import Cart from "../Cart/Cart";
import { Context } from "../../utils/context";
import "./Header.scss";

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isHome, setIsHome] = useState(false);
    const [showCart, setShowCart] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const navigate = useNavigate();

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 0) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        if (window.location.href.length > "http://localhost:3000/".length) {
            setIsHome(false);
        } else {
            setIsHome(true);
        }
    }, [window.location.href]);

    return (
        <>
            <header
                className={`main-header ${
                    !isHome ? "sticky-header" : scrolled ? "fixed-header" : ""
                }`}
            >
                <div className="header-content">
                    <ul className="left">
                        <li onClick={()=>navigate("/")}>Home</li>
                        <li>About</li>
                        <li>Categories</li>
                    </ul>
                    <div className="center" onClick={()=>navigate("/")}>BIGSTORE.</div>
                    <div className="right">
                        <TbSearch
                            onClick={() => {
                                setShowSearch(true);
                            }}
                        />
                        <AiOutlineHeart />
                        <span
                            className="cart-icon"
                            onClick={() => {
                                setShowCart(true);
                            }}
                        >
                            <CgShoppingCart />
                            <span>10</span>
                        </span>
                    </div>
                </div>
            </header>
            {showCart && <Cart setShowCart={setShowCart} />}
            {showSearch && <Search setShowSearch={setShowSearch} />}
        </>
    );
};

export default Header;
