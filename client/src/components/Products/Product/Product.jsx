import "./Product.scss";
import { useNavigate } from "react-router-dom";

const Product = ({ productDetails }) => {
    const navigate = useNavigate();
    let getAverageColor = (imgElement, ratio) => {
        const canvas = document.createElement("canvas");

        // let height = (canvas.height = imgElement.naturalHeight);
        // let width = (canvas.width = imgElement.naturalWidth);

        const ctx = canvas.getContext("2d");
        ctx.drawImage(imgElement, 0, 0);

        let data, length;
        let i = -4,
            count = 0;

        var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        data = imageData.data;
        length = data.length;

        let r, g, b;

        r = g = b = 0;

        while ((i += ratio) < length) {
            ++count;
            r += data[i];
            g += data[i + 1];
            b += data[i + 2];
        }

        // console.log(r, g, b, count);

        r = ~~(r / count);
        g = ~~(g / count);
        b = ~~(b / count);

        return {
            r,
            g,
            b,
        };
    };
    let load = (e) => {
        let image = e.target;
        const { r, g, b } = getAverageColor(image, 4);
        e.target.parentNode.style.background = `rgba(${r},${g},${b}, 0.1)`;
        console.log(`rgb(${r},${g},${b})`);
    };
    return (
        <>
            <div
                className="product-card"
                onClick={() => {
                    navigate(`/product/${productDetails?.id}`);
                }}
            >
                <div className="thumbnail">
                    <img
                        src={
                            process.env.REACT_APP_BASE_URL +
                            productDetails?.attributes?.img?.data[0]?.attributes
                                ?.url
                        }
                        alt="prod"
                        crossOrigin="anonymous"
                        onLoad={load}
                    />
                </div>
                <div className="prod-details">
                    <span className="name">
                        {productDetails?.attributes?.title}
                    </span>
                    <span className="price">
                        &#8377;{productDetails?.attributes?.price}
                    </span>
                </div>
            </div>
        </>
    );
};

export default Product;
