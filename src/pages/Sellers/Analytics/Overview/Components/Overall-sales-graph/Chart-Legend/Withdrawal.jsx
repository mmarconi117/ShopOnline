const Withdrawal = () => {
    return (
        <div
            className="flex min-h-[130px] min-w-[180px] justify-between items-stretch rounded-lg py-3 px-6 bg-white shadow-md"
            id="withdrawal-component"
        >
            <div className="flex flex-col justify-start items-start gap-[6px]">
                <p>Withdrawal</p>
                <div className="text-2xl leading-10 font-semibold">24,908</div>
            </div>
            <div className="w-7 h-7 bg-[#E46962] rounded-md"/>
        </div>
    );
};

export default Withdrawal;
