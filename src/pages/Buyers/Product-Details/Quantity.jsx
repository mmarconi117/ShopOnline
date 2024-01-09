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
            style={{ width: "100%" }}
            id="quantity-component"
        >
            <div style={{ marginBottom: "1%" }}>
                <p style={{ fontSize: "2rem" }}>Quantity </p>
            </div>
            <div
                style={{
                    display: "flex",
                    width: "50%",
                    justifyContent: "flex-start",
                    alignItems: "center",
                }}
            >
                <div style={{ marginRight: "5%" }}>
                    <button
                        className="cursor-pointer"
                        style={styles.button}
                        type="button"
                        onClick={decrementQty}
                    >
                        -
                    </button>
                </div>
                <div style={{ marginRight: "5%" }}>
                    <div>
                        <input
                            type="number"
                            name="price"
                            id="price"
                            className="block w-full rounded-md border-0 py-2 text-black-900 ring-1 ring-inset ring-gray-300 placeholder:text-black-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-6"
                            value={qty}
                            onChange={(e) => updateQtyOnChange(e)}
                        />
                    </div>
                </div>
                <div style={{ marginRight: "5%" }}>
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
        </div>
    );
};
// export default connect(mapStateToProps,mapDispatchToProps)(Quantity)
export default Quantity;
