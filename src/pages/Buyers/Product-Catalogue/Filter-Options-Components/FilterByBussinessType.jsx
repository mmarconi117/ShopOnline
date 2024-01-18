import { useEffect, useState } from "react";

const FilterByBusinessType = ({ products }) => {
    const [uniqueType, setUniqueType] = useState([]);

    const unique = () => {
        let uniqueTypeArr = [];
        for (const product of products) {
            const isDublicate = uniqueTypeArr.find(
                (obj) => obj.businessType === product.businessType
            );
            if (!isDublicate) {
                uniqueTypeArr.push(product);
            }
        }
        setUniqueType(uniqueTypeArr);
    };

    useEffect(() => {
        unique();
    }, []);

    const businessTypeComp = uniqueType.map((product, index) => {
        return (
            <div
                className="my-2"
                key={index}
            >
                <input
                    type="checkbox"
                    name={product.businessType}
                    id={product.businessType}
                    className="mr-3 w-6 h-6"
                />
                <label
                    className="inline-block align-top text-2xl"
                    style={{
                        textTransform: "capitalize",
                    }}
                >
                    {product.businessType}
                </label>
            </div>
        );
    });

    return (
        <div
            id="filter-by-business-type-component"
            className="border-b-2"
        >
            <div className="m-5">
                <div>
                    <p className="font-bold text-2xl">BUSINESS TYPE</p>
                </div>
                <div className="">{businessTypeComp}</div>
            </div>
        </div>
    );
};

export default FilterByBusinessType;
