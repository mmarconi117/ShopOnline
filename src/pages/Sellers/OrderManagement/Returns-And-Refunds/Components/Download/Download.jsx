import { useEffect, useState } from "react";

const Download = ({ returnsCopy, itemIndex }) => {
    const [disabled, setDisabled] = useState(true);
    const [itemsSelected, setItemsSelected] = useState([]);

    useEffect(() => {
        if (returnsCopy.length > 0 && itemIndex !== undefined) {
            handleSelectedItem(returnsCopy[itemIndex]);
        }
    }, [returnsCopy]);

    const handleSelectedItem = (item) => {
        let update;
        if (item.selected) {
            update = [...itemsSelected, item];
        } else {
            update = itemsSelected.filter((item) => item.orderNumber !== item.orderNumber);
        }
        setItemsSelected(update);
    };

    const download = () => {
        // download functionality here
    };
    return (
        <div id="download-compoent">
            <button
                className="flex"
                style={{
                    cursor: `${disabled ? "not-allowed" : "pointer"}`
                }}
                type="button"
                onClick={() => {
                    // download()
                }}
            >
                <div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 9.75v6.75m0 0-3-3m3 3 3-3m-8.25 6a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z"
                        />
                    </svg>
                </div>
                Download
            </button>
        </div>
    );
};

export default Download;
