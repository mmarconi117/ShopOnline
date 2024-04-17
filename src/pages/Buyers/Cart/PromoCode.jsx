
function PromoCode() {

    return (
        <div className="bg-white px-3 py-4 border-8 border-gray-200 w-full">
            <span className="text-xl font-bold" >Promotions</span>
            <div className="mb-5 flex gap-4 sm:flex-row  items-center">
                <input className="mt-2 rounded bg-gray-100 py-2 px-3 w-64 text-sm border border-solid border-gray-300" type="text" name="promo" placeholder="Promo Code" />
                <button
                    type="button"
                    className="flex justify-center items-center rounded-[5px] gap-[10px] text-[#0F1111] bg-[#EEC643] h-[40px] lg:w-[30%] px-[7px] py-[2px] text-[14px] font-semibold leading-5 lg:text-base lg:leading-[19.2px] lg:font-normal"
                >
                    Apply
                </button>
            </div>
        </div>
    );
}

export default PromoCode;

