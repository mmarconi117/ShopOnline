import { useState } from "react";

const ProductColors = ({ colors }) => {
    // console.log(colors);
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
    const colorsComponent = colors.map((c, index) => {
        return (
            <div
                key={index}
                style={{
                    marginRight: "1rem",
                }}
            >
                <p
                    className="border border-black"
                    style={{
                        backgroundColor: c.color,
                        padding: "1.5rem 2rem",
                        borderRadius: ".5rem",
                    }}
                ></p>
            </div>
        );
    });
    return (
        <div
            id="product-colors-div"
            style={{ width: "100%" }}
        >
            <div>
                <p style={{ fontSize: "1.75rem" }}>Color: White</p>
            </div>
            <div
                id="colors-options"
                style={styles.colorOptionsDiv}
            >
                {colorsComponent}
            </div>
        </div>
    );
};

export default ProductColors;
