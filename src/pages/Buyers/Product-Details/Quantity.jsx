import { useState } from "react";

const Quantity = ({ qty, incrementQty, decrementQty, updateQtyOnChange }) => {
    const styles = {
        button: {
            display: "inline-block",
            textAlign: "center",
            border: "1px solid black",
            padding: ".5rem 1rem",
            fontSize: "1.25rem",
            borderRadius: "10px",
        },
    };

    return (
        <div
            id="quantity-component"
            className="flex flex-col gap-2"
        >
            <p className="text-base ">Quantity </p>
            <div
                className="flex justify-start items-center gap-2"
            >
                <button
                    className="cursor-pointer py-5"
                    style={styles.button}
                    type="button"
                    onClick={decrementQty}
                >
                    -
                </button>
                <div>
                    {qty}
                </div>
                <button
                    className="cursor-pointer"
                    style={styles.button}
                    type="button"
                    // onClick={() => dispatch(increment())}
                    onClick={incrementQty}
                >
                    +
                </button>
            </div>
        </div>
    );
};
export default Quantity;
