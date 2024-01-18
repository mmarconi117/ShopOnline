import { useState, useEffect } from "react";

const FilterByBrand = ({ products, filterByBrand }) => {
    const [noDublicate, setNoDublicate] = useState([]); // no brand dubliplate
    let [brandChecked, setBrandChecked] = useState([]);

    const unique = () => {
        let uniqueBrandArr = [];
        for (const product of products) {
            const isDublicate = uniqueBrandArr.find((brand) => brand.name === product.brand);
            if (!isDublicate) {
                uniqueBrandArr.push({ name: product.brand });
            }
        }
        setNoDublicate(uniqueBrandArr);
    };

    useEffect(() => {
        unique();
    }, []);

    const handleOnClick = (checked, brand) => {
        if (checked) {
            brandChecked.push(brand);
        } else {
            const updated = brandChecked.filter(
                (item) => item.name.toLowerCase() !== brand.name.toLowerCase()
            );
            brandChecked = updated;
            setBrandChecked(updated);
        }
        filterByBrand(brandChecked);
    };

    const productsBrandComp = noDublicate.map((brand, index) => {
        return (
            <div
                className="mt-2 "
                key={index}
            >
                <div className="mt-2">
                    <label
                        className="flex items-center text-2xl"
                        style={{ textTransform: "capitalize" }}
                    >
                        <input
                            onClick={(e) => handleOnClick(e.target.checked, brand)}
                            type="checkbox"
                            name={brand.name}
                            id={brand.name}
                            className="mr-5 w-6 h-6 border-2"
                        />
                        {brand.name}
                    </label>
                </div>
            </div>
        );
    });

    return (
        <div
            id="product-brand-component"
            className="border-b-2"
        >
            <div className="m-5">
                <div id="search-container">
                    <div className="mb-5">
                        <p className="font-bold text-2xl">BRAND</p>
                    </div>
                    <div
                        id="search-bar"
                        className="mb-5"
                    >
                        <label className="flex">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                                />
                            </svg>

                            <input
                                type="text"
                                className="border-2 p-1 rounded-xl placeholder:text-gray-500 placeholder:px-5"
                                placeholder="Search"
                            />
                        </label>
                    </div>
                </div>
                {/* product brands */}
                <div id="input-gruops-container products-brand">{productsBrandComp}</div>
            </div>
        </div>
    );
};

export default FilterByBrand;
