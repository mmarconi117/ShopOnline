import { useState, useEffect } from "react";
import { useHref } from "react-router-dom";

// LIB
import { connect } from "react-redux";
import { productCatalogue } from "../../../reducersAndActions/actions/productCatalogue";

// components
import SortProducts from "./SortProducts";
import FilterOptions from "./FilterOptions";
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
    const [productsCopy, setProductsCopy] = useState([]);
    const [isResetPagination, setIsResetPagination] = useState(true);
    const [totalProducts, setTotalProducts] = useState(catalogue.length);
    const [totalProductsDisplaying, setTotalProductsDisplaying] = useState(0);

    useEffect(() => {
        setUrlsHist();
    }, []);

    // function to get products from children component eg: from pagination copmonent
    const getProductsCopy = (copiedProducts) => {
        setProductsCopy(copiedProducts);
        setTotalProductsDisplaying(copiedProducts.length);
    };

    const filterByBrand = (brandArr) => {
        filterBy("brand", brandArr);
    };

    const filterByBusinessType = (typesArr) => {
        filterBy("business_type", typesArr);
    };

    const filterByPrice = (min, max) => {
        filterBy("price", [min, max]);
    };

    const filterByRatings = (ratingsArr) => {
        filterBy("ratings", ratingsArr);
    };
    const filterByCondition = (condition) => {
        filterBy("condition", condition);
    };

    const currentUrl = useHref();

    const filterBy = (filterType, filterTypeData) => {
        let filteredProducts = [];
        // if (productsCopy.length > 0) {
        switch (filterType) {
            case "brand":
                catalogue.forEach((product) => {
                    filterTypeData.forEach((brand) => {
                        if (brand.name === product.brand) {
                            filteredProducts.push(product);
                        }
                    });
                });
                setProductsCopy(filteredProducts);
                resetPagination();
                break;
            case "price":
                const min = filterTypeData[0];
                const max = filterTypeData[1];
                const filtered = catalogue.filter(
                    (product) => product.price >= min && product.price <= max
                );
                filteredProducts = filtered;
                setProductsCopy(filteredProducts);
                resetPagination();
                break;
            case "ratings":
                catalogue.forEach((product) => {
                    filterTypeData.forEach((item) => {
                        // console.log(product.ratings, item.value);
                        // console.log(Math.ceil(product.ratings) <= Math.ceil(item.value));
                        // console.log(Math.ceil(product.ratings), Math.ceil(item.value));
                        if (Math.ceil(product.ratings) <= Math.ceil(item.value)) {
                            filteredProducts.push(product);
                        }
                    });
                });
                setProductsCopy(filteredProducts);
                resetPagination();
                break;
            case "business_type":
                catalogue.forEach((product) => {
                    filterTypeData.forEach((item) => {
                        if (product.businessType.toLowerCase() === item.type) {
                            filteredProducts.push(product);
                        }
                    });
                });
                setProductsCopy(filteredProducts);
                resetPagination();
                break;
            case "condition":
                catalogue.forEach((product) => {
                    filterTypeData.forEach((item) => {
                        if (product.condition === item.condition) {
                            filteredProducts.push(product);
                        }
                    });
                });
                setProductsCopy(filteredProducts);
                resetPagination();
                break;
            default:
                return filteredProducts;
        }
        resetPagination();
    };

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

    const resetPagination = () => {
        setIsResetPagination(!isResetPagination);
    };

    const breadCrumbComp = breadCrumb.map((path, index) => {
        return (
            <a
                href={path.url}
                className="text-xl p-2 5 mr-2 5 inline-block align-sub"
                key={index}
            >
                {path.pathname}
            </a>
        );
    });

    return (
        <div id="product-catalogue-page">
            {/* upper items, total results, breadcrumbs sort by components  */}
            <div className="flex justify-between mt-10">
                <div id="total-results">
                    <p className="inline-block align-sub">
                        1-{totalProductsDisplaying} of over {totalProducts} results
                    </p>
                </div>
                {/* bread crumb  */}
                <div>{breadCrumbComp}</div>
                {/* sort products by */}
                <SortProducts />
            </div>
            {/* total results component */}
            <TotalResults totalProductsDisplaying={totalProductsDisplaying} />
            <div className="w-full flex justify-between">
                <FilterOptions
                    products={catalogue}
                    productsCopy={productsCopy}
                    filterByBrand={filterByBrand}
                    filterByPrice={filterByPrice}
                    filterByBusinessType={filterByBusinessType}
                    filterByCondition={filterByCondition}
                    filterByRatings={filterByRatings}
                />
                <ProductsTable
                    products={catalogue}
                    getProductsCopy={getProductsCopy}
                    productsCopy={productsCopy}
                    resetPagination={resetPagination}
                    isResetPagination={isResetPagination}
                />
            </div>
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductCatalogue)
// export default ProductCatalogue;
