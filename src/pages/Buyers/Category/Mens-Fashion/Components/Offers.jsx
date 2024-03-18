const OffersComponent = () => {
    const offers = Array.from({ length: 3 }).map((offer, index) => {
        return (
            <div
                key={index}
                className="border-2 w-1/6 rounded bg-white p-2"
            >
                <div className="flex justify-between">
                    <div>
                        <p className="text-2xl text-[#55A0C7] font-bold ">Tour $5 off</p>
                    </div>
                    <div>
                        <span>**98</span>
                    </div>
                </div>
                <div>
                    <span className="text-xs">Orders over $180</span>
                </div>
                <div className="flex justify-between my-2">
                    <div>
                        <span>Valid till 02/04</span>
                    </div>
                    <div>
                        <button>copy</button>
                    </div>
                </div>
            </div>
        );
    });
    return (
        <div
            id="offers-component"
            className="w-full my-5"
        >
            <div className="flex justify-around">{offers}</div>
        </div>
    );
};

export default OffersComponent;
