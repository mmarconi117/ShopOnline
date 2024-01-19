import { useState } from "react";

const FilterByPrice = ({ filterByPrice }) => {
    const [rangeMax, setRangeMax] = useState(10000);
    const [rangeMin, setRangeMin] = useState(rangeMax / 2);
    const [userInputMin, setUserInputMin] = useState(rangeMin);
    const [userInputMax, setUserInputMax] = useState(rangeMax);

    const updateRange = (rangeValue) => {
        setUserInputMin(rangeValue);
    };

    const userInputUpdateMin = (value) => {
        setUserInputMin(value);
        setRangeMin(value);
    };

    const userInputUpdateMax = (value) => {
        if (value > rangeMax) {
            setUserInputMax(rangeMax);
        } else {
            setUserInputMax(value);
        }
    };

    // apply filter
    const onClick = () => {
        filterByPrice(userInputMin, userInputMax);
    };

    return (
        <div
            id="filter-by-price-component"
            className="border-b-2 "
        >
            <div className="m-5">
                <div className="flex justify-between mb-5">
                    <div>
                        <p className="font-bold text-2xl">Price ($)</p>
                    </div>
                    <div>
                        <button
                            className="text-2xl"
                            type="button"
                            onClick={onClick}
                        >
                            Apply
                        </button>
                    </div>
                </div>
                <div className="w-full mb-5">
                    <input
                        onChange={(e) => {
                            updateRange(e.target.valueAsNumber);
                        }}
                        min="0"
                        // minLength={min}
                        // maxLength={max}
                        max={rangeMax}
                        step={"50"}
                        // value={value}
                        type="range"
                        className="w-full"
                    />
                </div>
                <div className="flex justify-evenly text-center">
                    <div className="border-2 border-gray-300 w-1/2 rounded-md">
                        <input
                            onChange={(e) => {
                                userInputUpdateMin(e.target.value);
                            }}
                            type="number"
                            className="p-2"
                            value={userInputMin}
                        />
                    </div>
                    <div className="w-1/6 ">
                        <p className="p-2">-</p>
                    </div>
                    <div className="border-2 border-gray-300 w-1/2 rounded-md">
                        <input
                            onChange={(e) => {
                                userInputUpdateMax(e.target.value);
                            }}
                            type="number"
                            className="p-2"
                            value={userInputMax}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FilterByPrice;
