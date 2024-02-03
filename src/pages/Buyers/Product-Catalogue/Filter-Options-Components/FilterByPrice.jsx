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
        
        <div className="border-b-2 pt-4 pb-8 flex flex-col gap-6 2xl:pt-8 2xl:pb-12 items-stretch" id="filter-by-price-component">
            <div className="flex justify-between">
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
            <div className="flex text-center gap-5 items-center">
                <div className="border-2 border-gray-300 rounded-md">
                    <input
                        onChange={(e) => {
                            userInputUpdateMin(e.target.value);
                        }}
                        type="number"
                        className="p-2 max-w-[74px]"
                        value={userInputMin}
                    />
                </div>
                <div> - </div>
                
                <div className="border-2 border-gray-300 rounded-md">
                    <input
                        onChange={(e) => {
                            userInputUpdateMax(e.target.value);
                        }}
                        type="number"
                        className="p-2 max-w-[102px]"
                        value={userInputMax}
                    />
                </div>
            </div>
        </div>
    );
};

export default FilterByPrice;
