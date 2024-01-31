import { useState } from "react";

const TotalResults = ({ totalProductsDisplaying }) => {
    console.log(totalProductsDisplaying);
    return (
        <div
            id="total-results-component"
            className="w-full"
        >
            <div className="w-1/2 my-5 mx-auto text-overflow:ellipsis">
                <p className="font-bold text-2xl ">Showing {totalProductsDisplaying} results</p>
            </div>
        </div>
    );
};

export default TotalResults;
