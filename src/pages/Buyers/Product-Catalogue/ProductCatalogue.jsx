import { useState, useEffect } from "react";
import { useHref } from "react-router-dom";

// LIB
import { connect } from "react-redux";
import { productCatalogue } from "../../../reducersAndActions/actions/productCatalogue";

// components
import SortProducts from "./SortProducts";
import FilterOptions from "./Filter-Product-Components/FilterOptions";
import TotalResults from "./TotalResults";
import ProductsTable from "./ProductsTable";

const mapStateToProps = (state) => {
    return {
        products: state.productCatalogueReducer,
    };
};

const mapDispatchToProps = (dispatch) => ({
    getProductCatalogue: () => dispatch(productCatalogue()),
});

const ProductCatalogue = ({ products: { catalogue } }) => {
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
                <div className="">{breadCrumbComp}</div>
                {/* sort products by */}
                <SortProducts />
            </div>
            {/* total results component */}
            <TotalResults />
            <div className="w-full flex justify-between">
                <FilterOptions />
                <ProductsTable products={catalogue} />
            </div>
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductCatalogue)
// export default ProductCatalogue;
