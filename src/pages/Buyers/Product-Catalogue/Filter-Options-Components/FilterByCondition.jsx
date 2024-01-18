import { useEffect, useState } from "react";

const FilterByCondition = ({ products }) => {
    const [noDublicate, setNoDublicate] = useState([]);

    const unique = () => {
        let uniqueConditionArr = [];
        for (const product of products) {
            const isDublicate = uniqueConditionArr.find(
                (obj) => obj.condition === product.condition
            );
            if (!isDublicate) {
                uniqueConditionArr.push(product);
            }
        }
        setNoDublicate(uniqueConditionArr);
    };

    useEffect(() => {
        unique();
    }, []);

    const productsConditionComp = noDublicate.map((product, index) => {
        // console.log(product);
        return (
            <div
                className="mb-3"
                key={index}
            >
                <button
                    className="text-[#2284B6] text-2xl"
                    type="button"
                    style={{
                        textTransform: "capitalize",
                    }}
                >
                    {product.condition}
                </button>
            </div>
        );
    });

    return (
        <div
            id="filter-by-condition-component"
            className="border-b-2"
        >
            <div className="m-5">
                <div>
                    <p className="font-bold text-2xl">CONDITION</p>
                </div>
                <div id="products-condition-container">{productsConditionComp}</div>
                <div className="w-full mx-auto text-center">
                    <button
                        type="button"
                        className="text-[#2284B6] text-2xl"
                    >
                        See more
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FilterByCondition;
