import { useState, useEffect } from "react";
import { useHref } from "react-router-dom";

// LIB
import { connect } from "react-redux";
import { productCatalogue } from "../../../reducersAndActions/actions/productCatalogue";

// components
import FilterOptions from "./FilterOptions";
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

    const breadCrumbComp = breadCrumb.map((path, index, arr) => {
        return (
            <a
                href={path.url}
                className={`text-base tight-[0.15px] capitalize mr-1 font-semibold 2xl:text-2xl ${arr.length - 1 === index ? "text-[#2284B6]" : "text-[#938F96]"}`}
                key={index}
            >
                {path.pathname}
            </a>
        );
    });

    return (
        <div id="product-catalogue-page" className="min-h-screen p-4 md:py-6 md:px-10 flex items-stretch gap-5 2xl:gap-10 justify-start md:justify-center">
            <FilterOptions
                products={catalogue}
                productsCopy={productsCopy}
                filterByBrand={filterByBrand}
                filterByPrice={filterByPrice}
                filterByBusinessType={filterByBusinessType}
                filterByCondition={filterByCondition}
                filterByRatings={filterByRatings}
                totalProductsDisplaying={totalProductsDisplaying}
                totalProducts={totalProducts}
                breadCrumbComp={breadCrumbComp}
            />
            <ProductsTable
                products={catalogue}
                getProductsCopy={getProductsCopy}
                productsCopy={productsCopy}
                resetPagination={resetPagination}
                isResetPagination={isResetPagination}
                totalProductsDisplaying={totalProductsDisplaying}
                breadCrumbComp={breadCrumbComp}
            />
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductCatalogue)
// export default ProductCatalogue;
