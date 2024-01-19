import { useEffect, useState } from "react";

const FilterByBusinessType = ({ products, filterByBusinessType }) => {
    const [noDublicateType, setNoDublicateType] = useState([]);
    let [typeChecked, setTypeChecked] = useState([]);

    useEffect(() => {
        unique();
    }, []);

    const onClick = (checked, type) => {
        if (checked) {
            typeChecked.push({ type: type });
        } else {
            const update = typeChecked.filter((item) => {
                item.type.toLowerCase() !== type.toLowerCase();
            });
            typeChecked = update;
            setTypeChecked(update);
        }
        filterByBusinessType(typeChecked);
    };

    const unique = () => {
        let uniqueTypeArr = [];
        for (const product of products) {
            const isDublicate = uniqueTypeArr.find((obj) => obj.type === product.businessType);
            if (!isDublicate) {
                uniqueTypeArr.push({ type: product.businessType });
            }
        }
        setNoDublicateType(uniqueTypeArr);
    };

    const businessTypeComp = noDublicateType.map((business, index) => {
        return (
            <div
                className="my-2"
                key={index}
            >
                <input
                    onClick={(e) => {
                        onClick(e.target.checked, e.target.name);
                    }}
                    type="checkbox"
                    name={business.type}
                    id={business.type}
                    className="mr-3 w-6 h-6"
                />
                <label
                    className="inline-block align-top text-2xl"
                    style={{
                        textTransform: "capitalize",
                    }}
                >
                    {business.type}
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
