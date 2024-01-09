import { useState } from "react";

const ProductColors = ({ product }) => {
    const [isHover, setIsHover] = useState(false);

    const onMouseEnter = () => {
        setIsHover(true);
    };

    const onMouseLeave = () => {
        setIsHover(false);
    };

    const styles = {
        colorOptionsDiv: {
            // width: "50%",
            display: "flex",
            justifyContent: "flex-start",
        },
        colorOptionDiv: {
            // padding: "1rem",
            marginRight: "1rem",
        },
        colorOptionItem: {
            borderRadius: ".5rem",
            border: "1px solid black",
            padding: "1.5rem 2rem",
        },
        blue: {
            backgroundColor: "blue",
        },
        red: {
            backgroundColor: "red",
        },
        green: {
            backgroundColor: "green",
        },
    };
    return (
        <div
            id="product-colors-div"
            style={{ width: "100%" }}
        >
            {/* <div
                id="product-colors-div"
            > */}
            <div>
                <p style={{ fontSize: "1.75rem" }}>Color: White</p>
            </div>
            <div
                id="colors-options"
                style={styles.colorOptionsDiv}
            >
                <div
                    id="color-option-div"
                    style={styles.colorOptionDiv}
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    key={1}
                >
                    <p
                        className="bg-red-700"
                        style={styles.colorOptionItem}
                    ></p>
                </div>
                <div
                    id="color-option-div"
                    style={styles.colorOptionDiv}
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    key={1}
                >
                    <p
                        className="bg-green-700"
                        style={styles.colorOptionItem}
                    ></p>
                </div>
                <div
                    id="color-option-div"
                    style={styles.colorOptionDiv}
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    key={1}
                >
                    <p
                        className="bg-blue-700"
                        style={styles.colorOptionItem}
                    ></p>
                </div>
            </div>
            {/* </div> */}
        </div>
    );
};

export default ProductColors;
