import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, amount } from "../../../reducers/product";

const Quantity = ({ product }) => {
    const { qty } = useSelector((state) => state.product);
    const dispatch = useDispatch();

    const styles = {
        button: {
            display: "inline-block",
            textAlign: "center",
            border: "1px solid black",
            padding: ".375rem .75rem",
            fontSize: "1.25rem",
        },
    };

    return (
        <div style={{ margin: "10% auto" }}>
            <div style={{ marginBottom: "1%" }}>
                <p style={{ fontSize: "2rem" }}>Quantity</p>
            </div>
            <div
                style={{
                    display: "flex",
                    width: "25%",
                    justifyContent: "flex-start",
                    alignItems: "center",
                }}
            >
                <div style={{ marginRight: "5%" }}>
                    <button
                        className="cursor-pointer"
                        style={styles.button}
                        type="button"
                        onClick={() => dispatch(decrement())}
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
                            onChange={() => dispatch(amount())}
                        />
                    </div>
                </div>
                <div style={{ marginRight: "5%" }}>
                    <button
                        className="cursor-pointer"
                        style={styles.button}
                        type="button"
                        onClick={() => dispatch(increment())}
                    >
                        +
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Quantity;
