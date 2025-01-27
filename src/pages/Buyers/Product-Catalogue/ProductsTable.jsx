import TotalResults from "./TotalResults";
import SortProducts from "./SortProducts";


// components
import Pagination from "../../../components/Pagination/Pagination";


const ProductsTable = ({ products, getProductsCopy, productsCopy, isResetPagination, totalProductsDisplaying, breadCrumbComp }) => {
    const catalogueComp = productsCopy.map((product, index) => {
        return (
            <div
                className="max-w-[300px] p-2 md:p-4 md:pb-20 border shadow-md rounded-xl flex flex-col justify-start items-stretch gap-4 lg:gap-5 mx-auto"
                key={index}
            >
                <figure>
                    <img src={product.img} />
                </figure>
                {/* product details container */}
                <div className="flex flex-col justify-between items-stretch gap-[6px] ">
                    {/* product description */}
                    <div className="mt-5">
                        <p className="text-2xl">{product.description}</p>
                    </div>
                    {/* product ratings */}
                    <div className="flex justify-start items-center gap-3 mb-3">
                        <div>
                            <svg
                                width="100"
                                height="24"
                                viewBox="0 0 66 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M5.98213 1.24636C6.1096 0.854057 6.6646 0.854057 6.79206 1.24636L7.72549 4.11915C7.78249 4.29459 7.94598 4.41337 8.13046 4.41337H11.1511C11.5636 4.41337 11.7351 4.94121 11.4014 5.18367L8.95763 6.95915C8.80839 7.06758 8.74594 7.25977 8.80294 7.43522L9.73637 10.308C9.86384 10.7003 9.41483 11.0265 9.08112 10.7841L6.63738 9.00859C6.48814 8.90016 6.28605 8.90016 6.13681 9.00859L3.69307 10.7841C3.35936 11.0265 2.91036 10.7003 3.03782 10.308L3.97125 7.43522C4.02825 7.25977 3.9658 7.06758 3.81657 6.95915L1.37282 5.18367C1.03911 4.94121 1.21062 4.41337 1.6231 4.41337H4.64374C4.82821 4.41337 4.9917 4.29459 5.0487 4.11915L5.98213 1.24636Z"
                                    fill="#EEC643"
                                />
                                <path
                                    d="M19.821 1.24636C19.9485 0.854057 20.5035 0.854057 20.6309 1.24636L21.5644 4.11915C21.6214 4.29459 21.7849 4.41337 21.9693 4.41337H24.99C25.4024 4.41337 25.5739 4.94121 25.2402 5.18367L22.7965 6.95915C22.6473 7.06758 22.5848 7.25977 22.6418 7.43522L23.5752 10.308C23.7027 10.7003 23.2537 11.0265 22.92 10.7841L20.4762 9.00859C20.327 8.90016 20.1249 8.90016 19.9757 9.00859L17.5319 10.7841C17.1982 11.0265 16.7492 10.7003 16.8767 10.308L17.8101 7.43522C17.8671 7.25977 17.8047 7.06758 17.6554 6.95915L15.2117 5.18367C14.878 4.94121 15.0495 4.41337 15.462 4.41337H18.4826C18.6671 4.41337 18.8306 4.29459 18.8876 4.11915L19.821 1.24636Z"
                                    fill="#EEC643"
                                />
                                <path
                                    d="M33.6594 1.24636C33.7868 0.854057 34.3418 0.854057 34.4693 1.24636L35.4027 4.11915C35.4597 4.29459 35.6232 4.41337 35.8077 4.41337H38.8283C39.2408 4.41337 39.4123 4.94121 39.0786 5.18367L36.6349 6.95915C36.4856 7.06758 36.4232 7.25977 36.4802 7.43522L37.4136 10.308C37.5411 10.7003 37.0921 11.0265 36.7584 10.7841L34.3146 9.00859C34.1654 8.90016 33.9633 8.90016 33.8141 9.00859L31.3703 10.7841C31.0366 11.0265 30.5876 10.7003 30.7151 10.308L31.6485 7.43522C31.7055 7.25977 31.6431 7.06758 31.4938 6.95915L29.0501 5.18367C28.7164 4.94121 28.8879 4.41337 29.3004 4.41337H32.321C32.5055 4.41337 32.6689 4.29459 32.7259 4.11915L33.6594 1.24636Z"
                                    fill="#EEC643"
                                />
                                <path
                                    d="M47.4982 1.24636C47.6257 0.854057 48.1807 0.854057 48.3082 1.24636L49.2416 4.11915C49.2986 4.29459 49.4621 4.41337 49.6466 4.41337H52.6672C53.0797 4.41337 53.2512 4.94121 52.9175 5.18367L50.4737 6.95915C50.3245 7.06758 50.2621 7.25977 50.3191 7.43522L51.2525 10.308C51.38 10.7003 50.9309 11.0265 50.5972 10.7841L48.1535 9.00859C48.0043 8.90016 47.8022 8.90016 47.6529 9.00859L45.2092 10.7841C44.8755 11.0265 44.4265 10.7003 44.5539 10.308L45.4874 7.43522C45.5444 7.25977 45.4819 7.06758 45.3327 6.95915L42.8889 5.18367C42.5552 4.94121 42.7267 4.41337 43.1392 4.41337H46.1599C46.3443 4.41337 46.5078 4.29459 46.5648 4.11915L47.4982 1.24636Z"
                                    fill="#EEC643"
                                />
                                <path
                                    d="M61.3371 1.24636C61.4646 0.854057 62.0196 0.854057 62.147 1.24636L63.0805 4.11915C63.1375 4.29459 63.301 4.41337 63.4854 4.41337H66.5061C66.9186 4.41337 67.0901 4.94121 66.7564 5.18367L64.3126 6.95915C64.1634 7.06758 64.1009 7.25977 64.1579 7.43522L65.0914 10.308C65.2188 10.7003 64.7698 11.0265 64.4361 10.7841L61.9924 9.00859C61.8431 8.90016 61.641 8.90016 61.4918 9.00859L59.0481 10.7841C58.7143 11.0265 58.2653 10.7003 58.3928 10.308L59.3262 7.43522C59.3832 7.25977 59.3208 7.06758 59.1715 6.95915L56.7278 5.18367C56.3941 4.94121 56.5656 4.41337 56.9781 4.41337H59.9987C60.1832 4.41337 60.3467 4.29459 60.4037 4.11915L61.3371 1.24636Z"
                                    fill="#E6E0E9"
                                />
                            </svg>
                        </div>
                        <div className="text-[#605D64]">
                            {product.ratings}
                        </div>
                    </div>
                    {/* price & qty left on produce */}
                    <div className="flex flex-col md:flex-row justify-start gap-2 md:gap-0 md:justify-between">
                        <div>
                            <p className="text-base font-medium lg:font-semibold lg:text-2xl text-[#09618E]">${product.price}</p>
                        </div>

                        <div className="flex text-[#938F96] items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-5 h-5 inline-block align-middle mr-1"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                                />
                            </svg>
                            <div className="text-[.75rem]">
                                {product.qty} items left
                            </div>
                        </div>
                    </div>
                </div>
                <button className="px-[30px] py-[14px] bg-[#EEC643] md:hidden text-[14px] font-semibold leading-5 rounded-md">Add to cart</button>
            </div>
        );
    });
    return (
        <div
            id="products-table-component"
            className="grow md:grow-0 flex flex-col justify-between items-stretch gap-5"
        >
            <div className="flex flex-col lg:gap-5 gap-16 items-stretch">
                <div className="flex flex-col lg:flex-row justify-between items-stretch lg:items-center gap-10 md:gap-0">
                    <div className="max-md:self-center">{breadCrumbComp}</div>
                    <div className="flex justify-around md:justify-between items-center ">
                        <div className="flex lg:hidden justify-between items-center gap-2">
                            <div className="flex flex-col gap-1">
                                <div className="w-5 h-0.5 rounded-md bg-[#2284B6]"/>
                                <div className="w-5 h-0.5 rounded-md bg-[#2284B6]"/>
                                <div className="w-5 h-0.5 rounded-md bg-[#2284B6]"/>
                            </div>
                            <div className="text-[#2284B6] text-[14px] leading-6 font-semibold">Advanced Searches</div>
                        </div>
                        <SortProducts />
                    </div>
                </div>
                <TotalResults totalProductsDisplaying={totalProductsDisplaying} />
                <div className="grid gap-y-6 gap-x-2 lg:gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">{catalogueComp}</div>
            </div>
            <div className="self-center">
                <Pagination
                    products={products}
                    getProductsCopy={getProductsCopy}
                    isResetPagination={isResetPagination}
                    productsCopy={productsCopy}
                />
            </div>
        </div>
    );
};

// ProductsTable.propTypes = {
//     products: PropTypes.string.isRequired,
//     getProductsCopy: PropTypes.string.isRequired,
//     productsCopy: PropTypes.string.isRequired,
//     isResetPagination: PropTypes.string.isRequired
// }

export default ProductsTable;
