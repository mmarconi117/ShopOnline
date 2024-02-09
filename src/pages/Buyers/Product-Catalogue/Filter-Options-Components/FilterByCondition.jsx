import { useEffect, useState } from "react";

const FilterByCondition = ({ products, filterByCondition }) => {
    const [noDublicate, setNoDublicate] = useState([]);

    useEffect(() => {
        unique();
    }, []);

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

    const onClick = (condition) => {
        filterByCondition([{ condition: condition }]);
    };

    const productsConditionComp = noDublicate.map((product, index) => {
        // console.log(product);
        return (
            <div
                className="mb-3"
                key={index}
            >
                <button
                    onClick={() => {
                        onClick(product.condition);
                    }}
                    className="text-[#2284B6] capitalize 2xl:text-xl"
                    type="button"
            
                >
                    {product.condition}
                </button>
            </div>
        );
    });

    return (
        <div
            id="filter-by-condition-component"
            className="pt-4 pb-8 flex flex-col gap-2 2xl:pt-8 2xl:pb-12 items-stretch"
        >
            <div>
                <p className="text-base font-semibold 2xl:text-xl">CONDITION</p>
            </div>
            <div id="products-condition-container">{productsConditionComp}</div>
            <div className="w-full mx-auto text-center">
                <button
                    type="button"
                    className="text-[#2284B6] underline 2xl:text-xl"
                >
                    See more
                </button>
            </div>
        </div>
    );
};

export default FilterByCondition;
