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
                className="flex items-center gap-5"
                key={index}
            >
                <input
                    onClick={(e) => {
                        onClick(e.target.checked, e.target.name);
                    }}
                    type="checkbox"
                    name={business.type}
                    id={business.type}
                    className="rounded-xl w-[18px] h-[18px] 2xl:w-[24px] 2xl:h-[24px]"
                />
                <label
                    className="text-base capitalize 2xl:text-xl"
                >
                    {business.type}
                </label>
            </div>
        );
    });

    return (
        <div
            id="filter-by-business-type-component"
            className="border-b-2 pt-4 pb-8 flex flex-col gap-2 2xl:pt-8 2xl:pb-12 items-stretch"
        >
            <p className="text-base font-semibold 2xl:text-xl">BUSINESS TYPE</p>
            <div className="flex flex-col gap-2">{businessTypeComp}</div>
        </div>
    );
};

export default FilterByBusinessType;
