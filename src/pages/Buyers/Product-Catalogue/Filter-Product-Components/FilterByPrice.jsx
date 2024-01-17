import { useState } from "react";

const FilterByPrice = () => {
    const [rangeMax, setRangeMax] = useState(10000);
    const [rangeMin, setRangeMin] = useState(rangeMax / 2);
    const [value, setValue] = useState();
    const [min, setMin] = useState(rangeMin);
    const [max, setMax] = useState(rangeMax);
    const [userInputMin, setUserInputMin] = useState(rangeMin);
    const [userInputMax, setUserInputMax] = useState(rangeMax);

    const updateRange = (rangeValue) => {
        setValue(rangeValue);
        const minDif = Math.abs(rangeValue - rangeMax);
        console.log(minDif);
        // setMax(minDif);
        // setMin(inputValue);
        setUserInputMax(minDif);
        setUserInputMin(rangeValue);
    };

    const userInputUpdateMin = (value) => {
        setUserInputMin(value);
    };

    const userInputUpdateMax = (value) => {
        if (value > rangeMax) {
            setUserInputMax(rangeMax);
            setRangeMax(value);
        } else {
            setUserInputMax(value);
        }
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
