import React from "react";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";
import "./Footer.scss";

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="footer-content">
                    <div className="col">
                        <div className="title">About</div>
                        <div className="text">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Quod harum nihil magni eligendi, assumenda
                            suscipit sint, minus corrupti libero possimus neque
                            atque fuga vel veritatis culpa mollitia laboriosam
                            explicabo ullam.
                        </div>
                    </div>
                    <div className="col">
                        <div className="title">Contact</div>
                        <div className="c-item">
                            <FaLocationArrow />
                            <div className="text">
                                Jaitpur part-2, New Delhi, Delhi - 110044
                            </div>
                        </div>
                        <div className="c-item">
                            <FaMobileAlt />
                            <div className="text">Phone: 9876543210</div>
                        </div>
                        <div className="c-item">
                            <FaEnvelope />
                            <div className="text">
                                Email: support@bigstore.com
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="title">Categories</div>
                        <span className="text">Headphones</span>
                        <span className="text">Smart Watches</span>
                        <span className="text">Bluetooth Speaker</span>
                        <span className="text">Wireless Earbuds</span>
                        <span className="text">Home Theatre</span>
                        <span className="text">Projectors</span>
                    </div>
                    <div className="col">
                        <div className="title">Pages</div>
                        <span className="text">Home</span>
                        <span className="text">About</span>
                        <span className="text">Privacy Policy</span>
                        <span className="text">Returns</span>
                        <span className="text">Terms & Conditions</span>
                        <span className="text">Contact Us</span>
                    </div>
                </div>
                <div className="bottom-bar">
                    <div className="bottom-bar-content">
                        <div className="text">
                            BIGSTORE 2023 CREATED BY ADNAN HUSSAIN, PREMIUM
                            E-COMMERCE SOLUTIONS.
                        </div>
                        <img src={Payment} alt="Payemt" />
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
