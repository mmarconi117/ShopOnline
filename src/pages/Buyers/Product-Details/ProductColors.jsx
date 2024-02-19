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
            >
                <button
                    className={`border-solid focus:border-[#79767D] cursor-pointer border border-black rounded-lg py-6 px-8 focus:border-4`} 
                    style={{
                        backgroundColor: c.color,
                    }}
                ></button>
            </div>
        );
    });
    return (
        <div
            id="product-colors-div"
            className="flex flex-col gap-[10px]"
        >
            <p className="text-base font-normal">Color: White</p>
            <div
                id="colors-options"
                className="flex justify-start gap-4"
            >
                {colorsComponent}
            </div>
        </div>
    );
};

export default ProductColors;
