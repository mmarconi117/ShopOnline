import { useState, useEffect } from "react";

const Pagination = ({ products, updateCopy, productsCopy, isResetPagination }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(12);
    const [totalPages, setTotalPages] = useState(0);
    const [isPrevBtn, setIsPrevBtn] = useState(true);
    const [isNextBtn, setIsNextBtn] = useState(products.length > pageSize ? false : true);

    useEffect(() => {
        initiatePagination();
    }, [isResetPagination]);

    const onChangePage = (pageIndex) => {
        const startIndex = pageIndex * pageSize;
        let endIndex = startIndex + pageSize;

        if (endIndex > products.length) {
            endIndex = products.length;
        }

        updateCopy(products.slice(startIndex, endIndex));
    };

    const initiatePagination = () => {
        if (productsCopy.length > 0) {
            const sliced = productsCopy.slice(0, pageSize);
            updateCopy(sliced);
            setTotalPages(Math.ceil(productsCopy.length / pageSize));
        } else {
            const sliced = products.slice(0, pageSize);
            updateCopy(sliced);
            setTotalPages(Math.ceil(products.length / pageSize));
        }
    };

    const pagination = (maxPages, pageIndex, isActiveBtn) => {
        onChangePage(pageIndex - 1);

        let previousPage = pageIndex - 1;
        let nextPage = pageIndex + 1;
        if (pageIndex > 0) {
            setCurrentPage(pageIndex);
        } else {
            setCurrentPage(1);
        }

        if (pageIndex > 1) {
            setIsPrevBtn(false);
        } else {
            setIsPrevBtn(true);
        }

        if (pageIndex === maxPages) {
            setIsNextBtn(true);
        } else {
            setIsNextBtn(false);
        }
    };

    const navItemsComp = [...Array(totalPages).keys()].map((product, index) => {
        return (
            <div
                className="mr-2"
                key={index}
            >
                <button
                    onClick={(e) => {
                        console.log(e.target.innerText);
                    }}
                    aria-current="page"
                    className="relative z-10 inline-flex items-center rounded-3xl active:bg-[#09618E] px-4 py-2 text-sm font-semibold text-black focus:z-20 focus-visible:outline 
                                hover:cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#09618E] active:text-white "
                >
                    {index + 1}
                </button>
            </div>
        );
    });

    return (
        <div
            className="flex items-center justify-between px-4 py-3 sm:px-6"
            id="pagination-component"
        >
            <div className="flex flex-1 justify-between sm:hidden">
                <a
                    href="#"
                    className="relative inline-flex items-center rounded-md px-4 py-2 text-sm font-medium text-[#6DAECF]"
                >
                    Previous
                </a>
                <a
                    href="#"
                    className="relative ml-3 inline-flex items-center rounded-md bg-white px-4 py-2 text-sm font-medium text-[#09618E]"
                >
                    Next
                </a>
            </div>
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-center text-[#09618E]">
                <nav
                    className="isolate inline-flex -space-x-px rounded-md w-full items-center"
                    aria-label="Pagination"
                >
                    <button
                        type="button"
                        onClick={() => {
                            pagination(totalPages, currentPage - 1);
                        }}
                        disabled={isPrevBtn}
                        className="relative inline-flex items-center rounded-l-md px-2 py-2 disabled:cursor-not-allowed hover:cursor-pointer focus:z-20 focus:outline-offset-0 ml-5"
                    >
                        <div className="mr-5">
                            <svg
                                width="16"
                                height="17"
                                viewBox="0 0 30 30"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M20.2958 5.41842C20.8537 5.97631 20.8537 6.88083 20.2958 7.43872L12.7345 15L20.2958 22.5613C20.8537 23.1192 20.8537 24.0237 20.2958 24.5816C19.7379 25.1395 18.8334 25.1395 18.2755 24.5816L9.70406 16.0102C9.14617 15.4523 9.14617 14.5477 9.70406 13.9898L18.2755 5.41842C18.8334 4.86053 19.7379 4.86053 20.2958 5.41842Z"
                                    fill="#09618E"
                                />
                            </svg>
                        </div>
                        <span className="">Previous</span>
                    </button>
                    {navItemsComp}
                    <button
                        onClick={() => {
                            pagination(totalPages, currentPage + 1);
                        }}
                        disabled={isNextBtn}
                        className="relative inline-flex items-center rounded-r-md px-2 py-2 focus:z-20 disabled:cursor-not-allowed focus:outline-offset-0"
                    >
                        <span className="">Next</span>
                        <div className="ml-5">
                            <svg
                                width="16"
                                height="17"
                                viewBox="0 0 16 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M5.35401 13.6251C5.06137 13.3325 5.06137 12.858 5.35401 12.5654L9.32028 8.5991L5.35401 4.63282C5.06137 4.34018 5.06137 3.86571 5.35401 3.57307C5.64665 3.28043 6.12112 3.28043 6.41376 3.57307L10.9099 8.06922C11.2026 8.36186 11.2026 8.83633 10.9099 9.12897L6.41376 13.6251C6.12112 13.9178 5.64665 13.9178 5.35401 13.6251Z"
                                    fill="#09618E"
                                />
                            </svg>
                        </div>
                    </button>
                </nav>
            </div>
        </div>
    );
};

export default Pagination;
