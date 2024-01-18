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

    // function to get products from children component eg: from pagination copmonent
    const getProductsCopy = (copiedProducts) => {
        setProductsCopy(copiedProducts);
    };

    const filterByBrand = (brandArr) => {
        filterBy("brand", brandArr);
    };

    const filterByBusinessType = (typesArr) => {};

    const filterByPrice = (min, max) => {
        filterBy("price", [min, max]);
    };

    const filterByRatings = (ratingsArr) => {
        filterBy("ratings", ratingsArr);
    };
    const filterByCondition = (condition) => {};

    const currentUrl = useHref();

    const filterBy = (filterType, filterTypeData) => {
        let filteredProducts = [];
        if (productsCopy.length > 0) {
            switch (filterType) {
                case "brand":
                    productsCopy.forEach((product) => {
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
                    const filtered = productsCopy.filter(
                        (product) => product.price >= min && product.price <= max
                    );
                    filteredProducts = filtered;
                    setProductsCopy(filteredProducts);
                    resetPagination();
                    break;
                case "ratings":
                    productsCopy.forEach((product) => {
                        arr.forEach((item) => {
                            if (product.ratings === item.value) {
                                filteredProducts.push(product);
                            }
                        });
                    });
                    setProductsCopy(filteredProducts);
                    resetPagination();
                    break;
                default:
                    return filteredProducts;
                // break;
            }
        } else {
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
                    const filtered = catalogue.filter(
                        (product) => product.price >= min && product.price <= max
                    );
                    filteredProducts = filtered;

                    setProductsCopy(filteredProducts);
                    resetPagination();
                    break;
                case "ratings":
                    catalogue.forEach((product) => {
                        arr.forEach((item) => {
                            if (product.ratings === item.value) {
                                filteredProducts.push(product);
                            }
                        });
                    });
                    setProductsCopy(filteredProducts);
                    resetPagination();
                    break;
                default:
                    return filteredProducts;
                // break;
            }
        }
        resetPagination();
    };

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

    const resetPagination = () => {
        setIsResetPagination(!isResetPagination);
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
