import { useState, useEffect } from "react";
import { useHref } from "react-router-dom";

// components
import SortProducts from "./SortProducts";
import FilterByBrand from "./Filter-Product-Components/FilterByBrand";
import FilterOptions from "./Filter-Product-Components/FilterOptions";

const ProductCatalogue = () => {
    const [breadCrumb, setBreadCrumb] = useState([]);

    const currentUrl = useHref();

    useEffect(() => {
        setUrlsHist();
    }, []);

    const setUrlsHist = () => {
        const urls = currentUrl.split("/");
        const paths = [];

        for (let i = 0; i < urls.length; i++) {
            if (urls[i] == "") {
                paths.push({ pathname: "home/", url: "/" });
            } else {
                if (i + 1 === urls.length) {
                    paths.push({ pathname: `${urls[i]}`, url: urls[i] });
                } else {
                    paths.push({ pathname: `${urls[i]}/`, url: urls[i] });
                }
            }
        }
        setBreadCrumb(paths);
    };

    const breadCrumbComp = breadCrumb.map((path, index) => {
        return (
            <a
                href={path.url}
                className="text-xl p-2 5 mr-2 5"
                key={index}
            >
                {path.pathname}
            </a>
        );
    });

    return (
        <div id="product-catalogue-page">
            {/* upper items  */}
            <div className="flex justify-between">
                <div id="total-results">
                    <p>1-24 of over 10,300 results</p>
                </div>
                {/* bread crumb  */}
                <div>{breadCrumbComp}</div>
                {/* sort products by */}
                <SortProducts />
            </div>
            <div id="filter-catalogue-div">
                <FilterOptions />
            </div>
        </div>
    );
};

export default ProductCatalogue;
